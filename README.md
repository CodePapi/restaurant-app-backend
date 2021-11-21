# restaurant-app-backend API Docs

## Authentication APIS

| API Endpoint                                            | Request type                                            | Data Collected |
| ------------------------------------------------------- | ------------------------------------------------------- | -------------- |
| <b>user signup</b><br/>{BaseURL}/api/auth/signup/ |`POST` | `username, email, password`                             |
| <b>user signin</b><br/>{BaseURL} /api/auth/signim  |`POST` | `username, password` |
| <b>profile</b><br/>{BaseURL}/api/auth/profile |`GET`      | `Bearer Token`                                          |

##

## Restaurants APIS

| API Endpoint                                                                                                              | Request type        | Data Collected |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------- | -------------- |
| <b>get all restaurants from google & .csv(excell spreadsheet)</b><br/>{BaseURL}/api/restaurants/| `GET`                     | ``                  |
| <b>filter restaurants by cuisine & location</b><br/>{BaseURL}/api/restaurants?cuisine=`cuisine`&location=`location` |`GET` | `cuisine, location` |
| <b>get all locations</b><br/>{BaseURL} /api/restaurants/locations`GET`                                                    | ``                  |
| <b>get all cuisines</b><br/>{BaseURL}/api/restaurants/cuisines |`GET`                                                      | ``                  |

##

## Booking APIS

| API Endpoint                                                              | Request type                             | Data Collected |
| ------------------------------------------------------------------------- | ---------------------------------------- | -------------- |
| <b>book a restaurant</b><br/>{BaseURL}/api/booking/|`POST`                 | `Bearer Token, bookedBy, restaurantData` |
| <b>get all restaurants booked by user</b><br/>{BaseURL}/api/booking |`GET` | `Bearer Token`                           |

##
