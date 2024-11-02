import styled from "styled-components";
import { EmailOutlined, YouTube } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Givealittle from "./icons/GiveALittle";
import { UniBandConfig } from "@/config";

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
  const { instagram, facebook, youTubeChannelId, email, givealittle } =
    UniBandConfig;

  return (
    <LinkIconsStyled>
      <a href={instagram} target="_blank" rel="noreferrer">
        <InstagramIcon />
      </a>
      <a href={facebook} target="_blank" rel="noreferrer">
        <FacebookIcon />
      </a>
      <a
        href={`https://www.youtube.com/channel/${youTubeChannelId}`}
        target="_blank"
        rel="noreferrer"
      >
        <YouTube />
      </a>
      <a href={givealittle} target="_blank" rel="noreferrer">
        <Givealittle />
      </a>
      <a href={`mailto:${email}`}>
        <EmailOutlined />
      </a>
    </LinkIconsStyled>
  );
}
