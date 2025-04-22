import '../css/Menu.css';
import { useContext } from 'react';
import { MenuContext } from './App';

export const links = [
  { name: 'Sobre mí', href: '#about' },
  { name: 'Experiencia', href: '#experience' },
  { name: 'Proyectos', href: '#projects' },
];

export default function Header() {
  const { hash, setHash } = useContext(MenuContext);

  return (
    <section id="menu">
      <div>
        <nav>
          <ul>
            {
              links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={hash === link.href ? 'active' : ''}
                    onClick={() => setHash(link.href)}
                  >
                    <div className='indicator'>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    {link.name}
                  </a>
                </li>
              ))
            }
          </ul>
        </nav>
      </div>
      <div>
        <a href="github">G</a>
        <a href="linkedin">L</a>
      </div>
    </section>
  )
}