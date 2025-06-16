import React, { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [apiUrl, setApiUrl] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleTest = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      const testUrl = `https://yhxzjyykdsfkdrmdxgho.supabase.co/functions/v1/junior-dev?url=${encodeURIComponent(apiUrl)}&email=${encodeURIComponent(email)}`;
      const response = await fetch(testUrl);
      const data = await response.json();
      setResult(data);
    } catch (err) {
      setResult({ error: 'Something went wrong.' });
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-xl">
        <h1 className="text-2xl font-bold mb-4 text-center">Junior Dev API Tester</h1>
        <form onSubmit={handleTest} className="space-y-4">
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="url"
            placeholder="Your API Endpoint URL"
            className="w-full px-4 py-2 border rounded-md"
            value={apiUrl}
            onChange={(e) => setApiUrl(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
          >
            {loading ? 'Testing...' : 'Test API'}
          </button>
        </form>

        {result && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold">Response:</h2>
            <pre className="mt-2 bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              {JSON.stringify(result, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
