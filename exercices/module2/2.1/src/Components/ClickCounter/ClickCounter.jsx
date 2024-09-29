import { useState } from 'react';
import './ClickCounter.css';

function ClickCounter({title, message, hoverMessage}) {// Ajout du hoverMessage via les props
  const [count, setCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);  // Nouvel état pour savoir si la souris est sur le bouton

  // Gestionnaire lorsque la souris entre
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Gestionnaire lorsque la souris quitte
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="card">
        <h2>{title}</h2>

        {/* Affichage du message quand la souris est sur le bouton */}
        {isHovered && <p>{hoverMessage}</p>}

        <button 
            onClick={() => setCount((count) => count + 1)}
            onMouseEnter={handleMouseEnter}  // Déclenchement lorsque la souris entre
            onMouseLeave={handleMouseLeave}  // Déclenchement lorsque la souris quitte
        >
            count is {count}
        </button>
        {count >= 10 && <p>{message}</p>}
    </div>
  );
}

export default ClickCounter;