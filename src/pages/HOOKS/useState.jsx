import React, { useState } from 'react';

const Teste = () => {
    const [name, setName] = useState('João');

    const handleChangeName = () => {
        setName((prev) => (prev === 'João' ? 'Maria' : 'João'));
    };

    return (
        <>
            <div>
                <p>{name}</p>
            </div>
            <button onClick={handleChangeName}>Trocar o nome</button>
        </>
    );
};

export { Teste };
