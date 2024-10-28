"use client";

import styled from "styled-components";

const NotFound = styled.div`
  margin-block: 5rem;
  padding-inline: var(--body-margins);
  text-align: center;

  h1 {
    background: linear-gradient(40deg, #00457d, #0096c5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 10rem;
    font-stretch: expanded;
    font-weight: 900;
  }

  h2 {
    font-size: 3rem;
  }
`;

export default function Custom404() {
  return (
    <NotFound>
      <h1>404</h1>
      <h2>Page Not Found</h2>
    </NotFound>
  );
}
