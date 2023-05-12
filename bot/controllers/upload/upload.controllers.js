import { API } from "$bot/api/index.js";

export const PHOTO = async (ctx) => {
  const {
    message: { photo, caption },
  } = ctx;

  if (!caption) {
    return await ctx.reply("Enter time. [morning/night]");
  }

  const fileId = photo[0].file_id;

  const data = { fileId, time: caption };

  try {
    const result = await API.post("uploads", data);

    await ctx.reply(result.data.message);
  } catch (error) {
    await ctx.reply(error.response.data.message);
  }
};
