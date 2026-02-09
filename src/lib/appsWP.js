const BASE_URL = "https://snb.thesagenext.com/app/index.php/wp-json/wp/v2";

export async function getPosts() {
  const postsRes = await fetch(BASE_URL + "/posts?per_page=10&_embed", { next: { revalidate: 86400 } });
  //   ?per_page=4&_fields=author,id,date,title,link,categories,excerpt,slug,_links,_embedded&_embed
  const posts = await postsRes.json();
  const headers = await postsRes.headers();
  return [posts, headers];
}
// get the psot title
export async function getPostsTitle() {
  const postsRes = await fetch(BASE_URL + "/posts?per_page=100&_fields=id,title,slug");
  const posts = await postsRes.json();
  const headers = await postsRes.headers();
  return [posts, headers];
}

// Get Category
export async function getCategorie(cat_id) {
  const res = await fetch(BASE_URL + `/posts?_embed&per_page=6&categories=${cat_id}`, { next: { revalidate: 86400 } });
  const categories = res.json();
  return categories;
}
//Get all Categories
export async function getAllCategories() {
  const catRes = await fetch(BASE_URL + "/categories?per_page=20", { next: { revalidate: 86400 } });
  const categories = await catRes.json();
  return categories;
}

//Get All post
export async function getAllPost(page) {
  let totalPages = 0;
  let totalRecord = 0;
  let posts = [];

  try {
    const postsRes = await fetch(`https://snb.thesagenext.com/app/index.php/wp-json/wp/v2/posts?_embed&page=${page}&per_page=20`, { next: { revalidate: 86400 } });
    totalRecord = postsRes.headers["x-wp-total"];
    totalPages = postsRes.headers["x-wp-totalpages"];
    // console.log("Total page is ", totalPages);
    posts = await postsRes.json();
    return [posts, totalPages, totalRecord];
  } catch (err) {
    console.log(err);
    return [posts, totalPages, totalRecord];
  }
}

//Get Popular post
export async function getPopularPost() {
  const res = await fetch(
    BASE_URL +
    "/posts?year=2024&per_page=6&_fields=author,id,date,title,link,categories,excerpt,slug,_links,_embedded&_embed"
    , { next: { revalidate: 86400 } });
  const popPosts = await res.json();
  return popPosts;
}

//Recent Post
export async function getRecentPost() {
  const res = await fetch(
    BASE_URL +
    "/posts?per_page=6&_fields=author,id,date,title,link,categories,excerpt,slug,_links,_embedded&_embed"
    , { next: { revalidate: 86400 } });
  const recPosts = await res.json();
  return recPosts;
}

//Get by slug
export async function getPost(slug) {
  const postsRes = await fetch(`${BASE_URL}/posts?_embed&slug=${slug}`, { next: { revalidate: 86400 } });
  const post = await postsRes.json();
  return post;
}

//Get Category slug
export async function getCat(slug) {
  const cats = await getCategorie();
  const catArray = cats.filter((cat) => cat.slug == slug);
  const cat = catArray.length > 0 ? catArray[0] : null;
  return cat;
}

// Fetch related articles based on category and exclude the current post
// export async function getRelatedArticles(postId, categoryIds) {
//   const res = await fetch(
//     `${BASE_URL}/posts?per_page=4&categories=${categoryIds}&exclude=${postId}&_fields=author,id,date,title,link,categories,excerpt,slug,_links,_embedded&_embed`
//   );
//   const relatedPosts = await res.json();
//   return relatedPosts;
// }

//Get slug
export async function getSlugs(type) {
  let elements = [];
  switch (type) {
    case "posts":
      elements = await getPosts();
      break;
  }

  const elementsIds = elements.map((element) => {
    return {
      params: {
        slug: element.slug,
      },
    };
  });
  return elementsIds;
}
