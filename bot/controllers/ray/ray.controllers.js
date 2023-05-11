export const RAY = async (ctx) => {
  try {
    const { data } = await API.get("ray");

    await ctx.reply(data.message);
  } catch (error) {
    await ctx.reply(error.response.data.message);
  }
};
