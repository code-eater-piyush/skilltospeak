import './Header.css';
import logoImage from '../../assets/logo.jpg'; // Import your logo

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img 
          src={logoImage} 
          alt="Skill to Speak Logo" 
          className="logo-image"
        />
       
        <h1 className="brand-name">SKILL TO SPEAK</h1>
      </div>
      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Features</a>
        <a href="#">Early Access</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}

export default Header;