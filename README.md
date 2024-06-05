# NestJS CRUD Application

This is a simple CRUD application built with NestJS and TypeORM, demonstrating basic operations on a PostgreSQL database with two tables: `Users` and `WalletAddress`.

## Technologies Used

- **NestJS**: A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
- **TypeScript**: A statically typed superset of JavaScript that compiles to plain JavaScript.
- **TypeORM**: An ORM for TypeScript and JavaScript (ES7, ES6, ES5) based on DataMapper, ActiveRecord, and Identity Map patterns.
- **PostgreSQL**: A powerful, open-source object-relational database system.

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)
- PostgreSQL

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mannbajpai/nestjs-crud-app.git
   cd nestjs-crud-app
   ```

2. Install the dependencies:

   ```bash
   npm install 
   ```
3. Create a database named yourdatabase.
  

4. Configure the database connection in src/app.module.ts:
   ```typescript
   TypeOrmModule.forRoot({
   type: 'postgres',
   host: 'localhost',
   port: 5432,
   username: 'yourusername',
   password: 'yourpassword',
   database: 'yourdatabase',
   entities: [User, WalletAddress],
   synchronize: true,
   }),
   ```
5. Start the application:

   ```bash
   Copy code
   npm run start
   ```
6. Open your browser and navigate to http://localhost:3000/api to access the Swagger UI.