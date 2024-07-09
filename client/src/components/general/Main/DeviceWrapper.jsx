import { h, Fragment } from 'preact';
import { Device } from './Status_Device';
import { DeviceSecond } from './Status_Device_second';
import { HeaderAlpha } from '../../layout/Header_main';
import { FooterAlpha } from '../../layout/Footer_main';
import { MainNav } from '../../layout/Main_Nav';
import { SecondaryNav } from '../../layout/Secondary_Nav';
import useNavStore from '../../store/navStore';
const DeviceWrapper = () => {
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
        <Device />
        <DeviceSecond />
      </div>
    </div>
    <FooterAlpha />
  </>
  )
};

export default DeviceWrapper;