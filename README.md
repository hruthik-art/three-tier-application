# Three Tier Application

A complete 3-tier architecture project with React frontend, Spring Boot backend, and MySQL database.

## Architecture Overview

- **Frontend**: React.js (Port 3000)
- **Backend**: Spring Boot REST API (Port 8080)
- **Database**: MySQL (Port 3306)

## Prerequisites

- Java 17 or higher
- Node.js 16+ and npm
- MySQL Server 8.0+
- Maven 3.6+

## Setup Instructions

### 1. Database Setup

1. Open MySQL Workbench
2. Connect to your MySQL server
3. Run the SQL script from `database/schema.sql`:
   ```sql
   CREATE DATABASE IF NOT EXISTS threetierdb;
   USE threetierdb;
   -- ... (rest of the script)
   ```
4. Update database credentials in `backend/src/main/resources/application.properties`:
   ```properties
   spring.datasource.username=your_username
   spring.datasource.password=your_password
   ```

### 2. Backend Setup

1. Open IntelliJ IDEA
2. Open the `backend` folder as a project
3. Wait for Maven to download dependencies
4. Run `BackendApplication.java` or use Maven:
   ```bash
   cd backend
   mvn spring-boot:run
   ```
5. Backend will start on `http://localhost:8080`

### 3. Frontend Setup

1. Open terminal in the `frontend` directory
2. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Frontend will start on `http://localhost:3000`

## API Endpoints

- `GET /api/users` - Get all users
- `GET /api/users/{id}` - Get user by ID
- `POST /api/users` - Create a new user
- `PUT /api/users/{id}` - Update a user
- `DELETE /api/users/{id}` - Delete a user

## Features

- ✅ Create, Read, Update, Delete (CRUD) operations
- ✅ Form validation
- ✅ Error handling
- ✅ Modern, responsive UI
- ✅ CORS configuration for frontend-backend communication
- ✅ Database connection with JPA/Hibernate

## Project Structure

```
ThreeTier Project/
├── backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/threetier/
│   │   │   │   ├── BackendApplication.java
│   │   │   │   ├── controller/
│   │   │   │   ├── model/
│   │   │   │   ├── repository/
│   │   │   │   ├── service/
│   │   │   │   └── config/
│   │   │   └── resources/
│   │   │       └── application.properties
│   └── pom.xml
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── database/
│   └── schema.sql
└── README.md
```

## Troubleshooting

### Backend won't start
- Check MySQL is running
- Verify database credentials in `application.properties`
- Ensure port 8080 is not in use

### Frontend can't connect to backend
- Verify backend is running on port 8080
- Check CORS configuration
- Ensure no firewall is blocking the connection

### Database connection errors
- Verify MySQL server is running
- Check database name, username, and password
- Ensure database exists (run schema.sql)

## Technologies Used

- **Frontend**: React, Axios, CSS3
- **Backend**: Spring Boot, Spring Data JPA, Hibernate
- **Database**: MySQL
- **Build Tools**: Maven, npm

## License

This project is for educational purposes.
