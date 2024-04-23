const rooturl = "https://nice-dogs.vercel.app/api/dogs";

export async function getAllDogs() {
  const res = await fetch(rooturl);
  return await res.json();
}

export async function getDogBySlug(slug) {
  const res = await fetch(`${rooturl}?slug=${slug}`);
  return await res.json();
}
