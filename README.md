# Unhandled Promise Rejection in Next.js 15 About Page

This repository demonstrates a common error in Next.js 15 applications where an unhandled promise rejection occurs due to not awaiting an asynchronous operation within a component's rendering logic.  The About page fetches data from an API route but doesn't wait for the response, causing an error.

## Steps to Reproduce

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.
4. Navigate to `/about`.
5. Observe the error in the console.

## Solution

The solution involves using `async/await` to properly handle the asynchronous fetch call. The corrected code is provided in `aboutSolution.js`.