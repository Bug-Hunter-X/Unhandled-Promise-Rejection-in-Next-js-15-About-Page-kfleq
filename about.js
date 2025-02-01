```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <Link href='/about'>
        <a>Go to About</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause an error because the fetch call is not awaited.
  const data = fetch('/api/data');
  return (
    <div>
      <h1>About Page</h1>
      {/* This will render undefined because data is not resolved yet */}      <p>Data from API: {JSON.stringify(data)}</p>
    </div>
  );
}
```
```javascript
// pages/api/data.js

export default async function handler(req, res) {
  // Simulate an API call
  await new Promise(resolve => setTimeout(resolve, 500));
  res.status(200).json({ message: 'Data from API' });
}
```