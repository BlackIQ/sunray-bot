import { API } from "$bot/api/index.js";

export const RAY = async (ctx) => {
  try {
    const { data } = await API.get("ray");

    await ctx.reply(data.message);
  } catch (error) {
    await ctx.reply(error.message);
  }
};

export const STAT = async (ctx) => {
  try {
    const { data } = await API.get("ray/stat");

    const messages = [];

    Promise.all(
      Object.entries(data).map(([k, v]) =>
        messages.push(`${k.toUpperCase}: ${v}`)
      )
    );

    await ctx.reply(messages.join("\n"));
  } catch (error) {
    await ctx.reply(error.message);
  }
};
