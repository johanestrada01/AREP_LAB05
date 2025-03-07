# Servidor Web en Java con conexíon a mysql

## Descripción
En este laboratorio se cuenta con una implementación de un servidor con spring boot, que permite a los usuarios administrar propiedades. El servidor se encuentra desplegado en una ec2 de aws, con una conexión a una base de datos de mysql desplegada en otra ec2. El servidor y la base de datos se encuentran desplegadas dentro de contenedores de docker.
Las direcciones ip no se incluyen debido a que las maquinas ya no se encuentras desplegadas, pero se pueden realizar pruebas por medio del código incluido en el repositorio.

### Características principales

- Soporte para operaciones CRUD
- Desplegado en un servidor web
- Conexión a base de datos de mysql
- Uso de contenedores


---

## Instalación

### Prerrequisitos
- Java 17
- Git
- Navegador web
- Maven
- Docker

### Creación de base de datos
```sh
sudo docker run --name dbTaller -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=taller -e MYSQL_USER=johan -e MYSQL_PASSWO
RD=1004064256 -p 3306:3306 -d mysql:latest
```

### Clonación del repositorio
```sh
 git clone https://github.com/johanestrada01/AREP_LAB05.git
 cd AREP_LAB05
 mvn spring-boot:run
```

### Uso
- Es necesario cambiar las direcciones ip dependiendo de donde se despliegue, cambiando las redirecciones de los archivos de javascript y la cadena de conexión de la base de datos. Posteriormente se puede iniciar la aplicación.

### Acceso
- Ingresar a http://localhost:8080/ Acá encontraremos el index donde se puede redirigir a los demas componentes.

## Tecnologias
- Java
- Maven
- Html
- JavaScript
- CSS
- Docker
- Spring boot

## Autores
- Johan Alejandro Estrada Pastran
