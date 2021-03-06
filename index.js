const express = require("express");
const uploadRouter = require("./router");

const app = express();

app.get("/", (_, res) => {
  console.log(__dirname);
  res.sendFile(`${__dirname}/index.html`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(uploadRouter);

app.listen(process.env.PORT || 8080, () => {
  console.log("Form running on port 8080");
});
