import React from 'react'
import Card from './Card';

function CardContainer({ characters, addToFavorites }) {

    const displayCharacters = () => {
        return characters.map(character => {
            return (
                <Card 
                    key={character.id} 
                    character={character} 
                    addToFavorites={addToFavorites}
                />
            )
        })
    }
    
    return (
        <React.Fragment>
            <div className="card-container">
                {displayCharacters()}
            </div>
        </React.Fragment>
    );
}

export default CardContainer;