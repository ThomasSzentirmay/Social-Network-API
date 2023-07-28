# Social-Network-API

## Description

This back-end application is a Social Network API, allowing you to create users, create thoughts on users, and create mutual connections amongst thoughts and users in the form of reactions and adding friends. This was built with MongoDB, Mongoose and Node.js. I tested all the routes through the application Insomnia. An issue that had me stumped for a little while when building this API was deconstructing the models when importing them, which wasn't actually necessary. It was causing major issues when sending responses to the users in the routes, so fixing this was the key to the app working efficiently.

![Screenshot 2023-07-27 231449](https://github.com/ThomasSzentirmay/Tech-Blog/assets/132217664/cb92ac5e-e55b-4539-8416-88067075a374)

Here is a link to a video demo of the route testing: https://drive.google.com/file/d/1Bgfu-HmhvWKo8czt9_3bmKvfgCyPhQod/view?usp=sharing

## Installation

Users can clone this repo to their local machine for their own use. Make sure to have MongoDB and Node.js locally installed, and once you have cloned the repo, run 'npm i' in your integrated terminal to install the necessary dependancies (mongoose).

## Usage

Users are welcome to tests the routes in the project, and play with the general CRUD functionality of it. Be aware of the prefixes the routes have (/api/users and /api/thoughts). Refer to server.js to understand this better, and refer to the route folder to see what you need to visit locally.

## License

MIT License

Refer to 'License' in the project repo for further information on the limitations and usability of this application under the MIT License applied to this project.

## Tests

Used insomnia for testing the routes.

## Features

- Standard CRUD functionality

## Badges

N/A

  
