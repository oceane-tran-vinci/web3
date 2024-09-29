import { useState } from 'react';
import './ClickCounter.css';

function ClickCounter({title, message}) {// Utilisation du destructuring pour extraire les props (dm ajout de titre et message en prop dc les ajouter dans les paramètres de la fonction)
  const [count, setCount] = useState(0);

  return (
    <div className="card">
        <h2>{title}</h2> {/* Affichage du titre reçu en props */}
        <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
        </button>
        {count >= 10 && <p>{message}</p>}{/* Affichage du message reçu en props si count est supérieur ou égal à 10 */}
    </div>
  );
}

export default ClickCounter;