import { h, Fragment } from 'preact';
import { useContext } from 'preact/hooks';

import StatusIcon from '../../assets/wave-square-solid.svg';
import DataIcon from '../../assets/folder-open-regular.svg';
import SettingsIcon from '../../assets/gear-solid.svg';
import '../../pages/Alpha-S/alpha_s.css';
import FactoryIcon from '../../assets/industry-solid.svg'
import useNavStore from '../store/navStore';
import { TranslateContext } from '@denysvuika/preact-translate';
import useUserStore from '../store/userStore';
export function MainNav() {
  const { setActiveNav, activeNav } = useNavStore();
  const { t } = useContext(TranslateContext);
  const { role } = useUserStore(state => state);

  const handleNavClick = (navItem) => {
      setActiveNav(navItem);
  };

  return (
    <div class="main_nav">
      <button 
          className={activeNav === 'STATUS' ? 'active' : ''}
          onClick={() => handleNavClick('STATUS')}
      >
        {t('status')}
        <img src={StatusIcon} alt="status_icon" />
      </button>
      <button 
        className={activeNav === 'DATA' ? 'active' : ''}
        onClick={() => handleNavClick('DATA')}
      >
        {t('data')}
        <img src={DataIcon} alt="data_icon" />
      </button>
      <button 
        className={activeNav === 'SETTINGS' ? 'active' : ''}
        onClick={() => handleNavClick('SETTINGS')}
      >
        {t('settings')}
        <img src={SettingsIcon} alt="settings_icon" />
      </button>
      {role === 2 && (
        <button
          className={`${activeNav === 'FACTORY' ? 'active' : ''}`}
          onClick={() => handleNavClick('FACTORY')}
        >
          {t('factory')}
          <img src={FactoryIcon} alt="factory_icon" />
        </button>
      )} 
    </div>
  );
}


