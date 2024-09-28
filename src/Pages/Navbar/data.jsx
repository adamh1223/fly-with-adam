import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaShoppingCart,
  FaCreditCard,
  FaBook,
  FaBriefcase,
} from "react-icons/fa";


export const links = [
  {
    id: 1,
    url: "/",
    text: "Work",
  },
  {
    id: 2,
    url: "/about",
    text: "about",
  },
  {
    id: 3,
    url: "/services",
    text: "services",
  },
  {
    id: 4,
    url: "/rentals",
    text: "rentals",
  },
  {
    id: 5,
    url: "/prints",
    text: "prints",
  },
  {
    id: 6,
    url: "/stock",
    text: "stock footage",
  },
  {
    id: 7,
    url: "/contact",
    text: "contact",
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.twitter.com",
    icon: <FaInstagram />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaShoppingCart />,
  },
];

export const sublinks = [
  {
    page: "about",
    links: [
      { label: "About Me", icon: <FaBook />, url: "/products" },
      { label: "My Gear", icon: <FaBook />, url: "/products" },
      { label: "My Process", icon: <FaBook />, url: "/products" },
    ],
  },
  {
    page: "rentals",
    links: [
      { label: "DJI Inspire 3", icon: <FaBriefcase />, url: "/products" },
      { label: "RED Komodo X", icon: <FaBriefcase />, url: "/products" },
    ],
  },
  {
    page: "prints",
    links: [
      { label: "Print Creation Process", icon: <FaBriefcase />, url: "/products" },
      { label: "Prints", icon: <FaBriefcase />, url: "/products" },
    ],
  },
];
