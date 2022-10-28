import React from 'react';
import { ButtonContainer } from './styles';
import { IButton } from './types';

const Button = ({ title, variant = 'primary', onClick, margin = '0px' }: IButton) => {
    return (
        <ButtonContainer variant={variant} onClick={onClick} margin={margin}>
            {title}
        </ButtonContainer>
    );
};

export { Button };
