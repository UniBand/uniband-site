"use client"

import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const StyledHeader = styled.header`
    background: linear-gradient(40deg, #00457D, #0096C5);
    display: flex;
    flex-direction: column;
    padding-block: 2rem;
    padding-inline: 5rem;

    a {
        color: inherit;
        text-decoration: none;
    }
    `;

const HeaderContent = styled.div`
	inline-size: 100%;
	margin-inline: auto;
	padding-inline: 1rem;
`;

interface HeaderProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function Header({ children, ...props }: HeaderProps) {
	return (
		<StyledHeader {...props}>
            <Navbar />
			<HeaderContent>
				{children}
			</HeaderContent>
		</StyledHeader>
	);
}