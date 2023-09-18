# SocialNetwork-Backend

## Description
This project is a RESTful API for a social network web application. Users can share their thoughts, react to friends' thoughts, and manage their friend list. The API is built using Express.js for routing, MongoDB for data storage, and Mongoose as the ODM (Object-Document Mapping) library. It's designed to handle large amounts of unstructured data efficiently.

To demonstrate the functionality of the API, a walkthrough video has been created. You can find the video here: 
https://watch.screencastify.com/v/U1U6U4DnvP8KL9Cn9sYd

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [License](#license)

## Installation
- Clone the repository from the repo: https://github.com/HarryFelty/SocialNetwork-Backend.
- Navigate to the directory.
- Run `npm i`
- Run `npm start`

## Usage
Once the server is running, you can use a tool like Insomnia or Postman to interact with the API. The API provides endpoints for users, thoughts, reactions, and friend management. The routes can be found in the following section.

Repo: https://github.com/HarryFelty/SocialNetwork-Backend

![Untitled_ Sep 18, 2023 3_42 PM](https://github.com/HarryFelty/SocialNetwork-Backend/assets/125701349/dac816e2-47af-43ab-a661-468a66261840)


## API Routes
### Users
GET /api/users: Get a list of all users.

GET /api/users/:userId: Get a specific user by ID.

POST /api/users: Create a new user.

PUT /api/users/:userId: Update a user by ID.

DELETE /api/users/:userId: Delete a user by ID.

### Thoughts
GET /api/thoughts: Get a list of all thoughts.

GET /api/thoughts/:thoughtId: Get a specific thought by ID.

POST /api/thoughts: Create a new thought.

PUT /api/thoughts/:thoughtId: Update a thought by ID.

DELETE /api/thoughts/:thoughtId: Delete a thought by ID.

### Reactions
POST /api/thoughts/:thoughtId/reactions: Add a reaction to a thought.

DELETE /api/thoughts/:thoughtId/reactions/:reactionId: Remove a reaction from a thought.

### Friends
POST /api/users/:userId/friends/:friendId: Add a friend to a user's friend list.

DELETE /api/users/:userId/friends/:friendId: Remove a friend from a user's friend list.

## License
This project is licensed under the MIT License.
