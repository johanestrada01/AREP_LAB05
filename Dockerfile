# Usa Maven con OpenJDK 17
FROM maven:3.8.4-openjdk-17

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos del proyecto
COPY . .

# Expone el puerto de la aplicación
EXPOSE 8080

# Comando para ejecutar la aplicación con Maven
CMD ["mvn", "spring-boot:run"]
