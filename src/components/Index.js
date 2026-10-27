import React from 'react';

function Index() {
    const names = ['Harini', 'Reddy', 'Dwarampudi'];

    return (
        <div>
            {names.map((name, index) => (
                <h2 key={index}>{index}: {name}</h2>
            ))}
        </div>
    );
}

export default Index;