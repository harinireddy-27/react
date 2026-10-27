import React from 'react';

function NameList() {
    const names = ['Harini', 'Reddy', 'Dwarampudi'];

    return (
        <div>
            {names.map((name) => (
                <h2 key={name}>{name}</h2>
            ))}
        </div>
    );
}

export default NameList;