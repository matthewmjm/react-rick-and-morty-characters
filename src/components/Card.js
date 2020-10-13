import React from 'react';

function Card({ character, addToFavorites, removeFavorite }) {

    function handleClick() {
        if(addToFavorites) {
            addToFavorites(character)
        }
        else{
            removeFavorite(character)
        }
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