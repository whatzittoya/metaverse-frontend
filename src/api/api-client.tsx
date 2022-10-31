export const endpoint = process.env.REACT_APP_SERVICE_URI
  ? process.env.REACT_APP_SERVICE_URI
  : "http://0.0.0.0:8055/";

export function getCategoriesRequest() {
  return fetch(`${endpoint}items/category`);
}

export function getCategoryInfo(categoryId: string) {
  return fetch(
    `${endpoint}items/object?fields=id,name,width,height,image,category.name&filter[category][id]=${categoryId}`
  );
}

export async function getWindow() {
  return await (
    await fetch(
      `${endpoint}items/object?fields=id,name,width,height,image,category.name&filter[category][name]=window`
    )
  ).json();
}

export async function getDoor() {
  return await (
    await fetch(
      `${endpoint}items/object?fields=id,name,width,height,image,category.name&filter[category][name]=door`
    )
  ).json();
}
