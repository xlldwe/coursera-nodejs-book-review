import fs from "fs";

const booksFile = "./data/books.json";

export const addReview = (req, res) => {
    const { isbn } = req.params;
    const { review } = req.body;

    const books = JSON.parse(fs.readFileSync(booksFile));

    if (!books[isbn].reviews) books[isbn].reviews = {};
    books[isbn].reviews[req.user.username] = review;

    fs.writeFileSync(booksFile, JSON.stringify(books));

    res.json({ message: "Review added" });
};

export const updateReview = (req, res) => {
    const { isbn } = req.params;
    const { review } = req.body;

    const books = JSON.parse(fs.readFileSync(booksFile));

    if (!books[isbn]?.reviews?.[req.user.username])
        return res.status(403).json({ message: "Review not found" });

    books[isbn].reviews[req.user.username] = review;
    fs.writeFileSync(booksFile, JSON.stringify(books));

    res.json({ message: "Review updated" });
};

export const deleteReview = (req, res) => {
    const { isbn } = req.params;

    const books = JSON.parse(fs.readFileSync(booksFile));

    delete books[isbn].reviews[req.user.username];
    fs.writeFileSync(booksFile, JSON.stringify(books));

    res.json({ message: "Review deleted" });
};
