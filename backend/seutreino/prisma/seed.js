import { PrismaClient } from "@prisma/client";
import { fakerPT_BR as faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function seedClients() {
	try {
		for (let i = 0; i < 10; i++) {
			const fakeClient = {
				name: faker.person.firstName(),
				email: faker.internet.email(),
				password: faker.internet.password(),
				gender: faker.helpers.arrayElement(["M", "F"]),
				birthDate: faker.date.past(),
				cep: faker.location.zipCode(),
				street: faker.location.street(),
				state: faker.helpers.arrayElement([
					"AC",
					"AL",
					"AP",
					"AM",
					"BA",
					"CE",
					"DF",
					"ES",
					"GO",
					"MA",
					"MT",
					"MS",
					"MG",
					"PA",
					"PB",
					"PR",
					"PE",
					"PI",
					"RJ",
					"RN",
					"RS",
					"RO",
					"RR",
					"SC",
					"SP",
					"SE",
					"TO",
				]),
				city: faker.location.city(),
				phone: faker.phone.number(),
				profilePicture: faker.image.avatar(),
				socialMedia: faker.internet.url(),
				role: "CLIENT",
			};

			await prisma.client.create({
				data: fakeClient,
			});
		}

		console.log("Seeding clients completed successfully.");
	} catch (error) {
		console.error("Error seeding clients:", error);
	}
}

async function seedProfessionals() {
	try {
		for (let i = 0; i < 10; i++) {
			const fakeProfessional = {
				name: faker.person.firstName(),
				email: faker.internet.email(),
				password: faker.internet.password(),
				gender: faker.helpers.arrayElement(["M", "F"]),
				birthDate: faker.date.past(),
				cep: faker.location.zipCode(),
				street: faker.location.street(),
				state: faker.helpers.arrayElement([
					"AC",
					"AL",
					"AP",
					"AM",
					"BA",
					"CE",
					"DF",
					"ES",
					"GO",
					"MA",
					"MT",
					"MS",
					"MG",
					"PA",
					"PB",
					"PR",
					"PE",
					"PI",
					"RJ",
					"RN",
					"RS",
					"RO",
					"RR",
					"SC",
					"SP",
					"SE",
					"TO",
				]),
				city: faker.location.city(),
				phone: faker.phone.number(),
				profilePicture: faker.image.avatar(),
				socialMedia: faker.internet.url(),
				role: "PROFESSIONAL",
			};

			await prisma.professional.create({
				data: fakeProfessional,
			});
		}

		console.log("Seeding professionals completed successfully.");
	} catch (error) {
		console.error("Error seeding professionals:", error);
	}
}

// professions

async function seedProfessions() {
	try {
		for (let i = 0; i < 10; i++) {
			const fakeProfession = {
				name: faker.lorem.word(),
			};

			await prisma.profession.create({
				data: fakeProfession,
			});
		}

		console.log("Seeding professions completed successfully.");
	} catch (error) {
		console.error("Error seeding professions:", error);
	}
}

// levels

async function seedLevels() {
	try {
		for (let i = 0; i < 10; i++) {
			const fakeLevel = {
				name: faker.lorem.word(),
			};

			await prisma.level.create({
				data: fakeLevel,
			});
		}

		console.log("Seeding levels completed successfully.");
	} catch (error) {
		console.error("Error seeding levels:", error);
	}
}

// expertises

async function seedExpertises() {
	try {
		for (let i = 0; i < 10; i++) {
			const fakeExpertise = {
				name: faker.lorem.word(),
			};

			await prisma.expertise.create({
				data: fakeExpertise,
			});
		}

		console.log("Seeding expertises completed successfully.");
	} catch (error) {
		console.error("Error seeding expertises:", error);
	}
}

const professionals = await prisma.professional.findMany();
const professions = await prisma.profession.findMany();
const levels = await prisma.level.findMany();
const expertises = await prisma.expertise.findMany();

const professionalsIds = professionals.map((professional) => professional.id);
const professionsIds = professions.map((profession) => profession.id);
const levelsIds = levels.map((level) => level.id);
const expertisesIds = expertises.map((expertise) => expertise.id);

const clients = await prisma.client.findMany();
const clientsIds = clients.map((client) => client.id);

async function seedAnnouncements() {
	try {
		for (let i = 0; i < 10; i++) {
			const fakeAnnouncement = {
				title: faker.lorem.words(),
				description: faker.lorem.sentence({ min: 5, max: 10}),
				price: faker.number.float(),
				professionalId: faker.helpers.arrayElement(professionalsIds),
				expiredAt: faker.date.future(),
				cep: faker.location.zipCode(),
				street: faker.location.street(),
				state: faker.helpers.arrayElement([
					"AC",
					"AL",
					"AP",
					"AM",
					"BA",
					"CE",
					"DF",
					"ES",
					"GO",
					"MA",
					"MT",
					"MS",
					"MG",
					"PA",
					"PB",
					"PR",
					"PE",
					"PI",
					"RJ",
					"RN",
					"RS",
					"RO",
					"RR",
					"SC",
					"SP",
					"SE",
					"TO",
				]),
				city: faker.location.city(),
				professionId: faker.helpers.arrayElement(professionsIds),
				expertises: faker.helpers.arrayElement(expertisesIds),
				gallery: {
					createMany: {
						data: [
							{
								url: faker.image.url(),
							},
							{
								url: faker.image.url(),
							},
						],
					},
				},
				announcementAvailableTimes: {
					createMany: {
						data: [
							{
								day: faker.helpers.arrayElement([
									"MONDAY",
									"TUESDAY",
									"WEDNESDAY",
									"THURSDAY",
									"FRIDAY",
									"SATURDAY",
									"SUNDAY",
								]),
                                hour: `${faker.helpers.rangeToNumber({ min: 0, max: 23 })}:${faker.helpers.rangeToNumber({ min: 0, max: 59 })}`,
							},
							{
								day: faker.helpers.arrayElement([
									"MONDAY",
									"TUESDAY",
									"WEDNESDAY",
									"THURSDAY",
									"FRIDAY",
									"SATURDAY",
									"SUNDAY",
								]),
								hour: `${faker.helpers.rangeToNumber({ min: 0, max: 23 })}:${faker.helpers.rangeToNumber({ min: 0, max: 59 })}`,
							},
						],
					},
				},
				levels: {
					connect: [
						{
							id: faker.helpers.arrayElement(levelsIds),
						},
						{
							id: faker.helpers.arrayElement(levelsIds),
						},
					],
				},
				expertises: {
					connect: [
						{
							id: faker.helpers.arrayElement(expertisesIds),
						},
						{
							id: faker.helpers.arrayElement(expertisesIds),
						},
					],
				},
			};

			await prisma.announcement.create({
				data: fakeAnnouncement,
			});
		}

		console.log("Seeding announcements completed successfully.");
	} catch (error) {
		console.error("Error seeding announcements:", error);
	}
}

async function seedAppointments() {
	try {
		for (let i = 0; i < 10; i++) {
			const fakeAppointment = {
				date: faker.date.future(),
				day: faker.helpers.arrayElement([
					"MONDAY",
					"TUESDAY",
					"WEDNESDAY",
					"THURSDAY",
					"FRIDAY",
					"SATURDAY",
					"SUNDAY",
				]),
				hour: `${faker.helpers.rangeToNumber({ min: 0, max: 23 })}:${faker.helpers.rangeToNumber({ min: 0, max: 59 })}`,
				clientId: faker.helpers.arrayElement(clientsIds),
				professionalId: faker.helpers.arrayElement(professionalsIds),
			};

			await prisma.appointment.create({
				data: fakeAppointment,
			});
		}

		console.log("Seeding appointments completed successfully.");
	} catch (error) {
		console.error("Error seeding appointments:", error);
	}
}

async function seedAll() {
	await seedClients();
	await seedProfessionals();
	await seedProfessions();
	await seedLevels();
	await seedExpertises();
	await seedAnnouncements();
	await seedAppointments();
}

async function main() {
	await seedAll();
	await prisma.$disconnect();
}

main();
