import Link from "next/link";
import styled from "styled-components";

const Nav = styled.nav`
  align-items: center;
  color: white;
  display: flex;
  gap: auto;
  justify-content: space-between;
  text-wrap: balance;

  a {
    text-decoration: none;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
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
`;

const HomeLinkComponent = () => (
  <HomeLink href="/">
    <Icon src="/UniBandLogo-white.png" alt="UniBand Logo" />
    UniBand
  </HomeLink>
);

const Links = styled.ul.attrs({ role: "list" })`
  display: flex;
  flex-direction: row;
  font-size: 1.5rem;
  gap: 0.5rem;
  list-style-type: none;

  li {
    padding-inline: 1rem;
    transition: opacity 200ms ease;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export default function Navbar() {
  return (
    <Nav>
      <HomeLinkComponent />
      <Links>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/events">Events</Link>
        </li>
        <li>
          <Link href="/videos">Videos</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/join">Join Us</Link>
        </li>
      </Links>
    </Nav>
  );
}
