import fs from "fs";
import path from "path";
import mime from "mime-types";
import { fileURLToPath } from "url";
import { S3Client } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const SPACES_REGION = "sfo3";
const SPACES_BUCKET = "sage-storage";
const SPACES_KEY = "DO008VPG3Y9G26GTCDL9";
const SPACES_SECRET= "R5hw89BveI/TZfrbbei5+uqJT6qqPQsietKBcRdo2yY";
const SPACES_ENDPOINT = "https://sfo3.digitaloceanspaces.com";

if (!SPACES_BUCKET || !SPACES_KEY || !SPACES_SECRET || !SPACES_ENDPOINT) {
  throw new Error("Missing Spaces vars");
}

const s3 = new S3Client({
  region: SPACES_REGION,
  endpoint: SPACES_ENDPOINT,
  credentials: {
    accessKeyId: SPACES_KEY,
    secretAccessKey: SPACES_SECRET,
  },
});

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(e => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : p;
  });
}

function toPosix(p) {
  return p.split(path.sep).join("/");
}

async function uploadFile(file, base, prefix) {
  const key = toPosix(path.join(prefix, path.relative(base, file)));

  await new Upload({
    client: s3,
    params: {
      Bucket: SPACES_BUCKET,
      Key: key,
      Body: fs.createReadStream(file),
      ContentType: mime.lookup(file) || "application/octet-stream",
      ACL: "public-read",
    },
  }).done();

  console.log("Uploaded:", key);
}

async function main() {
  const localDir = process.argv[2];
  const remotePrefix = process.argv[3] || "";

  if (!localDir) throw new Error("Usage: node upload-to-spaces.mjs <dir> <prefix>");

  const abs = path.resolve(localDir);
  const files = walk(abs);

  for (const f of files) {
    await uploadFile(f, abs, remotePrefix);
  }

  console.log("All files uploaded");
}

main();