// import mongoose from "mongoose";

// const connection = {};

// export const connectToDB = async () => {
//   try {
//     if (connection.isConnected) return;
//     const db = await mongoose.connect(process.env.MONGO);
//     connection.isConnected = db.connections[0].readyState;
//   } catch (error) {
//     console.log(error)
//     throw new Error(error);
//   }
// };

export const connectToDB = async ()=>{
  try {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
} catch (error) {
  throw new Error(error);
}

}