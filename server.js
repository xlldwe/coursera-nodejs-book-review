import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import bookRoutes from "./routes/books.js";
import authRoutes from "./routes/auth.js";
import reviewRoutes from "./routes/reviews.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/books", bookRoutes);
app.use("/auth", authRoutes);
app.use("/reviews", reviewRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));
