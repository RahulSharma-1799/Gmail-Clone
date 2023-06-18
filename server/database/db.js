import mongoose from "mongoose";
const mongoURI = `mongodb://user:user@ac-nteqtdp-shard-00-00.edgjyea.mongodb.net:27017,ac-nteqtdp-shard-00-01.edgjyea.mongodb.net:27017,ac-nteqtdp-shard-00-02.edgjyea.mongodb.net:27017/?ssl=true&replicaSet=atlas-791a3h-shard-0&authSource=admin&retryWrites=true&w=majority`;

const connectToMongo = async () => {
  try {
    mongoose.connect(mongoURI);
    console.log("Connected to MongoDB Database");
  } catch (error) {
    console.log('Error while connecting with the database',error.message);
  }
};

export default  connectToMongo;
