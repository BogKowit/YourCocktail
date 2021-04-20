import { LinkTo, LinkWrapper } from "../../assets/Login.style";

export const ButtonRounded = ({ icon, text, link }) => {
  return (
    <LinkWrapper>
      {icon ? icon : null}
      <LinkTo to={link}>{text}</LinkTo>
    </LinkWrapper>
  );
};
