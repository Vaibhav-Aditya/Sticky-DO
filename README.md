
-----

# Sticky-DO 📝

[](https://github.com/)
[](https://reactjs.org/)
[](https://nodejs.org/)

Sticky-DO is a full-stack web application that brings the simplicity of sticky notes to the digital world, combined with powerful to-do list functionalities. It's designed to help you organize your thoughts, tasks, and reminders in a visually intuitive way. Demo: https://eclectic-rabanadas-b8dd11.netlify.app/ Backend API: https://sticky-do.onrender.com

-----

##  Features

  * **📝 Create & Manage Notes**: Easily create, edit, and delete notes.
  * **🎨 Color Coding**: Organize your notes by color for better categorization.
  * **🖐️ Drag & Drop**: Intuitively arrange your notes on the board.

-----

##  Tech Stack

The project is built with a modern MERN-like stack.

  * **Client-Side (Frontend)**

      * **[React](https://reactjs.org/)**: A JavaScript library for building user interfaces.
      * **[Axios](https://axios-http.com/)**: For making HTTP requests to the server.
      * **[CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)**: For styling the application.

  * **Server-Side (Backend)**

      * **[Node.js](https://nodejs.org/)**: A JavaScript runtime environment.
      * **[Express.js](https://expressjs.com/)**: A minimal and flexible Node.js web application framework.
      * **[MongoDB](https://www.mongodb.com/)**: A NoSQL database to store user and note data.
      * **[Mongoose](https://mongoosejs.com/)**: An ODM library for MongoDB and Node.js.

-----

##  Project Structure

The project is organized into two main folders:

```
Sticky-DO/
├── client/         # Contains the React frontend application
|    ├── src/
|    └── index.html
|    
└── server/         # Contains the Node.js/Express backend API
    ├── models/
    ├── DBConnection.js
    └── index.js
```

-----

##  Getting Started

To get a local copy up and running, follow these simple steps.

###  Prerequisites

Make sure you have **Node.js** and **npm** installed on your machine.

  * [Node.js](https://nodejs.org/) (which includes npm)

You will also need a MongoDB database. You can use a local installation or a cloud service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

###  Installation & Setup

1.  **Clone the repository:**

    ```sh
    git clone https://github.com/your-username/Sticky-DO.git
    cd Sticky-DO
    ```

2.  **Set up the Backend Server:**

      * Navigate to the server directory:
        ```sh
        cd server
        ```
      * Install the required npm packages:
        ```sh
        npm install
        ```
      * Create a `.env` file in the `server` directory. This file will store your environment variables.
        ```env
        MONGO_URI=your_mongodb_connection_string
        ```
      * Start the server:
        ```sh
        npm run start
        ```

    The server should now be running on `http://localhost:3000`.

3.  **Set up the Frontend Client:**

      * Open a new terminal and navigate to the client directory from the project's root:
        ```sh
        cd client
        ```
      * Install the required npm packages:
        ```sh
        npm install
        ```
      * Start the React development server:
        ```sh
        npm run start
        ```

    The client application should now be running on `http://localhost:5173` and connected to the backend.
