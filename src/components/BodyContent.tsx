import styled from "styled-components";

export const BodyContent = styled.div`
  align-items: start;
  margin-top: 2rem;
  padding-inline: var(--body-margins);

  b {
    font-weight: 700;
  }

  a {
    color: var(--hyperlink);
    transition: opacity 200ms ease;

    &:hover {
      opacity: 0.8;
    }
  }
`;
