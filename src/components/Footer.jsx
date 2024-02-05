const Footer = () => {
  const Year = new Date().getFullYear();
  return (
    <div className="bg-white text-center py-5">
      <p>&copy; {Year} Ajith M. All Rights are Reserved</p>
    </div>
  );
};

export default Footer;
