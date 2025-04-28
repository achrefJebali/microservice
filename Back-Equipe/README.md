# Back-Equipe Microservice

## Description
This microservice manages team-related operations within the system.

## Technology Stack
- Java 17
- Spring Boot 3.4.2
- Spring Cloud
- Maven

## Endpoints
- `GET /api/equipe` : Get all teams
- `GET /api/equipe/{id}` : Get team by ID
- `POST /api/equipe` : Create a new team
- `PUT /api/equipe/{id}` : Update a team
- `DELETE /api/equipe/{id}` : Delete a team

## Configuration
- Service registers with Eureka at startup
- Uses centralized config server (if available)
- Environment variables:
  - `SERVER_PORT`: Port to run the service (default: 8082)
  - `EUREKA_CLIENT_SERVICEURL_DEFAULTZONE`: Eureka server URL

## Running the Service
### Locally
```bash
./mvnw spring-boot:run
```

### With Docker
```bash
docker build -t back-equipe .
docker run -p 8082:8082 back-equipe
```

## Integration
- Communicates with other microservices via REST

## Authors
- [Your Team Names Here]
