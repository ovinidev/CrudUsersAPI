const mongoose = require("mongoose");

const connectToDatabase = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_NAME}:${process.env.MONGODB_PASSWORD}@cursonode.wiqwnh8.mongodb.net/?retryWrites=true&w=majority`,
    (err) => {
      if (err) {
        return console.log(err.message);
      }

      return console.log("Conexão estabelecida com sucesso!");
    }
  );
};

module.exports = connectToDatabase;
