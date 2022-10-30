const express = require('express');
const app = express();

app.use(express.static(__dirname + "/src/public/"))
app.use((req, res, next) =>
{
  res.status(404).sendFile(__dirname + "/src/public/404.html")
})

app.get("/", (req, res) =>
{
  res.sendFile(__dirname + "/src/public/index.html")
})

app.listen(8080, () => console.log("Server on port 8080"))
