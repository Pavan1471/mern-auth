import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes.js';
// import Complaint from './models/Complaint.js';
const port = process.env.PORT || 5000;
import cors from 'cors';


connectDB();
// const router = express.Router();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use('/api/users', userRoutes);

if (process.env.NODE_ENV === 'production') {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, '/frontend/dist')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running....');
  });
}

const bookingSchema = new mongoose.Schema({
  name: String,
  mobile: Number,
  email: String,
  pincode: Number,
  address: String
});

const Booking = mongoose.model('Booking', bookingSchema);

// POST route to handle form submission
app.post('/api/book', async (req, res) => {
  try {
      const booking = new Booking(req.body);
      await booking.save();
      res.status(201).json({ message: 'Booking saved successfully' });
  } catch (error) {
      res.status(500).json({ message: 'Error saving booking', error });
  }
});
// GET route to fetch all bookings
app.get('/api/bookings', async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching bookings', error });
  }
});

const complaintSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mobile: { type: Number, required: true },
  email: { type: String, required: true },
  pincode: { type: Number, required: true },
  complaintDetails: { type: String, required: true },
});

// Create the Complaint model
const Complaint = mongoose.model('Complaint', complaintSchema);

// Handle POST request to submit a complaint
app.post('/api/complaints', async (req, res) => {
  try {
      const { name, mobile, email, pincode, complaintDetails } = req.body;

      // Create a new complaint
      const complaint = new Complaint({ name, mobile, email, pincode, complaintDetails });
      await complaint.save();

      res.status(201).json({ message: 'Complaint submitted successfully' });
  } catch (error) {
      console.error('Error submitting complaint:', error);
      res.status(500).json({ message: 'Server error while submitting complaint' });
  }
});

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
