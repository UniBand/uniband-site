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
    height: 6rem;
    width: auto;
`;

const HomeLink = () => (
    <Link href="/">
        <Icon src="/UniBandLogo.png" alt="UniBand Logo" />
    </Link>
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
    gap: 1rem;
    list-style-type: none;
`;

export default function Navbar() {
    return (
        <Nav>
            <HomeLink />
            <LinkGroup>
                <Links>
                    <li>
                        <Link href="/about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            Contact
                        </Link>
                    </li>
                </Links>
            </LinkGroup>
        </Nav>
    );
}