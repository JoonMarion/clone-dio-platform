import React, { useCallback, useState } from 'react';

const Teste4 = () => {
    const [name, setName] = useState('João');

    const handleChangeName = useCallback(() => {
        console.log('Alterou nome');
        setName((prev) => (prev === 'João' ? 'Maria' : 'João'));
        console.log(name);
    }, [name]);

    return (
        <>
            <div>
                <p>Nome: {name}</p>
                <button onClick={handleChangeName}>Trocar o nome</button>
            </div>
        </>
    );
};

export { Teste4 };
