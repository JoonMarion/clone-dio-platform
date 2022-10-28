import styled, { css } from 'styled-components';

export const Container = styled.main`
    width: 100%;
    max-width: 80%;

    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Wrapper = styled.div`
    max-width: 300px;
`;

export const Column = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`;

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;

    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;
    color: #ffffff;
`;

export const TitleRegister = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;

    margin-bottom: 20px;
    line-height: 44px;
`;

export const SubtitleRegister = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;

    margin-bottom: 35px;
    line-height: 25px;
`;

export const SubtitleTerms = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;

    margin-bottom: 10px;
    line-height: 25px;
`;

export const HaveAccount = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;

    ${({ color }) => {
        if (color) {
            return css`
                color: ${color};
            `;
        }
    }}
`;

export const Link = styled.a`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: #23dd7a;
    text-decoration: none;

    &:hover {
        opacity: 0.7;
    }
`;
