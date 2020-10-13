import React from 'react';

function Card({ character }) {
    return (
        <>
            <div className="card">
                <h3>{character.name}</h3>
                <img src={character.image} alt={character.name}/>
                <p>Status: {character.status}</p>
                <p>Species: {character.species}</p>
                <p>Gender: {character.gender}</p>
            </div>
        </>  
    );
}

export default Card;  