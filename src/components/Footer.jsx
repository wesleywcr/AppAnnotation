import React from 'react';

function Footer() {
  const year = new Date();
  return (
    <footer>
      <p> copyright ©WesleyWcr {year.getFullYear()} </p>

    </footer>
  );
}

export default Footer;