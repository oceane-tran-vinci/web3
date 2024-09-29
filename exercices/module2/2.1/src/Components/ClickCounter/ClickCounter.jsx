import { useState } from 'react';
import './ClickCounter.css';

function ClickCounter() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  );
}

export default ClickCounter;