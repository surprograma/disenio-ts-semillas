# Repositorio semilla: Biblioteca TypeScript :seedling:

> Este es uno de los repositorios que utilizamos en la serie **Diseño orientado a objetos en Kotlin y TypeScript**, [disponible en YouTube](https://www.youtube.com/playlist?list=PL7q-McYJyHliqlpNGSVe-Y3EHDIma_H9U). Te recomendamos que mires la serie para entender un poco más sobre las tecnologías que elegimos. :smiley:

¡Bienvenida/o! En este repositorio encontrarás una plantilla (de las infinitas posibles) para crear una biblioteca o librería utilizando [Typescript](https://www.typescriptlang.org/). Las principales tecnologías que utilizamos son:

- [NodeJS](https://nodejs.org/es/): entorno de ejecución para JavaScript.
- [Ramda](http://ramdajs.com/): biblioteca para tener un manejo funcional de colecciones.
- [Jest](https://jestjs.io/): framework para escribir tests.

Para crear un proyecto siguiendo esta plantilla, lo único que tenés que hacer es clickear en el botón que dice `Use this template`. ¡Y no te olvides de cambiarle el nombre en el `package.json`!

## :point_up: Prerrequisitos - para instalar antes de empezar

Vas a necesitar un IDE o al menos un editor de texto que coloree la sintaxis. Recomendamos utilizar [Visual Studio Code](https://code.visualstudio.com/) - que se lleva muy bien con proyectos JavaScript - enriquecido con los siguientes plugins:

- [ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Test Explorer UI](https://marketplace.visualstudio.com/items?itemName=hbenl.vscode-test-explorer)
- [Jest Test Explorer](https://marketplace.visualstudio.com/items?itemName=kavod-io.vscode-jest-test-adapter)

Para ejecutar el código es necesario tener NodeJS en su versión 14 (`lts/fermium`). Para instalarlo recomendamos utilizar el manejador de versiones [`nvm`](https://github.com/nvm-sh/nvm), aunque también podés hacerlo manualmente siguiendo las instrucciones adecuadas para tu sistema operativo.

## :ballot_box_with_check: Configuración inicial del proyecto

Asumiendo que ya configuraste todos los prerrequisitos, solamente hay que instalar las dependencias la primera vez que trabajes en el proyecto:

```shell
npm install
```

## :file_folder: Estructura de directorios

Todo el código fuente debe ir dentro de la carpeta `src`, pudiendo crearse otras subcarpetas adentro de ella si fuera necesario. Los archivos de código deben tener extensión `.ts` y los de tests `.test.ts`.

:warning: La rama principal de este repositorio es `main` y no `master`, como quizás estés acostumbrado/a. Podés leer el [comunicado oficial de la Software Freedom Conservancy](https://sfconservancy.org/news/2020/jun/23/gitbranchname/) para saber más al respecto.

## :woman_technologist: :man_technologist: Comandos útiles para el día a día

A continuación, algunos comandos necesarios para el desarrollo diario en este proyecto.

### Código

```shell
# Ejecuta el linter, buscando errores en el código
npm run lint

# Ejecuta los tests una sola vez.
npm test

# Ejecuta los tests y se queda esperando por cambios.
npm test:watch
```

## :traffic_light: Integración continua

El proyecto incluye una configuración de [GitHub Actions](https://github.com/features/actions) que ejecuta tanto el linter como los tests cada vez que detecta un push o un pull request a la rama `main`.
