import { client } from "./index.js";
import bcrypt from "bcrypt";

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

export async function genPassword(password) {
  const salt = await bcrypt.genSalt(10); // bcrypt.genSalt(no. of rounds)
  console.log(salt);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}

export async function createUser(username, hashedPassword) {
  return await client
    .db("b44wd")
    .collection("users")
    .insertOne({ username: username, password: hashedPassword });
}

export async function getUserByName(username) {
  return await client
    .db("b44wd")
    .collection("users")
    .findOne({ username: username });
}
