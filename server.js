const express = require("express");
const app = express();
const PORT = process.env.PORT || 3308;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public"));

const apiRoutes = require("./routes/api-routes");
app.use(apiRoutes);

const htmlRoutes = require("./routes/htmlRoutes");
app.use(htmlRoutes);

app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));
