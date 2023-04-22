# Server API Documentation
## This is the official API documentation for the server created using MongoDB, ExpressJS, JWT Token, Multer, and Bcrypt.

# Endpoints
## User registration
### URL: /user/reg
Method: POST
Request body:
1. first_name :String,
2. last_name : String,
3. email : String,
4. phone : Number,
5. password : String,
Response:
message: A message indicating whether the user was successfully registered or if there was an error

# User login
## URL: /user/login
Method: POST
Request body:
email: The user's email address
password: The user's password
Response:
token: A JWT token to use for subsequent API requests

# Upload profile picture
## URL: /profile/uploads/:id
Method: POST
Request body:
profileImage: The image file to upload
Response:
message: A message indicating whether the image was successfully uploaded or if there was an error

# Get profile picture
## URL: /profile/:userid
Method: GET
Response:
The image file for the specified user ID


# Get/post more details of user
## URL: /info/details/:userid

Method: GET or POST

Request body (for POST):

description: The user's description
Response:

The user's details (for GET)
message: A message indicating whether the user's details were successfully updated or if there was an error (for POST)

# Get followers
## URL: /info/followers/:userid
Method: GET
Request query parameters:
1. page: The page number to retrieve (optional, default is 1)
2. limit: The number of results per page (optional, default is 10)
### Response:
The followers for the specified user ID
#### Example:
GET /info/followers/123?page

# Api : https://cipher-gne4.onrender.com/