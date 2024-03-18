import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connection = await mongoose.connect(process.env.mongoURL);

export default connection;
