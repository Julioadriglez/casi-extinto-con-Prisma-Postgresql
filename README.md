# casi-extinto-con-Prisma-Postgresql
Legado del proyecto casi extinto con Prisma y Postgresql

## Introducción 

En este proyecto se refactorizo el código de casi extinto que estaba hecho con una base de datos que era `package.json`, se cambió a una base de datos de `Postgresql` y se usó `Prisma DB` como cliente ademas se agregó el `CRUD` completo puesto que anteriormente solo se leía la `DB`.


## Tecnologías

* `Express`
* `Node.js`
* `Prisma DB`
* `Eslint`
* `Postgresql`
* `Thunder client`


## Diseño

![diseño](https://user-images.githubusercontent.com/99068430/176974388-25f45d44-2aec-4d00-a4ad-2fa14fec726a.png)


* `package.json`: contiene todos los módulos que se utilizaron el proyecto como lo es `Express`, `Prisma DB`, `Eslint`, etc.

* `seed.js`: es te archivo se utiliza para automatizar la entrada de datos a la base de datos se usó para meter los datos de un animal llamado `Tortuga`.


![datoAutomatizado](https://user-images.githubusercontent.com/99068430/176974702-f2d8375b-0251-4ffc-a508-3caaeeba3709.png)


Y así se ve como fue agregado a la base de datos.


![dbDatoAutomatizado](https://user-images.githubusercontent.com/99068430/176974775-59befcd5-f8f2-4400-a25a-23fbd4449c5d.png)


* `schema.prisma`: Se utiliza para crear el esquema de la tabla de para la `DB` y una vez programado se hace un `migration` que es como un versionameiento  y al utilizar `npx prisma migrate dev --name init` se crea la tabla en la `DB`
