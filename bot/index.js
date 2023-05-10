import { Socks5 } from "$bot/connections/index.js";
import { botConfig, appConfig } from "$bot/config/index.js";
import { User } from "$bot/controllers/index.js";

import { Telegraf } from "telegraf";

const bot = new Telegraf(botConfig.token, {
  telegram: {
    agent: !appConfig.published && Socks5,
  },
});

bot.command("add", (ctx) => User.ADD(ctx));

export default bot;
