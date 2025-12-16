# IOT-Device-Monitoring-Dashboard

## Project Overview
This project is a full-stack IoT Device Monitoring Dashboard. It consists of a Node.js/Express backend (with MongoDB) and a React frontend (using Vite) for real-time device monitoring.

---

## Prerequisites
- **Node.js** (v18 or higher recommended)
- **npm** (comes with Node.js)
- **MongoDB Atlas** or local MongoDB instance

---

## 1. Backend Setup

1. **Install dependencies:**
	```bash
	cd backend
	npm install
	```

2. **Configure environment variables:**
	- Edit the `.env` file in the backend folder:
	  ```env
	  MONGODB_URI=your_mongodb_connection_string
	  PORT=3000
	  ```
	- Replace `your_mongodb_connection_string` with your MongoDB Atlas URI or local MongoDB URI.

3. **Seed the database (optional, for demo data):**
	```bash
	cd seed
	node device.seed.js
	cd ..
	```

4. **Start the backend server:**
	```bash
	npm run dev
	```
	The backend will run on `http://localhost:3000` by default.

---

## 2. Frontend Setup

1. **Install dependencies:**
	```bash
	cd ../frontend
	npm install
	```

2. **Start the frontend development server:**
	```bash
	npm run dev
	```
	The frontend will run on `http://localhost:5173` by default.

3. **Access the dashboard:**
	- Open your browser and go to `http://localhost:5173`

---

## 3. Folder Structure

```
IOT-Device-Monitoring-Dashboard/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── model/
│   ├── routes/
│   ├── seed/
│   ├── .env
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
└── README.md
```

---

## 4. API Endpoints

- `GET /api/devices` — List all devices
- `GET /api/devices/:id` — Get device details by DeviceID

---

## 5. Notes
- The backend uses MongoDB for data storage. Make sure your database is running and accessible.
- The frontend expects the backend to be running on `localhost:3000`. If you change the backend port, update the API URLs in the frontend accordingly.
- For demo/testing, use the provided seed script to populate the database with sample devices.

---

