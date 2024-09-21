import { Client, GatewayIntentBits } from "discord.js";

export const client = new Client({
	intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

client.login(Bun.env.DISCORD_BOT_TOKEN);
