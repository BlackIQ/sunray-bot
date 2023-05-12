export const RAY = async (ctx) => {
  try {
    await API.get("ray");

    await ctx.reply("Request sent");
  } catch (error) {
    await ctx.reply(error.response.data.message);
  }
};
