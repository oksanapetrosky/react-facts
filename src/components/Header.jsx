import reactLogo from '../assets/react-logo.png'

function Header() {
  return (
    <header className='header'>

      <nav>
        <img src={reactLogo} alt="React logo" />
        <span >ReactFacts</span>
      </nav>

    </header>

  );
}

export default Header;