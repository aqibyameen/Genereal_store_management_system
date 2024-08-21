
# General Store Management System

This is a web-based general store management system that handles two primary tasks: **Inventory Management** and **Billing System**. The project is divided into two main parts: **Frontend** and **Backend**.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [Frontend Overview](#frontend-overview)
- [Backend Overview](#backend-overview)
- [API Overview](#api-overview)
- [Data Structures](#data-structures)
- [Setup Instructions](#setup-instructions)
- [Future Improvements](#future-improvements)

## Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend**: Spring Boot
- **Data Structures**: HashMap, ArrayList
- **Languages**: Java (Spring Boot), JavaScript (React)

## Folder Structure

```bash
.
├── frontend
│   ├── node_modules
│   ├── public
│   └── src
│       └── component
│           ├── AddProduct.jsx
│           ├── BillingHistory.jsx
│           ├── Inventory.jsx
│           ├── MakePayment.jsx
│           ├── Navbar.jsx
│           ├── Product.jsx
│           ├── Search.jsx
│           ├── Sidebar.jsx
│           ├── Update.jsx
│           └── Sidebar.css
└── backend
    └── src
        └── main
            └── java
                └── martBilling
                    └── System
                        ├── controller
                        │   └── MartBillingController.java
                        ├── model
                        │   ├── Bill.java
                        │   ├── BillProducts.java
                        │   ├── Product.java
                        │   └── ProductRequest.java
                        └── service
                            └── MartBillingService.java
```

## Frontend Overview

The **Frontend** is developed using **React** and styled with **Tailwind CSS**. It consists of various components to handle the user interface for managing products, billing, and more:

- **AddProduct**: Allows adding new products to the inventory.
- **BillingHistory**: Displays the history of all billing transactions.
- **Inventory**: Manages and displays the inventory.
- **MakePayment**: Handles the payment process.
- **Navbar**: Provides navigation across the application.
- **Product**: Displays and manages individual product details.
- **Search**: Facilitates searching for products within the inventory.
- **Sidebar**: Provides side navigation across different sections of the app.
- **Update**: Enables updating existing product details.

## Backend Overview

The **Backend** is built using **Spring Boot**. It manages the inventory and billing logic using **HashMaps** and **ArrayLists** to store and manage data. No database is used in this system.

1. **Controller**: Contains the `MartBillingController.java` which manages the APIs for operations such as adding, updating, deleting, and retrieving products and bills.
2. **Model**: Defines the entities and their relationships, including:
   - `Bill.java`: Represents the bill entity.
   - `BillProducts.java`: Represents the relationship between bills and products.
   - `Product.java`: Represents the product entity.
   - `ProductRequest.java`: A DTO used for creating or updating products.
3. **Service**: Contains the business logic. The `MartBillingService.java` implements the functionality that the controller interacts with.

## API Overview

### Product Management

- **Add Product**
  - `POST /add-products`
  - Adds a new product to the inventory.
  - **Request Body**: `Product` object.

- **Add Multiple Products**
  - `POST /add-products-list`
  - Adds a list of products to the inventory.
  - **Request Body**: List of `Product` objects.

- **Add and Compare Products with Bill Products**
  - `POST /add-two-list-by-compare`
  - Compares the product list with the bill products and updates the inventory accordingly.
  - **Request Body**: `ProductRequest` object containing lists of `Product` and `BillProducts`.

- **Get All Products**
  - `GET /products`
  - Retrieves all products in the inventory.

- **Get Product by ID**
  - `GET /product/{id}`
  - Retrieves a product by its ID.

- **Search Product by Name**
  - `GET /search-by-name/{name}`
  - Searches for a product by its name.

- **Update Product**
  - `PUT /update`
  - Updates an existing product in the inventory.
  - **Request Body**: `Product` object.

- **Delete Product by ID**
  - `DELETE /delete/{id}`
  - Deletes a product from the inventory by its ID.

### Billing Management

- **Create Bill**
  - `POST /create-bill`
  - Creates a new bill with the list of products and the total amount.
  - **Request Body**: `Bill` object.

- **Get All Bills**
  - `GET /get-bills`
  - Retrieves all billing history.

- **Delete Bill by ID**
  - `DELETE /delete-bill/{id}`
  - Deletes a bill from the billing history by its ID.

## Data Structures

Instead of using a database, two main data structures are used to store and manage the data:

- **HashMap**: Used for quick lookup of products in the inventory.
- **ArrayList**: Used to manage collections of data, such as lists of products or bills.

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/store-management.git
   ```
2. Navigate to the frontend directory, install dependencies, and start the frontend server:
   ```bash
   cd frontend
   npm install
   npm start
   ```
3. Navigate to the backend directory, build and run the backend server:
   ```bash
   cd backend
   ./mvnw spring-boot:run
   ```

4. Ensure that the frontend and backend are correctly connected. The frontend runs on `http://localhost:3000` by default, and the backend on `http://localhost:8080`.

## Future Improvements

- Add authentication and authorization.
- Enhance the billing system with more features.
- Implement unit and integration tests.

---
