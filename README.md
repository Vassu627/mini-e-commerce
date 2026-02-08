# Naksh Jewels – Mini E-Commerce Module

This project is a full-stack mini e-commerce application built as part of the Naksh Jewels internship assessment.  
It includes a React (Next.js) frontend, a Node.js + Express backend, MongoDB database, and full Docker setup.

---

## Tech Stack

### Frontend

- Next.js (App Router)
- React Context API for cart state
- Axios for API calls
- Plain CSS (no UI libraries)

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose ODM
- Environment variables with dotenv

### DevOps

- Docker
- Docker Compose

---

## Features

### Frontend

- Product listing page
- Product card with:
  - Image
  - Name
  - Price
  - Add to Cart button
- Cart page:
  - Quantity update
  - Remove item
- Context API state management
- Responsive layout

### Backend

- Full CRUD for products
- Cart APIs
- Validation middleware
- Centralized error handling
- used in-memory for database

---

## Project Structure

mini-e-commerce/
│
├── backend/
│ ├── src/
│ │ ├── controllers/
│ │ ├── middleware/
│ │ ├── routes/
│ │ └── server.js
│ ├── Dockerfile
│ └── package.json
│
├── frontend/
│ ├── app/
│ ├── components/
│ ├── context/
│ ├── services/
│ ├── Dockerfile
│ └── package.json
│
├── docker-compose.yml
└── README.md

---

## API Endpoints

### Product APIs

| Method | Endpoint      | Description      |
| ------ | ------------- | ---------------- |
| GET    | /products     | Get all products |
| POST   | /products     | Create product   |
| PUT    | /products/:id | Update product   |
| DELETE | /products/:id | Delete product   |

### Cart APIs

| Method | Endpoint | Description          |
| ------ | -------- | -------------------- |
| GET    | /cart    | Get cart items       |
| POST   | /cart    | Add/update cart item |

Example request body for cart:

```json
{
  "productId": "PRODUCT_ID",
  "quantity": 1
}
```

## Environment Variables

### Backend .env

PORT=5000

## Running the Project with Docker (Recommended)

### Make sure you have:

- Docker installed
- Docker Compose installed

### Step 1: Clone the repository

- git clone <your-repo-url>
- cd naksh-assignment

### Step 2: Run the application

- docker-compose up --build

### Step 3: Open in browser

## frontend

- http://localhost:3000

## backend api

- http://localhost:5000/products

## Running Without Docker (Local Setup)

### Backend

```bash
cd backend
npm install
npm run dev

```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Sample Product Data (Optional Seed)

### You can create products using POST /products:

Example:

{
"name": "Gold Ring",
"price": 2500,
"image": "https://via.placeholder.com/200"
}

## Git Commit Examples

- feat: setup express server
- feat: add product CRUD APIs
- feat: implement cart endpoints
- feat: add nextjs product listing
- feat: implement cart context
- chore: add docker setup
- docs: add README

```

```
