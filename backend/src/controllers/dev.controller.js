const axios = require('axios');
const Dev = require('../models/dev.model');

module.exports = {
  async store(request, response) {
    const { github_username, techs, latitude, longitude } = request.body;

    let dev = await Dev.findOne({ github_username });

    if (!dev) {
      const apiResponse = await axios.get(
        `https://api.github.com/users/${github_username}`
      );

      const { name = login, bio, avatar_url } = apiResponse.data;

      const techsArray = techs.split(',').map(tech => tech.trim());

      console.log(name, bio, avatar_url, github_username, techsArray);

      const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
      };

      dev = await Dev.create({
        github_username,
        name,
        bio,
        avatar_url,
        techs: techsArray,
        location,
      });
    }

    return response.json({ dev });
  },

  async index(request, response) {
    const devs = await Dev.find();

    return response.json({ devs });
  },
};
