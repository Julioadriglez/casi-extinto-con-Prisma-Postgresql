# casi-extinto-con-Prisma-Postgresql
Legado del proyecto casi extinto con Prisma y Postgresql

## Introducción 

En este proyecto se refactorizo el código de casi extinto que estaba hecho con una base de datos que era `package.json`, se cambió a una base de datos de `Postgresql` y se usó `Prisma DB` como cliente además se agregó el `CRUD` completo puesto que anteriormente solo se leía la `DB`.


## Tecnologías

* `Express`: Es para desplegar el navegador y se instala con el siguiente comando `npm install express --save-dev `.

* `Prisma DB`: Conexión con la base de datos y se instala con el siguiente comando ` npm install prisma --save-dev `.

* `Postgresql`: Base de Datos donde se crean las tablas y se meten los datos.

* `Node.js`: Es un entorno de ejecución de JavaScript orientado a eventos asíncronos.

* `Eslint`: Nos ayuda a corregir la legibilidad en nuestro Código, se instala con el siguiente comando `npm install eslint--save-dev` y para generar la configuración ejecutamos `npm  init @eslint/config`.

* `Thunder client`: Es una extensión de `visual Estudio Code` para realizar peticiones.


## Diseño

![diseño](https://user-images.githubusercontent.com/99068430/176974388-25f45d44-2aec-4d00-a4ad-2fa14fec726a.png)


* `package.json`: contiene todos los módulos que se utilizaron el proyecto como lo es `Express`, `Prisma DB`, `Eslint`, etc.

* `seed.js`: es te archivo se utiliza para automatizar la entrada de datos a la base de datos se usó para meter los datos de un animal llamado `Tortuga`.


![datoAutomatizado](https://user-images.githubusercontent.com/99068430/176974702-f2d8375b-0251-4ffc-a508-3caaeeba3709.png)


Y así se ve como fue agregado a la base de datos.


![dbDatoAutomatizado](https://user-images.githubusercontent.com/99068430/176974775-59befcd5-f8f2-4400-a25a-23fbd4449c5d.png)


* `schema.prisma`: Se utiliza para crear el esquema de la tabla de para la `DB` y una vez programado se hace un `migration` que es como un versionamiento  y al utilizar `npx prisma migrate dev --name init` se crea la tabla en la `DB`


![schemaPrisma](https://user-images.githubusercontent.com/99068430/177017406-dbc347ea-73ad-467e-9e9e-bf1b57780ce4.png)


* `.env`:En este archivo contiene el usuario, la contraseña, el puerto por el que se conecta y el nombre de la base datos a la cual se debe conectar. 
`Nota: no se debe de versionar por que contiene datos sensibles`


![env](https://user-images.githubusercontent.com/99068430/177017546-243cb7b1-555e-425c-9f75-e20d34402b05.png)


* `@prisma/cliente`: Es el generador de consultas hacia `Postgresql` y las envía a `server.js` que es el servidor.

* `Postgresql`:  contiene  los datos y las tablas de `Animals`


![DB](https://user-images.githubusercontent.com/99068430/177018167-9f99eb28-96b0-4b8d-af70-aebd1c66638e.png)


* `server.js`: Contiene los endpoints para hacer peticiones de la web a la base de datos.


![serverjs](https://user-images.githubusercontent.com/99068430/177018215-aa220b53-6ccc-4e71-91a1-ff13e7caeaf9.png)


## API

Para entrar a la Api en el navegador ponemos ` http://localhost:3000/ ` y nos dará la bienvenida.

![express-DB bienbenida](https://user-images.githubusercontent.com/99068430/170368741-68e469f0-a395-4767-a37e-ea5011ccab31.png)

Para ver todos los animales guardados en la base de datos se manda la petición a la siguiente dirección ` http://localhost:3000/animals` con la extensión `Thunder client`.


![peticionGet](https://user-images.githubusercontent.com/99068430/177018550-ba7273b4-6509-466e-948a-b2c6e805be8d.png)


Para ver un animal en específico por medio del `id` guardada en la base de datos se manda la petición a la siguiente dirección ` http://localhost:3000/animals/:id` con la extensión `Thunder client`.


![peticionGetId](https://user-images.githubusercontent.com/99068430/177018615-a37dd0a6-5f33-4bfa-9387-a09cbc7f85ee.png)


Para crear un animal en la base de datos se manda la petición a la siguiente dirección ` http://localhost:3000/animals` con la extensión `Thunder client`.


![PeticionPost](https://user-images.githubusercontent.com/99068430/177018729-15346781-032f-4b73-8410-22eb8e835c10.png)


![dbPost](https://user-images.githubusercontent.com/99068430/177018746-87ed9f2e-5613-4e83-9ddf-66e6aa66f1cf.png)

Para actualizar un animal guardado en la base de datos se manda la petición a la siguiente dirección ` http://localhost:3000/animals/:id` con la extensión `Thunder client`.


![peticionPut](https://user-images.githubusercontent.com/99068430/177018932-00b2e8b6-1a9b-4b07-b492-f8c07e5fabdb.png)

![dbPut](https://user-images.githubusercontent.com/99068430/177018936-1f23c685-aaa0-49d9-ae81-5c8c7c96df7a.png)


Para eliminar un animal guardado en la base de datos se manda la petición a la siguiente dirección ` http://localhost:3000/animals/:id` con la extensión `Thunder client`.


![peticionDelete](https://user-images.githubusercontent.com/99068430/177018959-5731a826-3b32-4da3-93d5-c8bac617f6e5.png)

![dbDelete](https://user-images.githubusercontent.com/99068430/177018984-77be664d-4899-40b0-9efa-f20cd11facf0.png)




