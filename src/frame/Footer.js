import React from 'react';
import './Footer.css'; 

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      &copy; {currentYear} DBC Machine INC
    </footer>
  );
};