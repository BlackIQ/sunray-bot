import { Socks5 } from "$bot/connections/index.js";
import { botConfig, appConfig } from "$bot/config/index.js";
import { Client, Upload, Ray } from "$bot/controllers/index.js";
import { admin } from "$bot/middlewares/index.js";

import { Telegraf } from "telegraf";

const bot = new Telegraf(botConfig.token, {
  telegram: {
    agent: !appConfig.published && Socks5,
  },
});

bot.command("ray", Ray.RAY);
bot.command("add", Client.ADD);
bot.command("delete", Client.DELETE);

bot.on("photo", admin, Upload.PHOTO);

export default bot;
