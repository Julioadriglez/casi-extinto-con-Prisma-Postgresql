const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.port || 3000;

//Requiere para usar Prisma
const { PrismaClient } = require('@prisma/client');
const { PrismaClientRustPanicError } = require('@prisma/client/runtime');
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

app.put('/animals/:id', async (req, res) => {
    const id = parseInt(req.params.id);

    await prisma.animals.update({
        where: {
            id: id
        },
        data: {
            name: req.body.name,
            imagen: req.body.imagen,
            description: req.body.description
        }
    })
    return res.json({message: "Actualizado correctamente"});
});

app.delete('/animals/:id', async (req, res) => {
    const id = parseInt(req.params.id);

    await prisma.animals.delete({where: {id: id}});
    return res.json({ message: "Eliminado correctamente"});
});

app.listen(port, () => {
    console.log(`Listening to requests on port ${port}`);
});
