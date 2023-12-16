import mongoose from "mongoose";
import dotenv from "dotenv-safe";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

const connect = async () => {
	try {
		await mongoose.connect(MONGODB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log("Banco conectado");
	} catch (error) {
		console.error("Erro: ", error.message);
	}
};

export default {
	connect,
};