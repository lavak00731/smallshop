import { useId } from "react";
import { colorPalette } from "../../styles/colorPalette";
import {media } from "../../styles/breakpoints";
import { fontStack } from "../../styles/fontStack";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";


const HeaderNav = styled.header`
  width: 100%; 
  color: ${colorPalette.black};
  background: ${colorPalette.orange};
  font-family: ${fontStack.titles};
  font-size: 1.85rem;
  line-height: 1;  
`  

const HeaderInner = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding:1rem;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const NavContainer = styled.nav`
  font-size: 1rem;
  position: absolute;
  top: 62px;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 0.5s ease-out;
  transition-behavior: allow-discrete;
  ${media.md} {
    position: static;
    width: auto;
  }
`
const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background: ${colorPalette.orange};
  width: 100%;
  padding: 1rem;
  ${media.md} {
    flex-direction: row;
    padding:0;
  }
`
const StyledLink = styled(Link)`
  color: ${colorPalette.white};
  background: ${colorPalette.black};
  padding: 1rem 1.5rem;
  display: block;
  font-weight: 700;
  text-decoration: none;
  max-width: 10rem;
  margin: 0 auto;
  text-align: center;
  border-radius: 0.25rem;
  border: 2px solid transparent;
  &:hover,
  &:focus-visible {
    color: ${colorPalette.black};
    background: ${colorPalette.white};
    border-color: ${colorPalette.black};
  }
`
const ShowHideBtn = styled.button`
  color: ${colorPalette.white};
  background: ${colorPalette.black};
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: 0;
  border-radius: 0.25rem;
 ${media.md} {
    display: none;
    &[aria-expanded="false"] + nav {
      display: flex!important;
      opacity: 1;
    }
  }
  &[aria-expanded="false"] + nav {
    display: none;
  }
  &[aria-expanded="true"] + nav {
    opacity: 1;
  }
  
`

export const Nav = () => {
  const idAttr = useId();
  const auth = useSelector((state:RootState) => state.auth);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const expanded = btn.getAttribute('aria-expanded') === 'true' || false;
    btn.setAttribute('aria-expanded', (!expanded).toString());
  }
  return (
    <HeaderNav>
      <HeaderInner>
        <Link to={'/'}>Site Logo</Link>    
        <ShowHideBtn type="button" aria-expanded='false' aria-controls={idAttr+'_nav'} onClick={handleClick}>Menu</ShowHideBtn>
        <NavContainer id={idAttr+'_nav'}>
         { (auth.isLogged) 
          ? (
            <NavList>
              <li>
                <StyledLink to={'/'}>Home</StyledLink>
              </li>
              <li>
                <StyledLink to={'/user'}>User</StyledLink>
              </li>
              <li>
                <StyledLink to={'/favourites'}>Favourites</StyledLink>
              </li>
          </NavList>            
          )
          :(
            <NavList>
              <li>
                <StyledLink to={'/'}>Home</StyledLink>
              </li>
              <li>
                <StyledLink to={'/create-user'}>Create User</StyledLink>
              </li>
              <li>
                <StyledLink to={'/login'}>Login</StyledLink>
              </li>
            </NavList>
          ) }
        </NavContainer>
      </HeaderInner>      
    </HeaderNav>
  )
}
