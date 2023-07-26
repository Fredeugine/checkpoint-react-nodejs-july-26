Practice exercise for the checkpoint . Credits to ChatGPT 
Exercise: Building a Note-taking Application with User Authentication

Frontend (ReactJS, Typescript, and Local Storage):

Create a new React project using create-react-app or any other preferred setup.

Create a component named Login that represents the login page. Users should be able to enter their username and password.

Implement a basic authentication mechanism in the Login component. Hardcode a list of user credentials (username and password) on the frontend for simplicity.

Upon successful login, store the user's authentication token in local storage to persist the user's login state between page refreshes.

Create a component named NoteItem that represents a single note. Each note should have a title, content, and a timestamp.

Implement functionality to add new notes. Users should be able to create new notes, and the notes should be displayed in a list on the screen.

Implement functionality to edit and delete notes. Add buttons next to each note that, when clicked, allow users to edit or delete the corresponding note.

Backend (Express.js, Typescript, and JSON Manipulation):

Set up an Express.js server that listens on a specific port (e.g., 3001).

Create a TypeScript interface User to define the shape of a user object. It should have properties like id, username, and password.

Create an array to store user objects to act as a user database. This array will simulate a database without using any actual database system.

Define route handlers for the following endpoints:

POST /login: Accepts JSON data with username and password, and returns an authentication token if the credentials match any user in the database.
GET /notes: Requires the authentication token to be included in the request header. Returns the list of notes as JSON for the authenticated user.
POST /notes: Requires the authentication token to be included in the request header. Accepts JSON data with title and content properties to add a new note for the authenticated user.
PUT /notes/:id: Requires the authentication token to be included in the request header. Accepts JSON data with title and content properties to update a specific note for the authenticated user.
DELETE /notes/:id: Requires the authentication token to be included in the request header. Removes a specific note for the authenticated user.
Use Express.js middleware to handle authentication. For every request, check if the provided authentication token in the header matches any user in the database. If the user is authenticated, proceed with the request; otherwise, return an error response.

Implement CORS handling in the server to allow requests from the frontend.

Testing:

Test the frontend application by running it and verify the authentication, adding, editing, and deleting notes.

Use tools like Postman or cURL to test the backend API endpoints manually, including the authentication mechanism.```
