import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from '../framework/database/mongo';
import { errorHandler } from '../framework/middleware/errorHandler';
import userRoute from '../framework/routes/userRoutes';
import loggingMiddleware from '../framework/middleware/loggingMiddleware';


const app = express();
const PORT = process.env.PORT;
const HOST = process.env.HOST;


// Middleware
app.use(express.json()); // Parse JSON bodies
// Use the logging middleware
app.use(loggingMiddleware);

app.use(cors());
const allowedOrigins = [HOST]; // Protected, Only allowed for HOST
app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin || allowedOrigins.indexOf(origin) !== -1) {
                callback(null, true);
            } else {
                callback(new Error("Not allowed by CORS"));
            }
        },
        credentials: true,
    })
);
// Connect to Database
connectDB();

// Load environment variables
dotenv.config();

// Routes
app.use("/", userRoute);
app.use(errorHandler); // Error Handling Middleware

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});