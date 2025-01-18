import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#333', color: 'white', textAlign: 'center', padding: '20px' }}>

      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Shashank Gautam. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
