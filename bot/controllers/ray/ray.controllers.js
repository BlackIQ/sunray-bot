import { API } from "$bot/api/index.js";

export const RAY = async (ctx) => {
  try {
    await API.get("ray");

    await ctx.reply("Request sent");
  } catch (error) {
    console.log(error);

    await ctx.reply(error.message);
  }
};
