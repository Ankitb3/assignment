const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="text-center">
          © {new Date().getFullYear()} Movie App. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
