import mongoose from 'mongoose';

console.log(process.env.mongoURL)
const connection = await mongoose.connect(process.env.mongoURL);

export default connection;
