import styled from "styled-components";

export const NavBar = styled.nav`
    display: flex;
    width: 100%;
    height: 3rem;
    gap: 0.2rem;
    background: #490061;
`;

export const NavButton = styled.button`
    border: 0;
    color: #fff;
    transition: filter 0.2s;
    background: #490061;
    :not(:disabled):hover {
        background: #A900E0;
        filter: brightness(0.9);
    }
`;

export const Divider = styled.div`
    flex: 1;
`;

export const GoogleButton = styled.button`
    border: 0;
    color: #fff;
    border-radius: 0.8rem;
    margin: 0.2rem; 
    background: #db4a39;
`;

export const SearchbarContainer = styled.div`
    display: flex;
    gap: 0.3rem;
    justify-content: center;
    align-items: center;
    margin: 0.5rem 0;
`;

export const SearchbarInput = styled.input`
    border: 0;
    background: #f1f0f0;
    border-radius: 0.8rem 0 0 0.8rem;
    height: 2rem;
    padding: 1rem 0.5rem
`;

export const SearchbarButton = styled.button`
    border: 0;
    font: 0;
    background: #A900E0;
    border-radius: 0 0.8rem 0.8rem 0;
    height: 2rem;
`;