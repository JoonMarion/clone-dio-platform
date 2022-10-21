import React, { useMemo, useState } from 'react';

const Teste3 = () => {
    const [age, setAge] = useState(10);

    const handleChangeAge = () => {
        setAge((prev) => (prev === 10 ? 20 : 10));
    };

    const calculo = useMemo(() => {
        console.log('Calculou: ', age);
        return age * 2;
    }, [age]);

    console.log('Renderizou: ', calculo);

    return (
        <>
            <div>
                <p>{age}</p>
            </div>
            <button onClick={handleChangeAge}>Trocar a idade</button>
        </>
    );
};

export { Teste3 };
