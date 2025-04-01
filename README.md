<!-- # X Clone

## Overview
X Clone is a modern social media platform inspired by Twitter (X), built with Next.js, TypeScript, Prisma, and Clerk. This project focuses on authentication, database management, and real-time interactions.

## Features
- User authentication with Clerk
- Database management with Prisma and PostgreSQL
- Secure and scalable backend with Next.js API Routes
- Real-time interactions (likes, comments, follows)
- Image and video uploads
- Dark mode support

## Tech Stack
- **Frontend:** Next.js, TypeScript, Tailwind CSS
- **Backend:** Next.js API Routes, Prisma, PostgreSQL
- **Authentication:** Clerk
- **Storage:** Cloudinary (for media uploads)
- **Deployment:** Vercel

## Installation

### Prerequisites
- Node.js (v18+ recommended)
- PostgreSQL database
- Clerk account
- Cloudinary account (for media storage)

### Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/x-clone.git
   cd x-clone
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add the following:
   ```env
   DATABASE_URL=your_postgresql_database_url
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   ```
4. Push Prisma schema to the database:
   ```bash
   npx prisma migrate dev --name init
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```

## Usage
- Visit `http://localhost:3000`
- Sign in using Clerk authentication
- Create and interact with posts

## Deployment
This project is optimized for deployment on Vercel. To deploy:
1. Push your code to GitHub.
2. Connect the GitHub repository to Vercel.
3. Set up environment variables in Vercel settings.
4. Deploy with a single click!

## Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.

## License
MIT License
 -->
