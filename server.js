const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.port || 3000;

//Requiere para usar Prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.get('/', (req, res) => {
    res.json({ message: 'alive' });
});

app.get('/animals', async (req, res) => {
    const allAnimals = await prisma.animals.findMany({});
    res.json(allAnimals)
});

app.get('/animals/:id', async (req, res) => {
    const id = req.params.id;
    const animal = await prisma.animals.findUnique({ where: { id: parseInt(id) } });
    res.json(animal);
});

app.post('/animals', async (req, res) => {
    const animal = {
        name: req.body.name,
        imagen: req.body.imagen,
        description: req.body.description
    };
    const message = 'Animal creado.';
    await prisma.animals.create({ data: animal });
    return res.json({ message });
});

app.listen(port, () => {
    console.log(`Listening to requests on port ${port}`);
});
