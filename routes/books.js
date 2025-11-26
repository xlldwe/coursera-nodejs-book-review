import express from "express";
import {getAllBooks, getBooksByISBN, getBooksByAuthor, getBooksByTitle, getBookReviews,} from "../controllers/booksController.js";

const router = express.Router();

router.get("/", getAllBooks);
router.get("/isbn/:isbn", getBooksByISBN);
router.get("/author/:author", getBooksByAuthor);
router.get("/title/:title", getBooksByTitle);
router.get("/:isbn/reviews", getBookReviews);

export default router;
