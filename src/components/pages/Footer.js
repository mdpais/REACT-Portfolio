import React from 'react';

const Footer = () => {
  return (
    <footer className="w-100 mt-auto bg-secondary p-1 footer">
      <div className="container text-center mt-2">
        <p>
        © 2023
        <a href="https://github.com/mdpais/"><img className="icon" src="./github.png"></img></a>
        <a href="https://www.linkedin.com/in/mdpais"><img className="icon" src="./linkedin.png"></img></a>
        <a href="https://www.facebook.com"><img className="icon" src="./fb.png"></img></a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
