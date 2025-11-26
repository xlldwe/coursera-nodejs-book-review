import fs from "fs";

const books = JSON.parse(fs.readFileSync("./data/books.json"));

export const getAllBooks = (req, res) => res.json(books);

export const getBooksByISBN = (req, res) => {
    res.json(books[req.params.isbn] || {});
};

export const getBooksByAuthor = (req, res) => {
    const author = req.params.author;
    const result = Object.values(books).filter(
        book => book.author.toLowerCase().includes(author.toLowerCase())
    );

    res.json(result);
};

export const getBooksByTitle = (req, res) => {
    const title = req.params.title;
    const result = Object.values(books).filter(
        book => book.title.toLowerCase().includes(title.toLowerCase())
    );

    res.json(result);
};

export const getBookReviews = (req, res) => {
    const book = books[req.params.isbn];
    res.json(book?.reviews || {});
};
