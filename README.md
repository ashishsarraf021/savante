Here's a detailed README file for setting up the React project to create the landing page and sign-up pages for Savante:

---

# Savante React Project

## Overview

Welcome to the Savante React project! This project involves designing and developing a landing page and two distinct sign-up pages: one for brands and one for influencers. Savante is a Brand and Influencer Matching AI Platform aimed at solving the industry's major challenge: matching the right brands with the right influencers.

## Live Demo

You can view the deployed project here: [Savante Live Demo](https://savante.netlify.app/)

## Objectives

- **Landing Page**: Create a landing page that introduces what Savante does, encouraging creativity while maintaining the brand's image.
- **Sign-Up Pages**: Design and develop two sign-up pages:
  - **Brand Sign-Up**: A page for brands to register, reflecting a professional and engaging feel.
  - **Influencer Sign-Up**: A page for influencers to register, presenting a visually appealing and user-friendly interface.

## Installation and Setup

To get started with this project, follow these steps:

### Prerequisites

Ensure you have the following installed on your machine:
- Node.js (LTS version recommended)
- npm (comes with Node.js) or Yarn

### Cloning the Repository

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/your-username/savante.git
    ```

2. Navigate into the project directory:

    ```bash
    cd savante
    ```

### Installing Dependencies

3. Install the required dependencies:

    ```bash
    npm install
    ```

   or if you are using Yarn:

    ```bash
    yarn install
    ```

### Running the Development Server

4. Start the development server:

    ```bash
    npm start
    ```

   or if you are using Yarn:

    ```bash
    yarn start
    ```

   The application will be available at `http://localhost:3000`.

### Building for Production

5. To create a production build, run:

    ```bash
    npm run build
    ```

   or if you are using Yarn:

    ```bash
    yarn build
    ```

   This will create a `build` directory with the production-ready files.

## Project Structure

- **src/**: Contains all the source code for the project.
  - **components/**: Reusable React components.
  - **pages/**: Page components for the landing page and sign-up forms.
  - **styles/**: CSS files for styling the components.
- **public/**: Contains static files such as `index.html` and `favicon.ico`.
- **package.json**: Lists the project dependencies and scripts.

## Pages and Components

### 1. Landing Page

- **Objective**: Introduce Savante and its services in a creative manner.
- **Design**: Clean, engaging, and informative layout that aligns with the brand image.

### 2. Brand Sign-Up Page (/signup/brand)

- **Details to Collect**:
  1. **Brand Name**: Input field for the brand's name.
  2. **Website URL**: Input field for the brand's website URL.
  3. **Niche/Industry**: Dropdown menu with categories (Fashion, Beauty, Health, Technology).
  4. **Company Size**: Dropdown menu (Startup, Small, Mid, Large).
  5. **Instagram Handle**: Input field for the brand's Instagram handle.
  6. **Brand Description**: Text area for describing the brand and its core values.

- **Example Prompt**: "Our brand, Acme Fashion, is dedicated to creating stylish, sustainable clothing for modern women..."

### 3. Influencer Sign-Up Page (/signup/influencer)

- **Details to Collect**:
  1. **Name**: Input field for the influencer's name.
  2. **Instagram Handle**: Input field for the influencer's Instagram handle.
  3. **Content Niche**: Dropdown menu for the influencer's content niche.
  4. **Followers Count**: Input field for the influencer's follower count.
  5. **Audience Description**: Text area for describing the audience's demographics and interests.

- **Example Prompt**: "The majority of my audience consists of women aged 18-34, primarily from New York City..."


## Contributing

We welcome contributions to improve this project. If you'd like to contribute, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Feel free to adjust any sections as needed to better fit your project's specific requirements or setup.
