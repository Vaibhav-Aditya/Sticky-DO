
-----

# Sticky-DO 📝

[](https://github.com/)
[](https://reactjs.org/)
[](https://nodejs.org/)

Sticky-DO is a full-stack web application that brings the simplicity of sticky notes to the digital world, combined with powerful to-do list functionalities. It's designed to help you organize your thoughts, tasks, and reminders in a visually intuitive way. Demo: https://eclectic-rabanadas-b8dd11.netlify.app/ Backend API: https://sticky-do.onrender.com

-----

## Challenges

I have faced many challenges in developing this application. I have listed some of them here with the solution I came up with.

* One of the biggest challenges was handling state in React. I came to know there is something called 'stale state'. This gave me a lot of trouble. Like here:

  ```js
  setCards([...cards, newElement]);
  ```

  This here is what I was talking about. This is not the correct way to set the state in react app. The right way is:

  ```js
  setCards(currentCards => {
    //Some code here
    return [...currentCards, newElement];
  });
  ```
  I fixed it using this article: https://medium.com/@shanakaprince/understanding-stale-state-in-react-and-how-to-avoid-it-a74cc4655c43

* I faced a strange issue with MongoDB database. It was 'MongoError: E11000 duplicate key error ...'. I solved it using this article: https://congtuanle.medium.com/mongoerror-e11000-duplicate-key-error-collection-695e7e9ccdc4

* I also faced issues with deployment which I fixed using this article: https://dev.to/pixelrena/deploying-your-reactjs-expressjs-server-to-rendercom-4jbo
-----

## Sources

This section lists some of the sources that I have used as reference. This also includes the sources that I have used for debugging.

  * https://dev.to/aneeqakhan/create-get-update-and-delete-todos-from-the-database-using-mongodb-1hbl
  * https://stackoverflow.com/questions/71663356/how-to-set-the-value-of-input-from-state-react-app
  * https://stackoverflow.com/questions/13443503/run-javascript-code-on-window-close-or-page-refresh
  * https://congtuanle.medium.com/mongoerror-e11000-duplicate-key-error-collection-695e7e9ccdc4
  * https://stackoverflow.com/questions/32667847/get-divs-offsettop-positions-in-react
  * https://stackoverflow.com/questions/31663665/mongoose-validation-error-path-is-required
  * https://dev.to/techcheck/creating-a-react-node-and-express-app-1ieg
  * https://medium.com/@shanakaprince/understanding-stale-state-in-react-and-how-to-avoid-it-a74cc4655c43
  * https://react.dev/learn/synchronizing-with-effects
  * https://dev.to/yezyilomo/you-can-definitely-use-global-variables-to-manage-global-state-in-react-17l3
  * https://react.dev/reference/react/useContext
  * https://dev.to/pixelrena/deploying-your-reactjs-expressjs-server-to-rendercom-4jbo


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