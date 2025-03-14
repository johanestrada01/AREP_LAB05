# Servidor Apache con cifrado y conexion segura a servidor de spring boot

## Descripción
En este laboratorio, contamos con un servidor Spring Boot y un servidor Apache, ambos con SSL habilitado para cifrado, lo que permite el acceso mediante HTTPS. Estos servidores están desplegados en AWS. Para su implementación, se tomó como base el laboratorio anterior, separando el backend y el frontend en servidores distintos.

Los certificados SSL fueron generados utilizando Certbot junto con DuckDNS para la gestión de los dominios, asegurando una conexión segura y autenticada.

### Características principales

- Soporte para operaciones CRUD
- Desplegado en un servidor web
- Conexión a base de datos de mysql
- Uso de contenedores
- Cifrado SSL
- HTTPS


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

### Servidor apache
Instalar un servidor de apache y los elementos estaticos de spring boot hay que moverlos al directorio /var/httpd/www/html

### Uso
- Es necesario cambiar las direcciones ip dependiendo de donde se despliegue, cambiando las redirecciones de los archivos de javascript y la cadena de conexión de la base de datos. Posteriormente se puede iniciar la aplicación.


## Tecnologias
- Java
- Maven
- Html
- JavaScript
- CSS
- Docker
- Spring boot
- Apache
- Cerbot

## Autores
- Johan Alejandro Estrada Pastran
