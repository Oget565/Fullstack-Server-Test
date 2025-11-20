import { useState } from 'react';

function Box() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div className="box">
            <img src="/firework.svg" alt="fireworks" style={{ filter: 'invert(1)' }} />
            <h1>The Server Is Working!</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <button onClick={handleClick}>Count: {count}</button>
            </div>
        </div>
    );
}

export default Box