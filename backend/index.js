import express, { response } from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

//Middleware for parsing request body
app.use(express.json());

//Middleware CORS policy
app.use(cors());

//Dyanmic Use of Routes
app.use('/books',booksRoute);

app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('Welcome To MERN Stack Tutorial');
});

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${ PORT }`);
    });
  })
  .catch((error) => {
    console.log(error);
  });



// app.get('/books', asnyc (request, response) => {
//   try {
//     const books = await Book.find({});

//     return response.status(200).json({
//       count: books.length,
//       data: books
//      });

//  } catch (error) {
//     console.log(error.message);
//     response.status(500).send({ message: error.message });
//  }
// });
