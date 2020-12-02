// in memory DB handler

import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

const mongoDb = new MongoMemoryServer();
// Connect

export const connectDb = async (): Promise<void> => {
  const uri = await mongoDb.getUri('testDb');

  const mongooseOpts: mongoose.ConnectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  };

  mongoose.connect(uri, mongooseOpts);
};
// export const connectDbandStartServer = async (
//   server: Express
// ): Promise<void> => {
//   const uri = await mongoDb.getUri('testDb');

//   const mongooseOpts: mongoose.ConnectionOptions = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//   };

//   mongoose
//     .connect(uri, mongooseOpts)
//     .then(() =>
//       app.listen('5555', () =>
//         console.log(`Server running on http://localhost:${5555}`)
//       )
//     );
// };

// Drop, close and stop db

export const closeDb = async (): Promise<void> => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongoDb.stop();
};

// Clear db

export const clearDb = async (): Promise<void> => {
  const collections = mongoose.connection.collections;

  for (const key in collections) {
    const collection = collections[key];
    await collection.deleteMany({});
  }
};
