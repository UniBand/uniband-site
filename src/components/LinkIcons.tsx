import styled from "styled-components";
import { EmailOutlined, YouTube } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const LinkIconsStyled = styled.div`
  display: flex;
  gap: 0.5rem;

  * {
    color: var(--background);
    height: 1.5rem;
    width: auto;
    transition: opacity 150ms ease;

    &:hover {
      opacity: 0.9;
  }
`;

export default function LinkIcons() {
  return (
    <LinkIconsStyled>
      <a href="https://www.instagram.com/uoa_uniband">
        <InstagramIcon />
      </a>
      <a href="https://www.facebook.com/UniBandNZ">
        <FacebookIcon />
      </a>
      <a href="https://www.youtube.com/channel/UCy_Eez7ZamDM31jOTRvqrWw">
        <YouTube />
      </a>
      <a href="mailto:info@uniband.nz">
        <EmailOutlined />
      </a>
    </LinkIconsStyled>
  );
}
