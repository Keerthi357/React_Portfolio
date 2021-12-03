import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Facebook, LinkedIn, Github } from "../components/AllSvgs";
import { DarkTheme } from "../components/Theme";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-item: center;
  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;
const Line = styled.span`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
`;
const SocialIcons = (props) => {
  return (
    <Icons>
      <div>
        <NavLink
          style={{ color: `inherit` }}
          target="_blank"
          to={{ pathname: "https://www.facebook.com/" }}
        >
          <Facebook
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </NavLink>
      </div>
      <div>
        <NavLink
          style={{ color: `inherit` }}
          target="_blank"
          to={{ pathname: "https://github.com/Keerthi357" }}
        >
          <Github
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </NavLink>
      </div>
      <div>
        <NavLink
          style={{ color: `inherit` }}
          target="_blank"
          to={{ pathname: "https://www.linkedin.com/in/keerthii" }}
        >
          <LinkedIn
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </NavLink>
      </div>
      <Line color={props.theme} />
    </Icons>
  );
};
export default SocialIcons;
