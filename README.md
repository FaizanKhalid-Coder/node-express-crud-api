# 📦 Product CRUD API

A full stack web application built with Node.js, Express, and MongoDB. It provides a REST API for managing products with full Create, Read, Update, and Delete (CRUD) operations, along with a simple HTML/CSS/JavaScript frontend.

---

## 🛠️ Tech Stack

**Backend**
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

**Frontend**
- HTML5
- CSS3
- Vanilla JavaScript (Fetch API)

---

## ✨ Features

- Get all products
- Get a single product by ID
- Add a new product
- Update an existing product
- Delete a product
- Frontend UI to interact with the API
- CORS enabled for cross-origin requests
- Connected to MongoDB Atlas cloud database

---

## 📁 Project Structure

```
node-express-crud-api/
├── controllers/
│   └── productController.js   # Route logic
├── model/
│   └── Product.js             # Mongoose schema
├── routes/
│   └── product.js             # API routes
├── index.js                   # Entry point
├── index.html                 # Frontend UI
├── .env                       # Environment variables
└── package.json
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/node-express-crud-api.git
cd node-express-crud-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root folder:

```env
DB_CONNECT=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/myFirstDataBase?appName=Cluster0
```

Replace `<username>` and `<password>` with your MongoDB Atlas credentials.

### 4. Run the server

```bash
npm start
```

Server runs on `http://localhost:4000`

### 5. Run the frontend

```bash
npx serve .
```

Open `http://localhost:3000` in your browser.

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get single product |
| POST | `/api/products` | Add new product |
| PUT | `/api/products/:id` | Update product |
| DELETE | `/api/products/:id` | Delete product |

### Example request body (POST/PUT)

```json
{
  "title": "Google Pixel 4A",
  "price": "RS. 15,000",
  "image": "https://example.com/image.jpg",
  "details": "6GB RAM, 128GB Storage"
}
```

---

## 📸 Screenshots

> Add screenshots of your frontend here after uploading to GitHub.

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
