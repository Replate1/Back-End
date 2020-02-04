# Back-End

Deployed at: https://app-replate2.herokuapp.com/

## User registration and login endpoints

**POST /api/auth/register** -register a new user, returns success message

expects: username, password, name, address, phone_number, email, type

type is an integer; ex:

type: 1 === "business"
type: 2 === "volunteer"

**POST /api/auth/login** -user login, returns a token

expects: username and password

## Business endpoints

**GET /api/business/:id** -returns one business record by id

needs: id of user/business

**PUT /api/business/:id** -edits one business record by id, returns edited business

needs: id of user/business
can receive: username, password, name, address, phone_number, email and type

**DELETE /api/business/:id** -deletes one business record by id, returns a success message

needs: id of user/business

## Volunteer endpoints

**GET /api/volunteer/:id** -returns one volunteer record by id

needs: id of user/volunteer

**PUT /api/volunteer/:id** -edits one volunteer record by id, returns edited volunteer

needs: id of user/volunteer
can receive: username, password, name, address, phone_number, email and type

**DELETE /api/volunteer/:id** -deletes one volunteer record by id, returns success message

needs: id of user/volunteer

## Pickup Request endpoints

**POST /api/pickups/** - business can create a new pickup, returns a success message

expects: food_type: string, amount: integer, pickup_time: integer, complete: boolean (0 meaning false or 1 meaning true), business_id: integer(user id)

**PUT /api/pickups/:id** -business can edit one of its pickups, by id, returns success message

can receive food_type: string, amount: integer, pickup_time: integer, complete: boolean (0 meaning false or 1 meaning true)

**GET /api/pickups/business/:id** -returns an array of pickups belonging to a business (by id)

needs: id of user/business

**DELETE /api/pickups/:id** -business can delete one of its pickups by id, returns success message

needs: id of pickup request

**GET /api/pickups/open-requests** - returns an array of all unassigned pickup requests

**GET /api/pickups/:id -returns** a pickup request by id

needs: pickup request id

**GET /api/pickups/volunteer/:id** - returns an array of pickup requests claimed by one volunteer

needs: id of user/volunteer

**PUT /api/pickups/:id** -volunteer can edit a pickup by id, accepting or canceling the request (by adding or removing the volunteer_id to the user object)

can receive: volunteer_id: integer || volunteer_id: null
