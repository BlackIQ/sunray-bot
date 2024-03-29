export const START = async (ctx) => {
  const messages = [
    "iSunray is a project that say greadings! Issues and stuff: @BlackIQ. You can use /add to be add in the list and /delete to be deleted from the list. For more information enter /help.",
    "For more information read [this blog](https://blog.amirhossein.info/?p=91).",
    "",
    "SunRay is open-source 🐙",
    "- [API source](https://blog.amirhossein.info/?p=91)",
    "- [Bot source](https://blog.amirhossein.info/?p=91)",
  ];

  await ctx.replyWithMarkdown(messages.join("\n"));
};

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
