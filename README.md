# MERN JobFinder App
# [Live](https://mern-jobfinder--delta.vercel.app/)

## Overview

The JobFinder App is a dynamic full-stack web application built using the MERN stack, designed to seamlessly connect job seekers (students) with recruiters. This user-friendly platform focuses on enabling students to apply for jobs and allowing recruiters to efficiently manage applications by accepting or rejecting them.The app provides robust features that cater to the needs of both students and recruiters, facilitating a smooth and effective job application and recruitment process.

## Tech Stack

#### Front-end

* React with Vite: Developed using React for a responsive and dynamic user interface, with Vite offering a speedy development experience.
* Redux for State Management: Manages the app's state efficiently, ensuring a consistent user experience across the application.
* Redux Persist: Saves the Redux store state across sessions, so users don’t lose their progress or settings.
* Tailwind CSS for Styling: Provides a flexible and modern approach to styling, allowing for a clean and intuitive UI.

#### Back-end

* The back-end server is built with Express.js and Node.js in MVC pattern, which provides completed REST APIs for data interaction.
* Integrated Cloudinary for handling file and image uploads, ensuring scalable and efficient media management.
* JSON Web Token (JWT) is used for signing in user and making authenticated requests.

#### DataBase

* MongoDB is used as the back-end database, which include different data models/schemas (i.e., User, Job,Company,Application).
* Mongoose is used to access the MongoDB for CRUD actions (create, read, update and delete).

## Project Outline

### 1. Set Up the Server
- Initialize the project and install necessary dependencies.
- Set up an Express server in Node.js.

### 2. Connect to MongoDB
- Establish a connection to MongoDB using Mongoose.
- Create a MongoDB database for the application.

### 3. Create Schemas and Models
- **User Schema/Model**: Define the schema for users, including fields for name, email, password, role (student or recruiter), and other relevant details.
- **Job Schema/Model**: Define the schema for job postings, including fields for title, description, company, location, salary, and more.
- **Company Schema/Model**: Define the schema for companies, including fields for company name, industry, location, and recruiter ID.
- **Application Schema/Model**: Define the schema for job applications, including fields for job ID, user ID, status (applied, accepted, rejected), and more.

### 4. Create Routes/API Endpoints
- **User Routes**: Handle user registration, login, profile updates, and authentication.
- **Job Routes**: Allow CRUD operations for job postings, and filtering and browsing of job listings.
- **Company Routes**: Enable recruiters to set up and manage their company profiles.
- **Application Routes**: Manage job applications, including applying for jobs, and updating the application status.

### 5. Implement Middlewares
- **Authentication Middleware**: Protect routes that require user authentication.
- **Role-Based Access Control Middleware**: Differentiate access between students and recruiters.

### 6. User Registration and Authentication
- Allow users to sign up as either a student or recruiter.
- Allow users to login after signup.

### 7. Job Listings and Filtering (No Login Required)
- Allow users to view job openings.
- Implement filtering options (e.g., by location, industry, salary) for job listings.

### 8. Job Application (Login Required)
- Allow users to apply for jobs after logging in.
- Store application details in the database.

### 9. Profile Management
- Allow users to update their profiles, including personal information and resume uploads.

### 10. Recruiter Features
- After logging in, recruiters can:
  - Set up their company profiles.
  - Post job openings.
  - Manage job applications (accept or reject applicants).
  - View applicant details.

### 11. Student Job Application Tracking
- Allow students to check the status of their applied jobs (e.g., pending, accepted, rejected) in their profiles.

## Set-Up Project in your machine

1. Fork the repo and clone it.
2. Create a new branch.
3. Make sure you have `npm` Node.js installed in your system. MongoAtlas is used, so no need for local MongoDB setup.
4. MongoAtlas Setup
Set up your .env file and paste in the URI that you get from MongoAtlas. Also set token secret to anything, it is used for jwt authentication.
   

```
MONGO_URI=mongodb+srv://<dbUser>:<password>@cluster0-m5jph.gcp.mongodb.net/test?retryWrites=true&w=majority
SECRET_KEY=your secret key

```
You need to remember to paste in the <dbUser> and <password>. Do NOT share it publicly, and do NOT include the .env file in commits.
5. To integrate Cloudinary for handling file and image uploads in your application, follow these steps:

   1. **Sign Up for Cloudinary**
       - Go to [Cloudinary](https://cloudinary.com/) and sign up for a free account.

   2. **Get Your Cloudinary Credentials**
      - After signing up, navigate to your Cloudinary dashboard.
      - Locate your **Cloud Name**, **API Key**, and **API Secret** in the dashboard.

   3. **Set Up Environment Variables**
     - Add the following lines to your `.env` file, replacing the placeholders with your actual Cloudinary credentials:
        ```
        CLOUD_NAME=your_cloud_name
        API_KEY=your_api_key
        API_SECRET=your_api_secret
         ```

6. open terminal run `cd backend && npm install`.
7. Open another terminal run ` cd frontend && npm install`(one for running Server and other for the frontend).
8. To run server, go to backend directory run `nodemon run dev` and to run client, go to frontend directory and run `npm run dev`.
9. Go to `http://localhost:3000` to see the application running.
10. Go to `http://localhost:5173 to see the frontend`.

 ## Deployment
   ### Deploying Backend on Render.com

### Prerequisites

Before deploying your backend, ensure you have the following:

- A Render.com account: Sign up at [Render.com](https://render.com/).
- Your backend project pushed to a Git repository (e.g., GitHub, GitLab).

### Deployment Steps

#### 1. Create a New Web Service on Render

1. Log in to your [Render.com dashboard](https://dashboard.render.com/).
2. Click on the **New** button in the top right corner and select **Web Service**.
3. Connect your GitHub or GitLab account to Render (if not done already).
4. Select the repository containing your backend code.

#### 2. Configure the Web Service

1. **Service Name**: Choose a name for your service (e.g., `job-finder-backend`).
2. **Environment**: Set to `Node`.
3. **Build Command**: Enter the command to build your project. If you are using npm: `npm install`.
4. **Start Command**:Enter the command to start your server:`nodemon run dev`.
5. **Region**: Select the region closest to your users.

#### 3. Set Up Environment Variables
1. Scroll down to the Environment section.
2. Click on Add Environment Variable.
3. Add all the environment variables required by your application (e.g., PORT, DATABASE_URL, JWT_SECRET, CLOUDINARY_CLOUD_NAME, etc.).

#### 4.Deploy the Service
1. After configuring your environment variables, scroll down and click Create Web Service.
2. Render will automatically build and deploy your backend.
3. Monitor the build logs for any errors.

#### 5. Access Your Deployed Backend
1. Once deployed, Render will provide you with a URL for your backend (e.g., https://job-finder-backend.onrender.com).
2. Use this URL to access your API endpoints.


  ### Deploying Frontend on Vercel

This guide provides step-by-step instructions for deploying your React frontend on Vercel.

### Prerequisites

Before deploying your frontend, ensure you have the following:

- A Vercel account: Sign up at [Vercel](https://vercel.com/signup).
- Your frontend project pushed to a Git repository (e.g., GitHub, GitLab, Bitbucket).

### Deployment Steps

#### 1. Import Your Project to Vercel

1. Log in to your [Vercel dashboard](https://vercel.com/dashboard).
2. Click on the **New Project** button.
3. Select the Git provider (GitHub, GitLab, Bitbucket) where your frontend repository is hosted.
4. Find and import the repository containing your frontend code.

#### 2. Configure the Project

1. **Project Name**: Vercel will automatically use your repository name as the project name. You can change it if needed.
2. **Framework Preset**: Vercel should automatically detect that you're using React. If not, select `React` from the list of frameworks.
3. **Root Directory**: If your project is not in the root directory of your repository, specify the correct directory.

#### 3. Set Up Environment Variables (If Required)

1. Scroll down to the **Environment Variables** section.
2. Click on **Add** to define any environment variables your frontend requires (e.g., API URLs, authentication tokens).
   - Example:
     ```plaintext
     REACT_APP_API_URL=https://api.your-backend.com
     ```
3. Make sure these environment variables match those used in your local development.

#### 4. Deploy the Project

1. Click the **Deploy** button.
2. Vercel will automatically build and deploy your project.
3. Monitor the deployment process through the Vercel dashboard. If successful, you will see a green checkmark.

#### 5. Access Your Deployed Frontend

- After deployment, Vercel will provide you with a URL for your frontend (e.g., `https://your-project-name.vercel.app`).
- Use this URL to access your deployed application.

#### 6. Set Up Custom Domain (Optional)

1. If you want to use a custom domain, go to your project’s settings on Vercel.
2. Under the **Domains** section, click **Add Domain**.
3. Follow Vercel’s instructions to link and configure your custom domain.

#### 7. Continuous Deployment

- Vercel will automatically redeploy your application whenever you push changes to the connected branch (e.g., `main`) in your Git repository.
- To configure or disable auto-deploys, adjust the settings in your project’s Vercel dashboard.

#### Troubleshooting

- **Build Failures**: Review the build logs in Vercel’s dashboard for specific error messages.
- **Environment Variables**: Ensure all necessary environment variables are correctly set in Vercel.
- **404 Errors**: If you're using React Router, make sure you have a `vercel.json` file with proper rewrites to handle client-side routing.

```
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```
- **CORS Issues**: Ensure your backend CORS settings allow requests from the Vercel frontend URL.
- **Environment Variables**: Verify that environment variables are correctly set in Vercel.
- **Proxy Configuration**: If using a proxy, ensure the proxy field in package.json points to the correct backend URL.
   

  
