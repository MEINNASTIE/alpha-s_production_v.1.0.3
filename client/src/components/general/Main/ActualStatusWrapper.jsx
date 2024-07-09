import { h, Fragment } from 'preact';
import { ActualStatus } from './Actual_Status';
import { ActualStatusSecond } from './Actual_Status_second';
import { HeaderAlpha } from '../../layout/Header_main';
import { MainNav } from '../../layout/Main_Nav';
import useNavStore from '../../store/navStore';
import { SecondaryNav } from '../../layout/Secondary_Nav';
import { FooterAlpha } from '../../layout/Footer_main';
const ActualStatusWrapper = () => {
  const { setActiveNav } = useNavStore();

  const handleNavChange = (navItem) => {
    console.log('Navigation changed to:', navItem);
    setActiveNav(navItem);
  }
  return (
    <>
     <HeaderAlpha />
      <div className="alpha_main">
        <MainNav onNavChange={handleNavChange} />
        <SecondaryNav/>
        <div className="alpha_status_table">
          <ActualStatus />
          <ActualStatusSecond />
          {/* The Example Component here only serves a purpose of testing, don't forget to import*/}
          {/* <ExampleComponent /> */}
        </div>
      </div>
      <FooterAlpha />
    </>
  );
};

export default ActualStatusWrapper;
