import express from 'express';
import cors from 'cors';

// Routes 
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";

const app = express();
app.use(express.json());

// Cors setup
const cors = require('cors')
app.use(cors());
app.use((_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use("/users", userRoutes);
app.use("/auth", authRoutes);

app.listen(3030, function() {
  console.log(`Server is running at http://localhost:3030/users`);
});
