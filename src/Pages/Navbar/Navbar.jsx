import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { links, social, subLinks } from "./data";
import logo from "../../assets/svg/logo.svg";
import "./Navbar.css";
import Submenu from "./Submenu";
import { useGlobalContext } from "./Context";

export const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [submenuVisible, setSubmenuVisible] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const { openSidebar, setPageId } = useGlobalContext();

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  const handleSubmenu = (e) => {
    const targetText = e.target.textContent.toLowerCase();
    const matchedSubLink = subLinks.find(
      (item) => item.page.toLowerCase() === targetText
    );

    if (matchedSubLink) {
      setPageId(matchedSubLink.pageId);
      setSubmenuVisible(true); // Show the submenu
    } else {
      setPageId(null);
      setSubmenuVisible(false); // Hide the submenu
    }
  };

  const handleMouseLeave = () => {
    setSubmenuVisible(false); // Hide submenu when mouse leaves navbar
  };

  return (
    <nav onMouseLeave={handleMouseLeave}>
      <div className="nav-center">
        <div className="nav-header">
          <a href="/">
            <img src={logo} className="logo" alt="logo" />
          </a>

          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id} onMouseEnter={handleSubmenu}>
                  <a href={url} className="hover-underline-animation">
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <Submenu visible={submenuVisible} /> {/* Pass visibility as a prop */}
    </nav>
  );
};
