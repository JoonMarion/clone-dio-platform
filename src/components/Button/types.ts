export interface IButton {
    title: string;
    variant?: string;
    onClick?: () => void;
    type?: string;
    margin?: string;
}

export interface IButtonStyled {
    variant: string;
    margin: string;
}
