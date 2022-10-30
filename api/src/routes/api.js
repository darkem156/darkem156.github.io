import express from "express";
import { createTransport } from "nodemailer";

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const router = express.Router();

router.get('/projects', (req, res) =>
{
  const data = fs.readFileSync(path.resolve(__dirname, "..", "projects.json"), (err, data) =>
  {
    if(err) throw err;
    return data;
  })
  res.json(JSON.parse(data));
})

router.get("/repos", async (req, res) =>
{
  const repos = await fetch("https://api.github.com/users/darkem156/repos") 
  const reposJson = await repos.json();
  
  const color = await fetch("https://raw.githubusercontent.com/ozh/github-colors/master/colors.json")
  const colorJson = await color.json()

  const data = reposJson
    .map(repo => (
      {
        name: repo.name,
        desc: repo.description,
        url: repo.html_url,
        lang: repo.language,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        color: repo.language ? colorJson[repo.language].color : "",
      }
    ))
    .sort((a, b) =>
      a.stars < b.stars ? 1 : -1
    )

  res.json(await data);
})

router.post("/message", (req, res) =>
{
  const regExpMail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  const { name, email, message } = req.body;
  if(!name || !email || !message) res.status(400).json({ error: "You must give all data." });
  else if(!regExpMail.test(email)) res.status(400).json({ error: "You must give a valid email" });
  else
  {
    const transporter = createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD 
      },
    })

    transporter.sendMail({
      from: `${ name } <${ email }>`,
      to: process.env.EMAIL,
      subject: "PORTFOLIO",
      text: message,
      html: `<h1>Message from: ${ name }, '${ email }'</h1><br>${ message }</br>`
    }, (err, info) =>
    {
      if(err) res.json({ error: err })
      else res.json({ message: "Message Sent :)" })
    })
  }
})

export default router;
