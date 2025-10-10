import { useState } from 'react';
import { fetchJoke } from './Fetch';

function Backend_test() {
    const [joke, setJoke] = useState('Click the button to get a joke!');
    const [loading, setLoading] = useState(false);

    const handleGetJoke = async () => {
        setLoading(true);
        const newJoke = await fetchJoke();
        setJoke(newJoke);
        setLoading(false);
    };

    return(
        <div className="test">
            <h2>Backend Test</h2>
            <p>Output: {joke}</p>
            <button onClick={handleGetJoke} disabled={loading}>
                {loading ? 'Loading...' : 'Get Joke'}
            </button>
        </div>
    );

}

export default Backend_test