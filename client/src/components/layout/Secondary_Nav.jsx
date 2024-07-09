import { h, Fragment } from 'preact';
import { route } from 'preact-router';
import { useState, useEffect } from 'preact/hooks';
import useNavStore from '../store/navStore';
import { useTranslate } from '../hooks/translationSecondaryNav';
export function SecondaryNav() {
  const { options, activePath, activePathLabel, setActivePath } = useNavStore();
  const [isOpen, setIsOpen] = useState(false);
  const {t} = useTranslate();

  useEffect(() => {
    console.log('Active Path changed:', activePath);
    if (activePath) {
      route(activePath);
    }
  }, [activePath]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    setActivePath(option.path, t(option.key));
    // route(option.path);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-toggle">
        {activePathLabel}
      </button>
      <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
        {options.map(option => (
          <li key={option.path} className="dropdown-item">
            <button href={option.path} onClick={() => handleOptionClick(option)}>
              {t(option.key)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}





