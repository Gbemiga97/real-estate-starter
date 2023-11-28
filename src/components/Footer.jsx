

const Footer = () => {
  return (
    <footer className="bg-black py-8 text-center text-white">
      <div className="container mx-auto">
        <small>
         Copyright &copy; {new Date().getFullYear()}. All rights reserved
        </small>
      </div>
    </footer>
  )
};

export default Footer;
