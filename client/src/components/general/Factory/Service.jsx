import { h, Fragment } from 'preact';
import { Link } from 'preact-router';
import { useState } from 'preact/hooks';
import './factory.css';
import ArrowUp from '../../../assets/arrow-up-from-bracket-solid.svg';
import ArrowDown from '../../../assets/arrow-right-to-bracket-solid.svg';
import Lighting from '../../../assets/bolt-lightning-solid.svg';
import Recycle from '../../../assets/rotate-solid.svg';
import Network from '../../../assets/globe-solid.svg';
import useNavStore from '../../store/navStore';
import { HeaderAlpha } from '../../layout/Header_main';
import { MainNav } from '../../layout/Main_Nav';
import { SecondaryNav } from '../../layout/Secondary_Nav';
import { FooterAlpha } from '../../layout/Footer_main';
import { InitializeFrontend } from '../../modals/InitializeFrontEnd';

export function ServiceFactory() {
    const { setActiveNav } = useNavStore();
    const [isModalInitializeVisible, setIsModalInitializeVisible] = useState(false);

    const handleNavChange = (navItem) => {
      setActiveNav(navItem);
    }

    function saveToFile(parameterType) {
        try {
            const data = {
                parameterType: parameterType,
                value: "Mock value"
            };
            const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
            const a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            a.download = 'parameters.par';
            const reader = new FileReader();
            reader.onload = function(event) {
                a.href = event.target.result;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            };
            reader.readAsDataURL(blob);
        } catch (error) {
            console.error("Error occurred while saving file:", error);
        }
    }

    const handleFrontendInitialize = () => {
        setIsModalInitializeVisible(true);
    };

    const handleModalClose = () => {
        setIsModalInitializeVisible(false);
    };
    
    return (
       <>
       <HeaderAlpha />
        <div className="alpha_main">
            <MainNav onNavChange={handleNavChange} />
            <SecondaryNav />
        <div className="service_box_settings">
            <h3>Service functions</h3>
            <div className="service_flex">
                <div onClick={() => { saveToFile(); }}>
                   <ServiceFunction icon={ArrowUp} text="Save chamber parameters to file" href="/alpha-s/service-factory"/>  
                </div>
                <div onClick={() => { saveToFile(); }}>
                    <ServiceFunction icon={ArrowUp} text="Save frontend parameters to file" href="/alpha-s/service-factory"/>
                </div>
                <div>
                    <ServiceFunction icon={ArrowUp} text="Save all device parameters to file" href="/alpha-s/service-factory"/>
                </div>
                <div>
                    <ServiceFunction icon={ArrowDown} text="Load parameters from file" href="/alpha-s/service-load-parameter"/>
                </div>
                {isModalInitializeVisible  && <InitializeFrontend showModal={isModalInitializeVisible} onClose={handleModalClose}/>}
                <div onClick={handleFrontendInitialize}>
                    <ServiceFunction icon={Lighting} text="Initialize frontend" href="/alpha-s/initialize-frontend"/>
                </div>
                <div>
                    <ServiceFunction icon={Network} text="Default frontend parameter" 
                    href="/alpha-s/frontend_parameter"/>
                </div>
                <div>
                    <ServiceFunction icon={Recycle} text="Start firmware update" 
                    href="/alpha-s/firmware_update"/>
                </div>
            </div>
        </div>
        </div>
        <FooterAlpha />
        </>
    );
}
function ServiceFunction({ href, icon, text }) {
    const setActivePath = useNavStore(state => state.setActivePath);
    const setActiveNav = useNavStore(state => state.setActiveNav);

    const handleServiceClick = () => {
        setActiveNav('SERVICE');
        setActivePath(href);
    }

    return (
        <Link href={href} style={{ cursor: 'pointer' }} onClick={handleServiceClick}>
            <img src={icon} alt={text} />
            <p>{text}</p>
        </Link>
    );
}
 







