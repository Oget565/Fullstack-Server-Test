// Function to fetch joke from Flask backend
export async function fetchJoke() {
    try {
        const response = await fetch('/api/request_joke');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return data.joke;
    } catch (error) {
        console.error('Error fetching joke:', error);
        return 'Failed to fetch joke. Make sure the backend is running!';
    }
}
