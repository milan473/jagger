import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import { connectDB } from "./config/db.js";
import indexRoutes from "./routes/index.js";
import authRoutes from "./routes/authRoutes.js";

import { notFound } from "./middlewares/notFound.js";
import { errorHandler } from "./middlewares/errorHandler.js";

dotenv.config();

const app = express();

// 🔐 security
app.use(helmet());

// 🍪 cookies (MUST be before routes)
app.use(cookieParser());

// 🌐 CORS (cookies support)
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

// 📦 body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

// 🗄️ database
connectDB();

// 🚏 routes
app.use("/api", indexRoutes);
app.use("/api/auth", authRoutes);

// ❌ errors
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
