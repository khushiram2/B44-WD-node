import { client } from "./index.js";

export async function getAllBooks(req) {
  return await client.db("b44wd").collection("books").find(req.query).toArray();
}
export async function getBookById(id) {
  return await client.db("b44wd").collection("books").findOne({ id: id });
}
export async function deleteBookById(id) {
  return await client.db("b44wd").collection("books").deleteOne({ id: id });
}
export async function addBooks(newBooks) {
  return await client.db("b44wd").collection("books").insertMany(newBooks);
}

export async function updateBookById(id, updatedBooks) {
  return await client
    .db("b44wd")
    .collection("books")
    .updateOne({ id: id }, { $set: updatedBooks });
}
