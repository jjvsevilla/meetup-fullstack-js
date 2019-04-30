const mutations = {
  async createUser(parent, args, ctx, info) {
    const user = await ctx.db.mutation.createUser({
      data: {
        ...args.data
      }
    }, info);
    return user;
  }
};

module.exports = mutations;