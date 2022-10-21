import React, { useEffect, useState } from 'react';

const Teste2 = () => {
    const [name, setName] = useState('João');

    const handleChangeName = () => {
        setName((prev) => (prev === 'João' ? 'Pedro' : 'João'));
    };

    useEffect(() => {
        alert('Nome alterado');
    }, [name]);

    return (
        <>
            <div>
                <p>{name}</p>
            </div>
            <button onClick={handleChangeName}>Trocar o nome</button>
        </>
    );
};

export { Teste2 };
