export const HELP = async (ctx) => {
  const messages = [
    "SunRay manual\n",
    "/help To see manual",
    "/add To subscribe the service",
    "/delete To unsubscribe the service",
    "",
    "For more information read about or contact with @BlackIQ",
    "",
    "Special thanks to my brother @EhsanVzi 🙏",
    "Also you can use @Rainbow6statsbot if you are a gamer 🎮",
  ];

  await ctx.reply(messages.join("\n"));
};
