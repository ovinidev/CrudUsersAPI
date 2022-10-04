const fs = require("fs");
const path = require("path");

// Criar pasta
fs.mkdir(path.join(__dirname, "/test"), (er) => {
  if (er) {
    return console.log("Erro: ", er);
  }

  console.log("Pasta criada com sucesso!");
});

// Criar um arquivo
fs.writeFile(
  path.join(__dirname, "/test", "test.html"),
  "Hello Node ",
  (er) => {
    if (er) {
      return console.log("Erro: ", er);
    }

    console.log("Arquivo criado com sucesso!");

    // Adicionar a um arquivo
    fs.appendFile(
      path.join(__dirname, "/test", "test.html"),
      "Hello Vini",
      (er) => {
        if (er) {
          return console.log("Erro: ", er);
        }

        console.log("Arquivo modificado com sucesso!");
      }
    );

    // Ler arquivo
    fs.readFile(
      path.join(__dirname, "/test", "test.txt"),
      "utf8",
      (er, data) => {
        if (er) {
          return console.log("Erro: ", er);
        }

        console.log("Arquivo lido com sucesso: ", data);
      }
    );
  }
);
