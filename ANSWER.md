## How to run: 

* cd Client :
        1. npm install
        2. create a .env file in the Client and paste 
                 VITE_API_BASE_URL=http://localhost:4000/api
        3.npm run dev
*cd Server :
          1. npm install:
          2. create a .env file in the Server and paste 
                MONGO_URL=mongodb+srv://ibadullahkhan:project987@cluster0.waa5yex.mongodb.net/
                JWT_SECRET=HelloBoss 
                 NODE_ENV="development"
          3. write in the terminal nodemon: or node index.js

## install the dependencies in Client
*  "@tailwindcss/vite": "^4.1.18",
    "axios": "^1.13.2",
    "framer-motion": "^12.27.3",
    "lucide-react": "^0.562.0",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-hot-toast": "^2.6.0",
    "react-icon": "^1.0.0",
    "react-icons": "^5.5.0",
    "react-router-dom": "^7.11.0",
    "serve": "^14.2.5",
    "server": "^1.0.42",
    "tailwindcss": "^4.1.18"

## install the dependencies in Server 
*    "bcrypt": "^6.0.0",
    "cloudinary": "^2.9.0",
    "cookie-parser": "^1.4.7",
    "cors": "^2.8.5",
    "dotenv": "^17.2.3",
    "express": "^5.2.1",
    "jsonwebtoken": "^9.0.3",
    "mongoose": "^9.0.2",
    "nodemon": "^3.1.11",
    "pm2": "^6.0.14"

## Stack Choice Answer 

I chose the MERN stack (MongoDB, Express.js, React.js, Node.js) for this task because it allows me to build a full-stack application using a single language, JavaScript, across both frontend and backend.

React.js was used for the frontend because it provides a component-based architecture, making the UI reusable, fast, and easy to manage. It also works well for dynamic dashboards like task and user management.

Node.js and Express.js were chosen for the backend because they are lightweight, fast, and allow easy creation of REST APIs. Express simplifies routing and middleware handling, especially for authentication and CRUD operations.

MongoDB was selected as the database because it is flexible and schema-less, which is useful for handling evolving data structures like users, tasks, and projects without complex migrations.

## Worse choices for this project

A worse choice would have been using a strongly coupled or heavyweight stack like Java Spring Boot with a relational database for this small-to-medium CRUD application. While powerful, it would increase complexity and development time unnecessarily.

Another poor choice could be using multiple programming languages for frontend and backend without need, which would slow development and make debugging harder.

Similarly, using a low-level backend like raw Node.js without Express would make routing and middleware handling more complex and less scalable.


## Edge Case Answer 

One real edge case in my application is handling empty or missing assigned users in the TaskCard component, where the application safely checks if the assignedUsers field exists before trying to process it.

* File: TasksCard.jsx
* Lines: ( 40–51)

## AI Usage

I used AI (ChatGPT) as an assistant throughout the development of this project to help with debugging, code improvement, UI design, and understanding backend/frontend integration issues.

* 1. Tailwind UI Improvements
Tool used: ChatGPT
What I asked: Improve UI design of React components (Navbar, UserCard, TaskCard, forms) without changing logic
What I got: Modern dark-themed UI layouts with better spacing, hover effects, and responsive styling
* 2. Debugging API Errors
Tool used: ChatGPT
What I asked: Why I was getting 404 and 500 errors in logout and signup APIs
What I got: Identification of incorrect backend routes, missing middleware issues, and axios misconfigurations

# wrokring on the authentication still in progress

 *3. Backend Fixes (Auth System)
Tool used: ChatGPT
What I asked: Fix logout controller and authentication routing issues
What I got: Correct Express controller structure, middleware correction, and cookie handling fixes
* One change I made to the AI output was correcting the logout implementation. The AI initially suggested keeping authentication middleware on the logout route, but I removed it because it was causing unnecessary failures when the token was missing or expired. I also adjusted the API endpoint naming to match my backend routes exactly to prevent 404 errors, ensuring proper communication between frontend and backend.

## Honest Gap was filled after my extebtions for the assesment 
 One thing that is not fully strong in my submission is the authentication routing flow between the frontend and backend. I have already implemented both backend authentication (login, signup, logout) and frontend integration, but there are still some inconsistencies in route alignment and API endpoint handling which can cause bugs.

If I had another day, I would carefully refactor and standardize all authentication routes to ensure exact matching between frontend API calls and backend endpoints. I would also improve route guarding logic so that login and signup pages are properly restricted based on user authentication state, making the navigation flow more reliable and bug-free.

I would also use Zustand for centralized state management to properly handle user and admin roles across the application, ensuring consistent auth state across all components.
