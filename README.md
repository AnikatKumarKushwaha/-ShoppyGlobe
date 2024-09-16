# ShoppyGlobe E-commerce Application

The ShoppyGlobe project is a full-featured e-commerce application using React, focusing on component architecture, Redux state management, and responsive design. It includes features like product listing, cart management, routing, and performance optimization through lazy loading.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run project:
   ```bash
   npm run dev
   ```

## Features

- **Component-Based Architecture**:

  - Reusable components: `Header`, `ProductList`, `ProductItem`, `ProductDetail`, `Cart`, `CartItem`.
  - Each component is modular and focused on a specific task.

- **Props Utilization**:

  - Props are passed between components for data sharing and interaction.

- **Data Fetching (API)**:

  - Uses `useEffect()` to fetch product data from `https://dummyjson.com/products`.
  - Implements custom hooks for fetching product lists.
  - Includes error handling to manage failed requests.

- **State Management with Redux**:

  - Centralized state using Redux for managing cart items.
  - Actions, reducers, and selectors for adding/removing products.
  - Example: `dispatch(addToCart(product))` to update cart state.

- **React Router for Navigation**:

  - Implements routes like `/`, `/product-detail/:id`, `/cart`, `/check-out`.
  - Dynamic routing for product details with URL parameters.

- **Performance Optimization**:

  - Lazy loading and code-splitting with `React.lazy` and `Suspense` for better performance.

- **Responsive Styling**:
  - Fully responsive design with modern CSS, optimized for different screen sizes.

### Git hub link

- [Git hub link](https://github.com/AnikatKumarKushwaha/-ShoppyGlobe)

### Vercel link
