# Tour Guide Booking System API Documentation

| HTTP Method | Route                                | Access Level | Description                         |
|-------------|--------------------------------------|--------------|-------------------------------------|
| POST        | /api/v1/auth/register               | Public       | Register a new user                 |
| POST        | /api/v1/auth/login                  | Public       | User login                          |
| ""          | ""                                  | ""           | ""                                  |
| GET         | /api/v1/booking                     | Admin        | Get all bookings (with queries)     |
| POST        | /api/v1/booking                     | User         | Make a booking                      |
| GET         | /api/v1/booking/mybooking          | User         | Get user's bookings (with queries)  |
| POST        | /api/v1/booking/payment/:id        | User         | Make payment for a booking          |
| GET         | /api/v1/booking/user/:id           | User         | Get bookings by user ID (with queries) |
| PATCH       | /api/v1/booking/cancel/:id         | User         | Cancel a booking                    |
| GET         | /api/v1/booking/:id                | User         | Get a booking by ID                 |
| ""          | ""                                  | ""           | ""                                  |
| GET         | /api/v1/guides                      | Public       | Get available guides (with queries) |
| GET         | /api/v1/guides/:id                  | Public       | Get guide by ID                     |
| POST        | /api/v1/guides                      | Admin        | Create a guide                      |
| DELETE      | /api/v1/guides/:id                  | Admin        | Delete a guide                      |
| ""          | ""                                  | ""           | ""                                  |
| POST        | /api/v1/review/:tourId              | User         | Create a review                     |
| ""          | ""                                  | ""           | ""                                  |
| POST        | /api/v1/tours                       | Admin        | Create a new tour                   |
| PUT         | /api/v1/tours/:id                   | Admin        | Update a tour                       |
| DELETE      | /api/v1/tours/:id                   | Admin        | Delete a tour                       |
| GET         | /api/v1/tours                       | Public       | Get all tours                       |
| GET         | /api/v1/tours/:id                   | Public       | Get a single tour                   |
| GET         | /api/v1/tours/search/getTourBySearch| Public       | Get tours by search                  |
| GET         | /api/v1/tours/search/getFeaturedTours| Public      | Get featured tours                  |
| GET         | /api/v1/tours/search/getTourCount   | Public       | Get tour count                      |
| ""          | ""                                  | ""           | ""                                  |
| PUT         | /api/v1/users/:id                   | User         | Update a user                       |
| DELETE      | /api/v1/users/:id                   | User         | Delete a user                       |
| GET         | /api/v1/users                       | Admin        | Get all users                       |
| GET         | /api/v1/users/:id                   | User         | Get a single user                   |
