#Plant Care Tracker Backend 🌿

This is the backend API for the Plant Care Tracker application, built with **Node.js**, **Express**, and **MongoDB**. It provides RESTful endpoints to manage plant data, including adding, updating, retrieving, and deleting plant records.

The API is designed to be deployed easily on Vercel and supports filtering plants by user email and sorting by various criteria on the frontend.

---

## 🌐 Live URL
https://plant-care-server-nine.vercel.app/

## Features

- **CRUD operations** for plants: create, read, update, and delete plant records.
- **User-specific plant management:** Fetch plants filtered by user email.
- **Sorting capabilities:** Support for sorting plants by watering date or care level on the frontend.
- **MongoDB Atlas integration:** Uses a cloud-based MongoDB instance for scalable and reliable data storage.
- **Vercel deployment-ready:** Includes Vercel configuration (`vercel.json`) for smooth deployment.
- **Robust error handling:** Returns meaningful HTTP status codes and error messages for failure scenarios.
- **Middleware to attach MongoDB collection** to requests for clean and reusable route handlers.
- **CORS enabled:** Allows cross-origin requests for seamless frontend-backend interaction.

---

## Getting Started

### Environment Variables

Create a `.env` file with the following:

```bash
DB_USER=your_mongodb_username
DB_PASS=your_mongodb_password
