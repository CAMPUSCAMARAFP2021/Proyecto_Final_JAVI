# Proyecto_Final_JAVI
#Comenzando 🚀

_Para poder usar este proyecto lo primero de todo es descargarse el proyecto.

Para poder usarlo se necesita tener docker instalado y ubuntu en el ordenador

Desopes dentro del visual abrir una terminar y ejecutar el siguiente comando para que pueda funcionar: docker compose up_

#Pre-requisitos 📋
Instalar docker desktop

Instalar wsl 2

Installar Ubuntu 20.04

Conectar wsl al Visual Studio Code

#Instalación 🔧
Una vez hecho todo lo anterior, deberas meterte al backend con el siguiente comando:

docker-compose run backend bash
Una vez dentro del contenedor agrega el comando para instalar todas las librerias necesarias:

npm  i
Y ya podemos salir del contenedor y ejecutar:

docker-compose up
Esto hara que todos los contenedores incluidos en el archivo docker-compose.yaml se levantaran y la app estará disponible
