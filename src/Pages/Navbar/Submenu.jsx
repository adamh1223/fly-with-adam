import React from "react";
import { useGlobalContext } from "./Context";
import { subLinks } from "./data";
import "./Navbar.css";

const Submenu = ({ visible }) => {
  const { pageId } = useGlobalContext();
  const currentPage = subLinks.find((item) => item.pageId === pageId);

  return (
    <div
      className={currentPage && visible ? "submenu show-submenu" : "submenu"}
    >
      <h5>{currentPage?.page}</h5>
      <div
        className="submenu-links"
        style={{
          gridTemplateColumns:
            currentPage?.links?.length > 3 ? "1fr 1fr" : "1fr",
        }}
      >
        {currentPage?.links?.map((link) => {
          const { id, url, label, icon } = link;
          return (
            <a key={id} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Submenu;
