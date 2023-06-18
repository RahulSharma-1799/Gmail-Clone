import express from 'express';
import connectToMongo from './database/db.js';
connectToMongo();

const app = express();
const port = 5000;

app.listen(port, () => {
  console.log(`Server is started on port ${port}`);
});
