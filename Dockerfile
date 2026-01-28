FROM eclipse-temurin:21-jdk-alpine

WORKDIR /app

COPY . .

# Fix Windows line endings + make mvnw executable
RUN sed -i 's/\r$//' mvnw && chmod +x mvnw

RUN ./mvnw clean package -DskipTests

EXPOSE 8080

CMD ["java", "-jar", "target/flight-booking-backend-0.0.1-SNAPSHOT.jar"]
