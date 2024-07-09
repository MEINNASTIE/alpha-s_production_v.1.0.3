import { h, Fragment } from 'preact';
import { useLocation } from 'preact-iso';
import { Link } from 'preact-router';
import Logo from '../../assets/Logo-Bertin-Technologies_White.png';
import QuestionMark from '../../assets/question-solid.svg';
import { BatteryStatus } from '../battery/Battery_Status';
import { Logout } from '../buttons/Log_Off';
import { useContext, useEffect, useState } from 'preact/hooks';
import useNavStore from '../store/navStore';
import { TranslateContext } from '@denysvuika/preact-translate';
import useUserStore from '../store/userStore';
export function FooterAlpha() {
  const { url } = useLocation();
  const { t } = useContext(TranslateContext);
  const setActiveNav = useNavStore(state => state.setActiveNav);
  const setActivePath = useNavStore(state => state.setActivePath);
  const { user } = useUserStore(state => state); 
  const [activeButton, setActiveButton] = useState('');

  const handleAboutClick = () => {
    setActiveNav('ABOUT');
    setActivePath('/alpha-s/about'); 
    setActiveButton('about');
  };

  return (
    <footer class="footer_main">
      <div class="about_section">
        <Link href="/alpha-s/about" onClick={handleAboutClick}>
          <button class={activeButton === 'about' ? 'active' : ''}>
            {t('about')}
          <img src={QuestionMark} alt="question_mark" />
          </button>
        </Link>
        <BatteryStatus />
      </div>
      <div class="logo_user">
      <div class="user_footer_show">
        <p>
         {t('username')}: {user ? user : 'Loading...'}
        </p>
        <a href="/" class={url == 'log-out' && 'active'}>
         <Logout />
        </a>
      </div>
      <img src={Logo} alt="Bertin_logo" class="bertin_logo"/>
      </div>
    </footer>
  );
}
