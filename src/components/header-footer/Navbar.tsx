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
  transition: opacity 200ms ease;

  &:hover {
    opacity: 0.9;
  }
`;

const HomeLinkComponent = () => (
  <HomeLink href="/">
    <Icon src="/UniBandLogo.png" alt="UniBand Logo" />
    UniBand
  </HomeLink>
);

const LinkGroup = styled.div`
  align-items: end;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-inline-start: auto;
`;

const Links = styled.ul.attrs({ role: "list" })`
  display: flex;
  flex-direction: row;
  font-size: 1.5rem;
  gap: 1.5rem;
  list-style-type: none;

  li {
    padding-inline: 1rem;
    transition: opacity 200ms ease;

    &:hover {
      opacity: 0.9;
    }
  }
`;

export default function Navbar() {
  return (
    <Nav>
      <HomeLinkComponent />
      <LinkGroup>
        <Links>
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
      </LinkGroup>
    </Nav>
  );
}
