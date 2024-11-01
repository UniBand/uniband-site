"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import styled from "styled-components";
import Link from "next/link";

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const GradientBackground = styled.div`
  background: var(--blue-gradient);
  box-shadow: 0 4px 5px 1px rgba(0, 0, 0, 0.15);
  padding-block: 1.5rem;
  padding-inline: var(--body-margins);
  position: relative;
  z-index: 2;
`;

const Nav = styled.nav`
  align-items: center;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  position: relative;
  z-index: 10;

  a {
    text-decoration: none;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

const NavHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Icon = styled.img`
  height: 4rem;
  width: auto;
`;

const HomeLink = styled.a`
  align-items: center;
  display: flex;
  font-size: 3rem;
  font-stretch: expanded;
  font-weight: 700;
  gap: 1rem;
  text-decoration: none;

  @media (max-width: 1200px) {
    font-size: 0; /* Hides text on mobile */
    gap: 0; /* Removes extra gap for centering the icon */
  }
`;

const HomeLinkComponent = () => (
  <Link href="/" passHref>
    <HomeLink>
      <Icon src="/UniBandLogo-white.png" alt="UniBand Logo" />
      UniBand
    </HomeLink>
  </Link>
);

const links = [
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/videos", label: "Videos" },
  { href: "/contact", label: "Contact" },
  { href: "/join", label: "Join Us" },
];

const LinksList = styled.ul`
  display: flex;
  flex-direction: row;
  font-size: 1.5rem;
  gap: 0.5rem;
  list-style-type: none;

  li {
    margin-inline: 1rem;
    transition: opacity 200ms ease;
    width: max-content;

    &:hover {
      opacity: 0.8;
    }
  }

  @media (max-width: 1200px) {
    display: none; /* Hide regular links on mobile */
  }
`;

interface LinksTrayProps {
  isOpen: boolean;
}

const LinksTray = styled.div<LinksTrayProps>`
  background-color: var(--dark-blue);
  display: flex;
  flex-direction: column;
  left: 0;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")}; /* Fade effect */
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 100%;
  transition: opacity 0.3s ease;
  z-index: 1;

  ul {
    font-size: 1.5rem;
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
      text-align: center;

      a {
        display: block; /* Make the link cover the entire li */
        color: white;
        text-decoration: none;
        padding: 1rem; /* Add padding to the link */
        width: 100%; /* Ensure it fills the li */
        height: 100%; /* Ensure it fills the li */
      }

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

const HamburgerButton = styled.button`
  display: none;
  font-size: 2rem;
  color: white;

  @media (max-width: 1200px) {
    display: block;
  }
`;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: Need to change when pathname changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <StyledHeader>
      <GradientBackground>
        <Nav>
          <NavHeader>
            <HomeLinkComponent />
            <HamburgerButton onClick={toggleMenu} aria-label="Toggle menu">
              ☰
            </HamburgerButton>
          </NavHeader>
          <LinksList>
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </LinksList>
        </Nav>
      </GradientBackground>
      <LinksTray isOpen={menuOpen}>
        <ul>
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </LinksTray>
    </StyledHeader>
  );
}
