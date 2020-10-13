import React from 'react';
import CardContainer from './CardContainer';

function MainContainer({ characters, addToFavorites }) {
    return (
        <React.Fragment>
            <div className="main-container">
                <CardContainer 
                    characters={characters} 
                    addToFavorites={addToFavorites} 
                />
            </div>
        </React.Fragment>
    );
}

export default MainContainer;