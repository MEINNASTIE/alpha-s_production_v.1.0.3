import { h, Fragment } from 'preact';
import { route } from 'preact-router';
import '../../pages/Alpha-S/alpha_s.css';

import { MainNav } from '../../components/layout/Main_Nav';
import { SecondaryNav } from '../../components/layout/Secondary_Nav';
import useNavStore from '../../components/store/navStore';
import { HeaderAlpha } from '../../components/layout/Header_main';
import { FooterAlpha } from '../../components/layout/Footer_main';
import { createHashHistory } from 'history';
import ActualStatusWrapper from '../../components/general/Main/ActualStatusWrapper';
import useUserStore from '../../components/store/userStore';
import { AdminChangePassword } from '../../components/modals/Admin_Change_Pass';

const history = createHashHistory();
export function AlphaS() {
  const { setActiveNav } = useNavStore();
  const { user, passwordChanged } = useUserStore();

  const handleNavChange = (navItem) => {
    const firstSubNavPath = '/alpha-s/' + navItem.toLowerCase();
    setActiveNav(navItem);
    route(firstSubNavPath);
  };

  return (
    <>
      <HeaderAlpha />
      <div className="alpha_main">
        <MainNav onNavChange={handleNavChange} userRole={user ? user.role : null} />
        {!passwordChanged && <AdminChangePassword />}
        <SecondaryNav />
        <div className="alpha_status_table">
          <ActualStatusWrapper />
        </div>
      </div>
      <FooterAlpha />
    </>
  );
}
