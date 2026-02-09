// import getConfig from "next/config";
import path from "path";

const serverPath = () => {
  const POST_FOLDER_NAME = "document";
  const POSTS_DIRECTORY = path.join(process.cwd(), "public", POST_FOLDER_NAME);
  return POSTS_DIRECTORY;
};

export default serverPath;
