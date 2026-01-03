# Project Management & Task Tracking System

## 1. Introduction

The **Project Management & Task Tracking System** is a full-stack web application designed to help teams efficiently plan, manage, and track projects and tasks. It supports role-based access control, structured workflows, and real-time progress tracking, making it suitable for small to medium-sized development teams.

The system follows modern web development practices with a scalable, modular architecture and a clean, responsive user interface.

---

## 2. Objectives

* Provide a centralized platform to manage multiple projects
* Enable efficient task assignment and tracking
* Implement role-based access for secure operations
* Ensure scalability, maintainability, and clean code structure

---

## 3. Key Features

### 📌 Project Management

* Create new projects with relevant details
* Update and delete existing projects
* View project progress and associated tasks

### ✅ Task Management

* Full CRUD (Create, Read, Update, Delete) operations on tasks
* Assign tasks to team members (manually managed)
* Track task status:

  * To Do
  * In Progress
  * Completed

---

## 4. Technology Stack

### Frontend

* **React.js** – Component-based UI development
* **React Router** – Client-side routing
* **Tailwind CSS** – Utility-first responsive styling

### Backend

* **Node.js** – Server-side JavaScript runtime
* **Express.js** – RESTful API development

### Database

* **MongoDB** – NoSQL database for flexible data storage
* **Mongoose** – ODM for schema and model management

---

## 5. System Architecture

The application follows a **MERN Stack Architecture**:

* **Client (React)** communicates with the backend via REST APIs
* **Server (Node + Express)** handles business logic and API requests
* **Database (MongoDB)** stores users, projects, and tasks

The architecture is modular, allowing easy scalability and maintenance.

---

## 6. Frontend Structure



* Components are reusable and modular
* Routing is handled using nested routes
* API calls are centralized in service files

---

## 7. Backend Structure

`

* **Controllers**: Business logic
* **Models**: Mongoose schemas
* **Routes**: API endpoints
* **Middleware**: Authentication & authorization

---

## 8. Database Design

### User Schema

* Name
* Email

### Project Schema

* Project Name
* Description
* Created By
* Assigned Users

### Task Schema

* Title
* Description
* Status
* Assigned User
* Project Reference

---

## 9. API Overview

### Project APIs

* `POST /api/projects` – Create project
* `GET /api/projects` – Get all projects
* `PUT /api/projects/:id` – Update project
* `DELETE /api/projects/:id` – Delete project

### Task APIs

* `POST /api/tasks`
* `GET /api/tasks`
* `PUT /api/tasks/:id`
* `DELETE /api/tasks/:id`

---

## 10. User Workflow

1. User opens the application
2. Projects are displayed on the dashboard
3. New projects are created and managed
4. Tasks are added under specific projects
5. Task status is updated as work progresses
6. Project progress can be monitored easily

---

## 11. Advantages

* Clean and intuitive UI
* Secure role-based access
* Scalable architecture
* Real-world project structure

---

## 12. Future Enhancements

* User authentication and authorization
* Role-based access control (Admin, Manager, Developer)
* Notifications and email alerts
* File attachments for tasks
* Real-time updates using WebSockets
* Analytics dashboard

---

## 13. Conclusion

The Project Management & Task Tracking System is a robust, scalable, and user-friendly application that demonstrates full-stack development skills using the MERN stack. It is suitable for real-world use and showcases practical implementation of modern web technologies.

---

**Developed By:** Ibad Ullah Khan

