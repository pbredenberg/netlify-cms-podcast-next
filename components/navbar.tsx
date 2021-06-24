import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='sticky' id='navbar'>
      <ul className={'nav'}>
        <li className={'nav__item'}>
          <Link href='/'>Home</Link>
        </li>
        <li className={'nav__item'}>
          <Link href='/about'>About</Link>
        </li>
        <li className={'nav__item'}>
          <Link href='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
