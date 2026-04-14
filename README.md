# Multi-Step Form

A robust, multi-step registration form built with React, TypeScript, and Styled Components. This project demonstrates advanced state management using the Context API to maintain form data across different routes and a personalized completion flow.

## 🚀 Technologies

This project was developed with the following technologies:

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: Adds static typing to JavaScript for better developer experience and code quality.
- **Styled Components**: CSS-in-JS library for styling components with full power of CSS.
- **React Router Dom**: Declarative routing for React applications.
- **Context API**: React's native state management for sharing data between components without prop drilling.

## ✨ Features

- **Sequential Registration**: 3 distinct steps for personal, professional, and contact information.
- **Global State Management**: Data is preserved even if the user navigates between steps.
- **Dynamic Theming**: Responsive sidebar that indicates the current active step.
- **Personalized Result**: A "Thank You" screen that summarizes user data and adapts icons based on the chosen technical level.
- **Data Reset**: Ability to clear all entries and start over from a clean state.

## 📁 Project Structure

```text
src/
├── components/ # Reusable UI components (Theme, Sidebar, Header)
├── contexts/   # State management (FormContext)
├── pages/      # Form steps (FormStep1, 2, 3 and Thanks)
└── router.tsx  # Dynamic route configuration
```

## 🛠️ How to Run

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/YujiSeto/multiform.git
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Start the development server**:
    ```bash
    npm start
    # or
    yarn start
    ```

4.  Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

Made by [Yuji Seto](https://github.com/YujiSeto)
