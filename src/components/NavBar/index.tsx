import Link from 'next/link';

import { IconComponent } from '../Primitive/IconComponent'

import { Divider, GoogleButton, NavBar, NavButton, SearchbarContainer, SearchbarButton, SearchbarInput } from './styles';


export function NavBarComponent() {
   return (
    <NavBar>
        <Link href="/">
            <img src="/vercel.svg" alt="logo" />
        </Link>
        <NavButton>
            <h2>Lançamentos</h2>
        </NavButton>
        <NavButton>
            <h2>Gêneros</h2>
        </NavButton>
        <NavButton>
            <h2>Suas leituras</h2>
        </NavButton>
        <Divider/>
        <SearchbarContainer>
            <SearchbarInput type="text" />
            <SearchbarButton><IconComponent>search</IconComponent></SearchbarButton>
        </SearchbarContainer>
        <GoogleButton>
            <h2>Sign in with Google</h2>
        </GoogleButton>
    </NavBar>
   ) 
}