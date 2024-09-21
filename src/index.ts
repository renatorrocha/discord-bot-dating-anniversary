import cron from "@elysiajs/cron";
import { Elysia } from "elysia";
import { client } from "./services/discord";

const app = new Elysia()
	.use(
		cron({
			name: "dating anniversary",
			pattern: "*/10 * * * * *",
			async run() {
				try {
					const channel = await client.channels.fetch(Bun.env.CHANNEL_ID);
					if (channel?.isTextBased()) {
						await channel.send("🎉 Parabéns! Hoje é dia 23, envio automático!");
						console.log("Mensagem enviada com sucesso no Discord!");
					}
				} catch (error) {
					console.error("Erro ao enviar a mensagem no Discord:", error);
				}
			},
		}),
	)
	.listen(3000);

console.log(
	`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
