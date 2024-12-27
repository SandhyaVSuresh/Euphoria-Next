"use client";

import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Page } from "../../app/Login/page";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const toggleLoginPopup = () => {
    setShowLogin(!showLogin);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    router.push("/");
  };

  return (
    <>
      <NavDiv>
        <HomeLink href="/">
          <Logoimg>
            <Image
              src="/logo.svg"
              alt="Logo"
              layout="responsive"
              width={100}
              height={50}
            />
          </Logoimg>
        </HomeLink>
        <NavUl isOpen={menuOpen}>
          <NavList href="/">Shop</NavList>
          <NavList href="/">Men</NavList>
          <NavList href="/">Women</NavList>
          <NavList href="/">Combos</NavList>
          <NavList href="/">Jogger</NavList>
        </NavUl>
        <SearchDiv>
          <SearchInput type="text" placeholder="Search" />
          <SearchImg>
            <Image
              src="/Navbar/search.svg"
              alt="search"
              layout="responsive"
              width={100}
              height={50}
            />
          </SearchImg>
        </SearchDiv>
        <RightDiv>
          {isLoggedIn ? (
            <>
              <RightLink href="/" aria-label="Wishlist">
                <Rightimg
                  onClick={handleLogout}
                  src="/Navbar/signOut.png"
                  alt="icons"
                />
              </RightLink>
              <RightLink href="/" aria-label="Account">
                <Rightimg src="/Navbar/wishlist.svg" alt="icons" />
              </RightLink>
              <RightLink href="/" aria-label="Cart">
                <Rightimg src="/Navbar/cart.svg" alt="icons" />
              </RightLink>
            </>
          ) : (
            <>
              <StyledLink onClick={toggleLoginPopup}>
                <Rightimg src="/Navbar/signIn.png" alt="icons" />
              </StyledLink>
              <StyledLink1 href="/">
                <Rightimg src="/Navbar/signUp.png" alt="icons" />
              </StyledLink1>
            </>
          )}
        </RightDiv>
        <MenuIcon onClick={toggleMenu}>
          <Image
            src="menu-dot.svg"
            alt="icons"
            layout="responsive"
            width={100}
            height={50}
          />
        </MenuIcon>
      </NavDiv>
      {showLogin && (
        <Page
          onClose={toggleLoginPopup}
          onLoginSuccess={() => {
            setIsLoggedIn(true);
            setShowLogin(false);
          }}
        />
      )}
    </>
  );
};

export default Navbar;

const StyledLink = styled.a`
  text-decoration: none;
  color: #3c4242;
  background-color: #fff;
  font-size: 16px;
  padding: 10px 15px;
  cursor: pointer;
  border: 1px solid #666666;
  &:hover {
    background-color:#666666;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
    padding: 6px 10px;
  }
`;

const StyledLink1 = styled(Link)`
  text-decoration: none;
  background-color: #fff;
  font-size: 16px;
  padding: 10px 15px;
  border: 1px solid #666666;
  cursor: pointer;
  &:hover {
    background-color: #666666;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
    padding: 6px 10px;
  }
`;
const RightDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-right: 1rem;
  @media (max-width: 1100px) {
    gap: 0;
  }
  @media (max-width: 900px) {
    // display: none;
  }
`;

const RightLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  background: rgba(246, 246, 246, 1);
  padding: 15% 10%;
  border-radius: 5px;
  @media (max-width: 1100px) {
    border-radius: 0px;
  }
  @media (max-width: 500px) {
    height: 18px;
  }
`;

const Rightimg = styled.img`
  width: 18px;
  height: 18px;
  @media (max-width: 500px) {
    width: 10px;
    height: 10px;
  }
`;

const MenuIcon = styled.div`
  display: none;
  width: 5px;
  cursor: pointer;
  @media (max-width: 700px) {
    display: block;
  }
  @media (max-width: 500px) {
    height: 17px;
  }
`;

const SearchDiv = styled.div`
  padding: 0.6% 1%;
  border-radius: 5px;
  display: flex;
  align-items: center;
  background: rgba(246, 246, 246, 1);
  @media (max-width: 400px) {
    width: 50vw;
  }
    @media (max-width: 380px) {
    width: 40vw;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 5px;
  border: none;
  outline: none;
  background: transparent;
`;

const SearchImg = styled.div`
  width: 20px;
  @media (max-width: 400px) {
    width: 15px;
  }
`;
const NavDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 1% 0;
  position: sticky;
  z-index: 2000;
  top: 0;
  background-color: #fff;
`;

const HomeLink = styled(Link)``;
const Logoimg = styled.div`
  position: relative;
  width: 100px;
  height: auto;
  @media (max-width: 500px) {
    width: 70px;
  }
`;
const NavUl = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 700px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    position: absolute;
    width: 250px;
    gap: 2rem;
    top: 58px;
    right: 0;
    flex-direction: column;
    background-color: #fff;
    padding: 1rem;
    z-index: 1000;
  }
    @media (max-width: 500px) {
    top: 40px;
  }
  @media (max-width: 400px) {
    top: 42px;
  }
`;

const NavList = styled(Link)`
  text-decoration: none;
  color: #333;
  font-size: 0.9rem;
  padding: 1% 2%;
  &:hover {
    font-weight: bold;
  }
  @media (max-width: 800px) {
    padding: 1%;
    font-size: 0.8rem;
  }
  @media (max-width: 700px) {
    padding: 0% 2%;
  }
`;
