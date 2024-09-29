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

export const subLinks = [
  {
    pageId: 100,
    page: "About",
    links: [
      { id: 1, label: "About Me", icon: <FaBook />, url: "/products" },
      { id: 2, label: "My Gear", icon: <FaBook />, url: "/products" },
      { id: 3, label: "My Process", icon: <FaBook />, url: "/products" },
      { id: 4, label: "Testimonials", icon: <FaBook />, url: "/products" },
    ],
  },
  {
    pageId: 200,
    page: "Rentals",
    links: [
      {
        id: 4,
        label: "DJI Inspire 3",
        icon: <FaBriefcase />,
        url: "/products",
      },
      {
        id: 5,
        label: "RED Komodo X",
        icon: <FaBriefcase />,
        url: "/products",
      },
    ],
  },
  {
    pageId: 300,
    page: "Prints",
    links: [
      {
        id: 6,
        label: "Print Creation Process",
        icon: <FaBriefcase />,
        url: "/products",
      },
      {
        id: 7,
        label: "Prints",
        icon: <FaBriefcase />,
        url: "/products",
      },
    ],
  },
  {
    pageId: 400,
    page: "Contact",
    links: [
      {
        id: 8,
        label: "Work with Me",
        icon: <FaBriefcase />,
        url: "/products",
      },
      {
        id: 9,
        label: "1 on 1 Coaching",
        icon: <FaBriefcase />,
        url: "/products",
      },
    ],
  },
];
