import React from 'react';

function Card({ character, addToFavorites }) {

    function handleClick() {
        addToFavorites(character)
    }

    return (
        <>
            <div className="card" onClick={handleClick}>
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