// import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

interface HeaderProps {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
  onClick: () => void;
}
export default function Header({ menu, onClick }: HeaderProps) {

  return (
    <>
      <header>
        <Link to="/">The Planets</Link>
        <FontAwesomeIcon
          icon={menu ? faTimes : faBars}
          onClick={onClick}
          className="menu-icon"
        />
      </header>
      <hr className="header-hr" />
    </>
  );
}
