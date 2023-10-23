import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const getDashboardDataController = async (req, res) => {
	try {
		const result = await prisma.$queryRaw(
			Prisma.sql`
        SELECT DATE_FORMAT(createdAt, '%Y-%m') as month, COUNT(*) as count
        FROM Announcement
        GROUP BY month
        ORDER BY month
      `
		);

		const formattedResult = result.map((row) => ({
			month: row.month,
			count: row.count.toString(),
		}));

		const professionalsByGender = await prisma.$queryRaw(
			Prisma.sql`
        SELECT gender, COUNT(*) as count
        FROM Professional
        GROUP BY gender
      `
		);

		const averageAgeOfProfessionals = await prisma.$queryRaw(
			Prisma.sql`
        SELECT AVG(TIMESTAMPDIFF(YEAR, birthDate, CURDATE())) AS average_age
        FROM Professional
      `
		);

		const activeAndInactiveAnnouncements = await prisma.$queryRaw(
			Prisma.sql`
        SELECT isActive, COUNT(*) as count
        FROM Announcement
        GROUP BY isActive
      `
		);

		const averagePriceOfAnnouncements = await prisma.$queryRaw(
			Prisma.sql`
        SELECT AVG(price) AS average_price
        FROM Announcement
      `
		);

		const clientsByGender = await prisma.$queryRaw(
			Prisma.sql`
        SELECT gender, COUNT(*) as count
        FROM Client
        GROUP BY gender
      `
		);

		const averageAgeOfClients = await prisma.$queryRaw(
			Prisma.sql`
        SELECT AVG(TIMESTAMPDIFF(YEAR, birthDate, CURDATE())) AS average_age
        FROM Client
      `
		);

		const data = {
			monthlyAnnouncementData: formattedResult,
			professionalsByGender: professionalsByGender.map((row) => ({
				gender: row.gender,
				count: row.count.toString(),
			})),
			averageAgeOfProfessionals: {
				average_age: averageAgeOfProfessionals[0].average_age.toString(),
			},
			activeAndInactiveAnnouncements: activeAndInactiveAnnouncements.map((row) => ({
				isActive: row.isActive,
				count: row.count.toString(),
			})),
			averagePriceOfAnnouncements: {
				average_price: averagePriceOfAnnouncements[0].average_price.toString(),
			},
			clientsByGender: clientsByGender.map((row) => ({
				gender: row.gender,
				count: row.count.toString(),
			})),
			averageAgeOfClients: {
				average_age: averageAgeOfClients[0].average_age.toString(),
			},
		};

		const jsonData = JSON.parse(JSON.stringify(data));

		res.status(200).json(jsonData);
	} catch (error) {
		console.error("Error fetching dashboard data:", error);
		res.status(500).json({ error: "Internal server error" });
	} finally {
		await prisma.$disconnect();
	}
};

export { getDashboardDataController };
