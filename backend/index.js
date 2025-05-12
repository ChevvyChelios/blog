import express from "express";
import connectDB from "./lib/connectDB.js";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import commentRouter from "./routes/comment.route.js";
import webhookRouter from "./routes/webhook.route.js";
import { clerkMiddleware, requireAuth } from "@clerk/express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

// app.use(
//   cors(process.env.CLIENT_URL)
// );
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: "GET, POST, PUT, DELETE",
    allowedHeaders: ["Content-Type"],
    credentials: true,
  })
);

app.use(clerkMiddleware());
app.use("/webhooks", webhookRouter);
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Hey this is my API running 🥳");
});

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

app.use((error, req, res, next) => {
  res.status(error.status || 500);

  res.json({
    message: error.message || "Something went wrong!",
    status: error.status,
    ...(process.env.NODE_ENV === "development" && { stack: error.stack }), // Include stack trace only in development
  });
});


app.listen(port, () => {
  connectDB();
  console.log(`Server is running on port ${port}`);
});
