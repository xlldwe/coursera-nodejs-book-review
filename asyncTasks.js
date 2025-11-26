import axios from "axios";

// Task 10 — async callback
export function getAllBooksCallback(callback) {
    axios.get("http://localhost:3000/books")
        .then(response => callback(null, response.data))
        .catch(err => callback(err));
}

// Task 11 — Promises
export function getBookByISBN(isbn) {
    return axios.get(`http://localhost:3000/books/isbn/${isbn}`);
}

// Task 12 — Author (async/await)
export async function getByAuthor(author) {
    const res = await axios.get(
        `http://localhost:3000/books/author/${author}`
    );
    return res.data;
}

// Task 13 — Title (async/await)
export async function getByTitle(title) {
    const res = await axios.get(
        `http://localhost:3000/books/title/${title}`
    );
    return res.data;
}
