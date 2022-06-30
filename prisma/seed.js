const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

(async function main() {
    try {
        const tortuga = await prisma.animals.upsert({
            where: { name: "tortuga" },
            update: {},
            create: {
                name: "tortuga",
                imagen: "https://4.bp.blogspot.com/-ZbtviLnXfSY/WQYnGatxwQI/AAAAAAAAAtM/ongNkBBFLA0KIDlknQ13nKhbaoLp-1B-gCLcB/s1600/036877.jpg",
                description: "Es una especie de tortuga marina americana de la familia Cheloniidae. Mide hasta 90 cm y pesa hasta 45 kg. Se alimenta de moluscos, crustáceos, medusas, algas y erizos de mar. Vive en el Océano Atlántico desde Terranova hasta Venezuela, encontrándose por todo el Caribe y el Golfo de México."
            },
        });
        console.log("Create 1 animal");
    } catch (e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
})();