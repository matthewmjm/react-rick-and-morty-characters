import React from 'react';
import Card from './Card';

function Favorites(props) {
    const displayFavorites = () => {
        return props.favorites.map(character => {
            return (
                <Card 
                    key={character.id} 
                    character={character}  
                />
            )
        })
    }
    return (
        <>
            <section className="favorites">
                <ul>
                    {displayFavorites()}
                </ul>
            </section>
        </>
    );
    
}

export default Favorites;