import { Link } from 'react-router-dom';
import './header.scss';

export default function Header() {
  return (
    <header className='header __container'>
      <section className='hamburger_menu '>
        <input id='menu__toggle' type='checkbox' />
        <label className='menu__btn ' htmlFor='menu__toggle'>
          <span></span>
        </label>
        <ul className='menu__box'>
          <Link className='link' underline='hover' color='inherit' to='/'>
            <li>
              <div className='menu__item'>
                HOME
              </div>
            </li>
          </Link>
          <Link className='link' underline='hover' color='inherit' to='concept'>
            <li>
              <div className='menu__item'>
                Concept
              </div>
            </li>
          </Link>
          <Link className='link' underline='hover' color='inherit' to='decor'>
            <li>
              <div className='menu__item'>
                Decor
              </div>
            </li>
          </Link>
          <Link className='link' underline='hover' color='inherit' to='gallery'>
            <li>
              <div className='menu__item'>
                Gallery
              </div>
            </li>
          </Link>

          <Link className='link' underline='hover' color='inherit' to='contacts'>
            <li>
              <div className='menu__item'>
                Сontacts
              </div>
            </li>
          </Link>
          <Link className='link' underline='hover' color='inherit' to='admin'>
            <li>
              <div className='menu__item'>
                Admin
              </div>
            </li>
          </Link>
        </ul>
      </section>
    </header>
  );
}
