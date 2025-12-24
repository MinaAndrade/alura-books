const bookRoutes = require("./routes/bookRoute.js");
const favoriteRoutes = require("./routes/favoriteRoute.js");
const express = require("express");
const cors = require("cors");

const app = express();
const port = 8000;

app.use(express.json()); //middleware para interpretar JSON no corpo das requisições
app.use(cors({origin:"*"}));

app.use("/livros", bookRoutes);
app.use("/favoritos", favoriteRoutes);
app.use('/images', express.static('images'));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
