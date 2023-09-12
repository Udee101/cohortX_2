# HNGX Task 2 - TypeORM, Express, and PostgreSQL CRUD API

This repository contains a simple CRUD API built using TypeORM, Express.js, and PostgreSQL.

## Steps to run this project locally:
### Prerequisites
Ensure you have the following installed on your system
- Node.js: [Download and Install Node.js](https://node.js.org)
- PostgreSQL: [Download and Install PostgreSQL](https://www.postgresql.org/download)

## Getting Started

1. Clone this repository:
    ```bash
    git clone https://github.com/Udee101/cohortX_2.git
    ```
2. Navigate to the project directory:
    ```bash
    cd cohortX_2
    ```
3. Install project dependencies:
    ```bash
    npm install
    ```

### Database Configuraton
1. Create a PostgreSQL database for this project. You can do this using the command-line/terminal `psql` utility or PostgreSQL GUI tool - [pgAdmin](https://www.pgadmin.org/download/)

2. Create a `.env` file from `.env.example` file, for your database configuration:
    ```bash
    cp .env.example .env
    ```

3. Configure the database connection by editing the `.env` file. Replace the following fields with your database details:
    ```env
    NODE_ENV=development

    DB_HOST=localhost
    DB_DATABASE=your-database 
    DB_USERNAME=your-username
    DB_PASSWORD=your-password
    ```

### Running the API
Run the following command to start the server:
  ```bash
  npm start
  ```
The API will be available at **`http://localhost:8000`**. You can change the port in the `src/index.ts` file if needed.

### API Endpoints
The API provides the following CRUD endpoints:
- **`POST /api/`**: Create a new Person.
- **`GET /api/:id`**: Retrieve a Person by ID.
- **`PUT /api/:id`**: Update an existing Person.
- **`DELETE /api/:id`**: Delete a Person by ID.
