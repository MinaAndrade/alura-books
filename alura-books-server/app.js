const bookRoutes = require("./routes/book.js");
const express = require("express");

const app = express();
const port = 8000;

app.use(express.json()); //middleware para interpretar JSON no corpo das requisições
app.use("/livros", bookRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
