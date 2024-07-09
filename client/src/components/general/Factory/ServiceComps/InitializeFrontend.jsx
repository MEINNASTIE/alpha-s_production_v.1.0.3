import { h, Fragment } from 'preact';
import { useState } from 'preact/hooks';
import '../factory.css'
import { Exit } from '../../../buttons/Exit';
import { InitializeSuccess } from '../../../modals/SuccessFrontendInitialize';
import { useLocation } from 'preact-iso';
import useNavStore from '../../../store/navStore';
import { FooterAlpha } from '../../../layout/Footer_main';
import { HeaderAlpha } from '../../../layout/Header_main';
import { MainNav } from '../../../layout/Main_Nav';
import { SecondaryNav } from '../../../layout/Secondary_Nav';
import { SaveModals } from '../../../buttons/Save_modals';
import { Link } from 'preact-router';
export function InitializeFrontend() {
    const { url } = useLocation();
    // fake states 
    const [deviceMode, setDeviceMode] = useState('CH123456');
    const [deviceModePassword, setDeviceModePassword] = useState('1264528452');
    // fake states end
    const { setActiveNav } = useNavStore();

    const handleNavChange = (navItem) => {
        setActiveNav(navItem);
    }

    const [isModalSaveVisible, setIsModalSaveVisible] = useState(false);

    const handleDeviceModeChange = (event) => {
        setDeviceMode(event.target.value);
    };
    const handleDeviceModePasswordChange = (event) => {
        setDeviceModePassword(event.target.value);
    };

    const handleModalSaveClick = () => {
        setIsModalSaveVisible(true);
    };
    const handleModalSaveClose = () => {
        setIsModalSaveVisible(false);
    };

    return (
        <>
        <HeaderAlpha />
        <div className="alpha_main">
            <MainNav onNavChange={handleNavChange} />
            <div className="hidden">
               <SecondaryNav /> 
            </div>
        <div class="initialize_frontend_box">
            <h3>Initialize frontend</h3>
            <div>
            <form>
                <p>Frontend serial number</p>
                <input type="text" name="device_mode" id="wifi_name" class="text" value={deviceMode} onChange={handleDeviceModeChange}>
                </input>
                <p>Factory Password</p>
                <input type="password" name="device_mode" id="password_ssid" class="text" value={deviceModePassword} onChange={handleDeviceModePasswordChange}>
                </input>
            </form>
            </div>
            <div class="warning_special">
                <h3>Warning!!!</h3>
                <p>All frontend parameters will be overwritten with their default values.Are you sure you want to proceed?</p>
            </div>
            <div class="initialize_frontend_box_two">
                <div onClick={handleModalSaveClick}>
                <SaveModals />
                </div>
                {isModalSaveVisible && <InitializeSuccess showModal={isModalSaveVisible} onClose={handleModalSaveClose} />}
                <Link href="/alpha-s/service-factory" class={url == 'parameters' && 'active'}>
                <Exit />    
                </Link> 
            </div>
        </div>
        </div>
        <FooterAlpha />
        </>
    )
}