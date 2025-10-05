import { useState } from 'react';

function Box() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div class="box">
            <img src="public/firework.svg" alt="fireworks" />
            <h1>The Site Is Working!</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <button onClick={handleClick}>Count: {count}</button>
            </div>
        </div>
    );
}

export default Box