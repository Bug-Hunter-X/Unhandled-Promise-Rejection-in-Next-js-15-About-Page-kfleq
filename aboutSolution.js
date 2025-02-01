```javascript
// pages/aboutSolution.js
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function About() {
  const { data, error } = useSWR('/api/data', fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <h1>About Page</h1>
      <p>Data from API: {JSON.stringify(data)}</p>
    </div>
  );
}
```