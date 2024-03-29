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

    const messages = ["Clients status.\n"];

    Promise.all(
      Object.entries(data).map(([k, v]) => {
        const name = k.charAt(0).toUpperCase() + k.slice(1);

        messages.push(`${name}: ${v}`);
      })
    );

    await ctx.reply(messages.join("\n"));
  } catch (error) {
    await ctx.reply(error.message);
  }
};
