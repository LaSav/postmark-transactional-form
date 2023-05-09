# REST API to Send Transactional Emails With Postmark and Node.js

A landing page to sign up subscribers to a mailing list (MongoDB) and send a transactional confirmation email using the Postmark API.

## Built with

- Vanilla JavaScript
- HTML
- Bootstrap
- Axios
- Express
- Mongoose
- MongoDB

## Usage

### Install Dependencies and Run

```
git clone https://github.com/LaSav/postmark-transactional-form
npm install
npm run server
```

### Env Variables

Create a .env file in the root directory and add the variables:

```
NODE_ENV = development
PORT = 3000
MONGO_URI = Your MongoDB URI
POSTMARK_KEY = Your Postmark API key
```

## Additional Resources

[Postmark Developer Guide](https://postmarkapp.com/developer)
