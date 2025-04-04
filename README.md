# Axcelerate User Directory

This is a Next.js application built as a demonstration for Axcelerate. It showcases a simple user directory, allowing users to browse a list of users and view details about individual users.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
  - [Running the Storybook](#running-the-storybook)
  - [Running the Unit Testing](#running-the-unit-testing)


## Features

*   **User List:** Displays a list of users with basic information (e.g., name, email, avatar).
*   **User Details:** Allows users to click on a user to view more detailed information about them (e.g., address, company, phone).
*   **Responsive Design:** The app is designed to work seamlessly on various devices, from desktops to mobile phones.
* **Search:** Users can search for users by name.
* **Pagination:** The user list is paginated.

## Tech Stack

*   **Next.js:** A React framework for building user interfaces.
*   **React:** A JavaScript library for building user interfaces.
*   **TypeScript:** A typed superset of JavaScript.
*   **Storybook:** A tool for developing UI components in isolation.
*   **Jest:** A JavaScript testing framework.
*   **React Testing Library:** A library for testing React components.
* **CSS Modules:** For styling the components.
* **Axios:** For making HTTP requests.

## Screenshots

*(Here you would add screenshots of the application. For example:)*

![User List Screenshot](public/user-list-screenshot.png)
![User Details Screenshot](public/user-details-screenshot.png)

## Getting Started

These instructions will guide you on how to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   **Node.js (v18 or higher):** You can download it from [https://nodejs.org/](https://nodejs.org/).
*   **npm or yarn or pnpm or bun:** These are package managers for Node.js. npm is usually bundled with Node.js, the other ones can be installed with npm.
    *   yarn: `npm install --global yarn`
    *   pnpm: `npm install -g pnpm`
    *   bun: `curl -fsSL https://bun.sh/install | bash`

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url> # Replace <repository-url> with the actual repository URL
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd axcelerate
    ```

3.  **Install dependencies:**
    You can use one of the following package manager
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

### Running the Development Server

Once the dependencies are installed, you can start the development server using one of the following commands:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```


### Running the Storybook

```bash
npm run storybook
# or
yarn storybook
# or
pnpm storybook
# or
bun storybook
```

### Running the Unit Testing

```bash
npm run test
# or
yarn test
# or
pnpm test
# or
bun test
```
