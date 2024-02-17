# Fullstack Apartment Application

This is a simple apartment application developed using Nest.js for the backend, Next.js for the frontend, and React Native (Expo) for mobile. The application provides functionalities to create, list, view, and delete apartments.

## Backend

The backend is developed using Nest.js framework and provides the following APIs:

1. **Create Apartment**: Allows users to create a new apartment.
    - Method: POST
    - API: `http://localhost:3001/apartment`

2. **Get All Apartments**: Retrieves a list of all apartments.
    - Method: GET
    - API: `http://localhost:3001/apartment`

3. **Get Apartment**: Retrieves details of a specific apartment.
    - Method: GET
    - API: `http://localhost:3001/apartment/{id}` (Replace `{id}` with the ID of the apartment)

4. **Delete Apartment**: Deletes a specific apartment.
    - Method: DELETE
    - API: `http://localhost:3001/apartment/{id}` (Replace `{id}` with the ID of the apartment)

The backend runs on port 3001.

## Frontend

The frontend is developed using Next.js and provides the following responsive pages:

1. **List All Apartments**: Displays a list of all apartments.
2. **Create Apartment**: Allows users to create a new apartment.
3. **Show Apartment**: Displays details of a specific apartment.

The frontend runs on port 3000.

## Mobile

The mobile application is developed using React Native with Expo and consists of two screens:

1. **List All Apartments**: Displays a list of all apartments.
2. **Show Apartment**: Displays details of a specific apartment.

## Snapshots

Here are some snapshots of Both Mobile and Web application:

- [Web Listing Apartments](./screenshots/webApartments.png)
- [Web Show Apartment](./screenshots/webApartment.png)
- [Mobile Listing Apartments](./screenshots/mobileApartments.jpeg)
- [Mobile Show Apartment](./screenshots/mobileApartment.jpeg)


## Running the Application
 Clone the repository:

```bash
git clone https://github.com/eslammuhammaad/Apartments
```
### Backend

1. Navigate to the `backend` directory.
2. Install dependencies using `npm install`.
3. Start the server using `npm run start:dev`.
4. The backend will run on `http://localhost:3001`.

### Frontend

1. Navigate to the `frontend` directory.
2. Install dependencies using `npm install`.
3. Start the development server using `npm run dev`.
4. The frontend will run on `http://localhost:3000`.

### Mobile

1. Navigate to the `mobile` directory.
2. Install dependencies using `npm install`.
3. Start the Expo development server using `npm start`.
4. Use Expo Go app on your mobile device to scan the QR code and view the mobile application.



