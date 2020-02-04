# Back-End

Deployed at: https://app-replate.herokuapp.com/

## User registration and login endpoints

POST /api/auth/register -register a new user, returns new user

POST /api/auth/login -user login, returns a token

## Business endpoints

GET /api/business/:id -returns one business record by id

PUT /api/business/:id -edits one business record by id, returns edited business

DELETE /api/business/:id -deletes one business record by id, returns a success message

## Volunteer endpoints

GET /api/volunteer/:id -returns one volunteer record by id

PUT /api/volunteer/:id -edits one volunteer record by id, returns edited volunteer

DELETE /api/volunteer/:id -deletes one volunteer record by id, returns success message

## Pickup Request endpoints

POST /api/pickups/ - business can create a new pickup, returns a success message

PUT /api/pickups/:id -business can edit one of its pickups, by id, returns success message

GET /api/pickups/business/:id -returns an array of pickups belonging to a business (by id)

DELETE /api/pickups/:id -business can delete one of its pickups by id, returns success message

GET /api/pickups/open-requests - returns an array of all unassigned pickup requests

GET /api/pickups/:id -returns a pickup request by id

GET /api/pickups/volunteer/:id - returns an array of pickup requests claimed by one volunteer

PUT /api/pickups/:id -volunteer can edit a pickup by id, accepting or canceling the request (by adding or removing the volunteer_id to the user object)
