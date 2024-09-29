import { useState, useEffect } from 'react';
import './ClickCounter.css';

function ClickCounter({title, message, hoverMessage}) {
 // Lire la valeur initiale depuis localStorage ou 0 si localStorage est vide
  const getInitialCount = () => {
    const savedCount = JSON.parse(localStorage.getItem("count"));
    return savedCount || 0;
  };

  const [count, setCount] = useState(getInitialCount());  // Utilisation de la fonction pour initialiser l'état
  const [isHovered, setIsHovered] = useState(false);

  // Utilisation du useEffect pour mettre à jour localStorage après chaque changement de "count"
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);  // Ce useEffect se déclenchera à chaque fois que "count" change

  // Gestionnaire pour incrémenter le compteur
  const handleCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="card">
        <h2>{title}</h2>

        {isHovered && <p>{hoverMessage}</p>}

        <button 
            onClick={handleCount} // Appel de handleCount lors du clic
            onMouseEnter={() => setIsHovered(true)}  // Déclenchement lorsque la souris entre
            onMouseLeave={() => setIsHovered(false)} // Déclenchement lorsque la souris quitte
        >
            count is {count}
        </button>
        {count >= 10 && <p>{message}</p>}
    </div>
  );
}

export default ClickCounter;