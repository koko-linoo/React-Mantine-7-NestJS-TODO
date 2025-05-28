# Project Summary: To-Do List Application

The To-Do List Application helps users manage daily tasks and schedules effectively. Key modules include "Today’s Task List," displaying tasks due today, and "Scheduled Tasks," allowing users to plan future tasks with a calendar view and reminders. Developed using React.js for the frontend and NestJS for the backend, the app ensures a user-friendly interface and efficient task management. Future enhancements include collaboration features, integration with other tools, and mobile applications. This tool aims to boost productivity and organization by focusing on immediate tasks and long-term planning.

## Teach stack

- Frontend
  1. React JS
  2. Tanstack React Query
  3. React Router DOM
  4. Axios
  5. Mantine UI
- Backend
  1. NestJS
  2. Prisma ORM
  3. Postgres DB

## Installation & Running The application

Clone Repository

```
git clone https://github.com/koko-linoo/React-Mantine-7-NestJS-TODO.git
```

Run Docker Container

```
cd React-Mantine-7-NestJS-TODO/
docker-compose up --build -d
```

Run Migrations

```
cd backend-api
cp .env.example .env
npm install
npx prisma migrate dev
```

To synchronize database

```
cd ..
docker-compose up --build -d
```
