import express from "express";
import {
  getAllBooks,
  getBookById,
  deleteBookById,
  addBooks,
  updateBookById,
} from "../helper.js";


const router = express.Router();

//get all books

router.get("/", async (req, res) => {
  const { language, rating } = req.query;
  console.log(req.query, language);
  // let filteredBooks = books;
  // if (language) {
  //   filteredBooks = books.filter((bk) => bk.language === language);
  // }
  if (req.query.rating) {
    req.query.rating = +req.query.rating;
  }
  const book = await getAllBooks(req);
  res.send(book);
});

//get books by id

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  //db.books.findOne({id: "001"})
  //const book = books.find((bk) => bk.id === id);
  const book = await getBookById(id);
  book ? res.send(book) : res.status(404).send({ message: "No Books found" });
});

//delete books by id

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  //db.books.findOne({id: "001"})
  //const book = books.find((bk) => bk.id === id);
  const book = await deleteBookById(id);
  res.send(book);
});

//Add book data

router.post("/", async (req, res) => {
  const newBooks = req.body;
  console.log(req.body);
  const result = await addBooks(newBooks);
  res.send(result);
});

// update the book

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedBooks = req.body;
  const result = await updateBookById(id, updatedBooks);
  res.send(result);
});

export const booksRouter = router;
