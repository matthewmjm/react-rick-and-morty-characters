import React from 'react';
import CardContainer from './CardContainer';

function MainContainer({ characters }) {
    return (
        <React.Fragment>
            <div className="main-container">
                <h3>This is the Main Container Component</h3>
                <CardContainer characters={characters} />
            </div>
        </React.Fragment>
    );
}

export default MainContainer;