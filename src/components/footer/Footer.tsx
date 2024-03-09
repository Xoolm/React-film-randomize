import React from "react";
import footer from "./_Footer.module.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
const Footer = () => {
  return (
    <div className={footer.Wrapper}>
      <a
        className={footer.gitHub}
        target="_blank"
        href="https://github.com/Xoolm/React-film-randomize"
        rel="noreferrer"
      >
        <GitHubIcon className={footer.icon} />
      </a>
      <a
        className={footer.gmail}
        target="_blank"
        href="mailto:andreydunaev5@gmail.com"
        rel="noreferrer"
      >
        <AlternateEmailIcon className={footer.icon} />
      </a>
    </div>
  );
};

export default Footer;
