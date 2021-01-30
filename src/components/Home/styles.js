import styled from 'styled-components';

import containerBg from '../../assets/bg.svg';

export const Container = styled.div`
    width: 100vw;
    max-width: 100%;
    height: auto;
    background: url(${containerBg}) no-repeat;
    padding: 0 15% 10% 15%;
`;

export const NavBar = styled.nav`
    padding: 1rem 0;
    display : flex;
    justify-content: space-between;
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 72px;
        height: 72px;
        margin-right: 1rem;
    }

    h1 {
        color: #505050;
        font-size: 2.2rem;
        font-weight: 400;
    }
`;

export const Links = styled.ul`
    display: flex;
    align-items: center;
    height: 72px;

    a {
        color: #717784;
    }
`;

export const Item = styled.li`
    font-size: 1.8rem;
    font-weight: 500;
    margin-right: 3rem;

    :last-child {
        margin-right: 0;
    }
`;

export const ButtonContact = styled.button`
    color: #fff;
    background-color: #9B9BCA;
    padding: 2rem 5rem;
    border-radius: 10px;
    cursor: pointer;
`;

export const Presentation = styled.div`
    margin-top: 17rem;
    height: auto;
    max-width: 75%;

    h1 {
        font-size: 5rem;
        color: #696A86;
        font-weight: 400;
        font-family: 'DM Serif Display', serif;
        margin-bottom: 2.5rem;
        max-width: 75%;
    }

    p {
        font-size: 1.8rem;
        color: #696A86;
        font-weight: 400;
        margin-bottom: 2.5rem;
    }
`;

export const ButtonGetStarted = styled(ButtonContact)``;
