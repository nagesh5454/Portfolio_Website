const Footer = () => {
  const Year = new Date().getFullYear();
  return (
    <div className="bg-white text-center py-5">
      <p>&copy; {Year} Developed By - @Nagesh Mane   </p>
    </div>
  );
};

export default Footer;
