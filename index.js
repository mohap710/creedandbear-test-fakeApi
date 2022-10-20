import express from 'express';

// Routes 
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";

const app = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use("/auth", authRoutes);

app.listen(3030, function() {
  console.log(`Server is running at http://localhost:3030/users`);
});