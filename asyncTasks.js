import axios from "axios";

export function getAllBooksCallback(callback) {
    axios.get("http://localhost:3000/books").then((response) => callback(null, response.data)).catch((err) => callback(err));
}

export function getBookByISBN(isbn) {
    return axios.get(`http://localhost:3000/books/isbn/${isbn}`);
}

export async function getByAuthor(author) {
    const res = await axios.get(
        `http://localhost:3000/books/author/${author}`
    );
    return res.data;
}

export async function getByTitle(title) {
    const res = await axios.get(
        `http://localhost:3000/books/title/${title}`
    );
    return res.data;
}

async function runAll() {
    console.log("=== Task 10: Get all books (callback) ===");
    await new Promise((resolve) => {
        getAllBooksCallback((err, data) => {
            if (err) {
                console.error("Task 10 Error:", err.message);
            } else {
                console.log("Task 10 Books:", data);
            }
            resolve();
        });
    });

    console.log("\n=== Task 11: Get by ISBN (Promise) ===");
    try {
        const res = await getBookByISBN("1");
        console.log("Task 11 Book with ISBN 1:", res.data);
    } catch (err) {
        console.error("Task 11 Error:", err.message);
    }

    console.log("\n=== Task 12: Get by author (async/await) ===");
    try {
        const byAuthor = await getByAuthor("Robert C. Martin");
        console.log("Task 12 Books by author:", byAuthor);
    } catch (e) {
        console.error("Task 12 Error:", e.message);
    }

    console.log("\n=== Task 13: Get by title (async/await) ===");
    try {
        const byTitle = await getByTitle("Clean Code");
        console.log("Task 13 Books by title:", byTitle);
    } catch (e) {
        console.error("Task 13 Error:", e.message);
    }
}

runAll();
