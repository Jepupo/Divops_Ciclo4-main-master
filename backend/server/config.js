import dotenv from 'dotenv';

dotenv.config({path: '../.env'})

export const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://123user:<password>@cluster0.idro7k1.mongodb.net/?retryWrites=true&w=majority";
export const PORT = process.env.PORT || 3001
/*export const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY
export const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET
export const CLOUDINARY_NAME = process.env.CLOUDINARY_NAME*/