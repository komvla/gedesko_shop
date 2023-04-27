Tienda Online
Este es un proyecto de tienda online organizado como un monorepo utilizando Lerna. El proyecto está construido utilizando TypeScript, React, Reactstrap y Redux.

# Tienda Online

Este es un proyecto de tienda online organizado como un monorepo utilizando Lerna. El proyecto está construido utilizando TypeScript, React, Reactstrap y Redux.

## Instalación

Para instalar el proyecto, primero debes clonar el repositorio: git clone `git@github.com:komvla/gedesko_shop.git`


Luego, dentro de la carpeta principal del proyecto, ejecuta el siguiente comando para instalar las dependencias de Lerna:


`npm install`


Una vez que Lerna está instalado, puedes instalar las dependencias de cada uno de los paquetes del proyecto ejecutando el siguiente comando dentro de la carpeta de cada paquete:

`cd packages/public_shop`
`npm install`

`cd packages/provider_dash`
`npm install`


Repite este proceso para cada paquete en el proyecto.

## Uso

Para iniciar todos los servidores en paralelo, debes ejecutar el siguiente comando en la carpeta principal del proyecto:

`lerna run start --parallel`


Este comando iniciará cada uno de los servidores en un proceso separado. Puedes acceder a la aplicación en tu navegador web en `http://localhost:3000`.

## Ramas

La rama principal del proyecto es `develop`. Por favor, crea todas tus ramas y pull requests a partir de esta rama.



