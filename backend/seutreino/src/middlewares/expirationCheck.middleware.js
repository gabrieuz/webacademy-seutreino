import { PrismaClient } from "@prisma/client";
import cron from "node-cron";

const prisma = new PrismaClient();

const checkAndDeactivateExpiredAnnouncements = async () => {
	try {
		const currentDate = new Date();

		// Consulta os anúncios ativos cuja data de expiração é igual à data atual
		const expiredAnnouncements = await prisma.announcement.findMany({
			where: {
				isActive: true,
				expiredAt: currentDate,
			},
		});

		// Marca os anúncios como inativos
		for (const announcement of expiredAnnouncements) {
			await prisma.announcement.update({
				where: {
					id: announcement.id,
				},
				data: {
					isActive: false,
				},
			});
		}

		console.log(`Verificação diária de expiração concluída em ${currentDate}`);
	} catch (error) {
		console.error("Erro durante a verificação diária de expiração:", error);
	}
};

// Agenda uma verificação para ser executada todos os dias à meia-noite
cron.schedule("0 0 * * *", checkAndDeactivateExpiredAnnouncements);

// Chame a função para iniciar a verificação imediatamente:
// checkAndDeactivateExpiredAnnouncements();
