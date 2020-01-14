const { Router } = require("express");
const axios = require("axios");
const Dev = require("./models/dev.model");

const routes = Router();

routes.post("/dev", async (request, response) => {
  const { github_username, techs } = request.body;

  const apiResponse = await axios.get(
    `https://api.github.com/users/${github_username}`
  );

  const { name = login, bio, avatar_url } = apiResponse.data;

  const techsArray = techs.split(",").map(tech => tech.trim());

  console.log(name, bio, avatar_url, github_username, techsArray);

  const dev = await Dev.create({
    github_username,
    name,
    bio,
    avatar_url,
    techs: techsArray
  });

  return response.json({ dev });
});

module.exports = routes;
