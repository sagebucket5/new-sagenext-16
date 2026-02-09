const BASE_URL = "https://snb.thesagenext.com/support/index.php/wp-json/wp/v2";

export async function getPosts() {
  const postsRes = await fetch(BASE_URL + "/posts?per_page=10&_embed");
  //   ?per_page=4&_fields=author,id,date,title,link,categories,excerpt,slug,_links,_embedded&_embed
  const posts = await postsRes.json();
  const headers = await postsRes.headers();
  return [posts, headers];
}

// Get Category
export async function getCategories() {
  const res = await fetch(BASE_URL + "/categories?per_page=22");
  const categories = res.json();
  return categories;
}


//Get Popular post
export async function getPopularPost() {
  const res = await fetch(
    BASE_URL +
    "/posts?per_page=5&_fields=author,id,date,title,link,categories,excerpt,slug,_links,_embedded&_embed"
  );
  const popPosts = await res.json();
  return popPosts;
}

//Recent Post
export async function getRecentPost() {
  const res = await fetch(
    BASE_URL +
    "/posts?per_page=6&_fields=author,id,date,title,link,categories,excerpt,slug,_links,_embedded&_embed"
  );
  const recPosts = await res.json();
  return recPosts;
}

//Get by slug
export async function getPost(slug) {
  const postsRes = await fetch(BASE_URL + "/posts?_embed&slug=" + slug);
  const post = await postsRes.json();
  return post;
}

//Get Category slug
export async function getCat(slug) {
  const cats = await getCategories();
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
