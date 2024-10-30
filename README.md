# Project Name: Naxa Services Replica

## Description
This project is a responsive web application built with React, Redux, and Tailwind CSS. It replicates the structure, layout, and functionality of the services page of the Naxa website. The application fetches data from an API and displays it in a visually appealing format.

## Features
- Responsive design using Tailwind CSS
- Fetch data from the Naxa services API
- State management using Redux
- Asynchronous data handling with Redux-Saga
- Display of services in a structured layout

## Prerequisites
Before you begin, ensure you have met the following requirements:
- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- Basic understanding of React, Redux, and JavaScript

## Installation
1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/naxa-services-replica.git
   cd naxa-services-replica
2. **Install dependencies**
   ```bash
   npm install
3. **Set up Tailwind CSS**
   ```bash
   npx tailwindcss init

   module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    theme: {
        extend: {},
      },
      plugins: [],
    };

    @tailwind base;
    @tailwind components;
    @tailwind utilities;

## Usage
1. **Start the application**
   ```bash
   npm run dev
