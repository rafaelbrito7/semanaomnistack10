const Dev = require('../models/dev.model');

module.exports = {
  async index(request, response) {
    const dev = 2;
    return dev;
  },
};
