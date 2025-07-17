import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-4 mt-8 shadow-inner">
      <p className="text-sm">
        © {new Date().getFullYear()} Health Tracking App. Built with ❤️ by{' '}
        <a
          href="https://github.com/yashwanthmk11"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Yashwanth M K
        </a>
      </p>
    </footer>
  );
};

export default Footer;
