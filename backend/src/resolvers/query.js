const { forwardTo } = require('prisma-binding');

const query = {
  users: forwardTo('db')
};

module.exports = query;