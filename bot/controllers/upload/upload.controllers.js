import { API } from "$bot/api/index.js";

export const PHOTO = async (ctx) => {
  const {
    message: { photo, caption },
  } = ctx;

  if (!caption) {
    return await ctx.reply("Enter caption");
  }

  const fileId = photo[0].file_id;

  console.log(fileId, caption);

  const details = caption.split("|");

  const data = { fileId, date: details[0], time: details[1] };

  try {
    await API.post("uploads", data);

    await ctx.reply("Hi");
  } catch (error) {
    await ctx.reply(error.response.data.message);
  }
};
