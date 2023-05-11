import { API } from "$bot/api/index.js";

export const ADD = async (ctx) => {
  const {
    chat: { id: chatId, type },
    message_id,
  } = ctx.message;

  try {
    const { data } = await API.post("clients", {
      chatId,
      type,
    });

    await ctx.reply(
      data.message,
      type === "group" && {
        reply_to_message_id: message_id,
      }
    );
  } catch (error) {
    await ctx.reply(
      error.response.data.message,
      type === "group" && {
        reply_to_message_id: message_id,
      }
    );
  }
};

export const DELETE = async (ctx) => {
  const {
    chat: { id: chatId, type },
    message_id,
  } = ctx.message;

  try {
    const { data } = await API.delete(`clients/${chatId}`);

    await ctx.reply(
      data.message,
      type === "group" && {
        reply_to_message_id: message_id,
      }
    );
  } catch (error) {
    await ctx.reply(
      error.response.data.message,
      type === "group" && {
        reply_to_message_id: message_id,
      }
    );
  }
};
