import { h, Fragment } from 'preact';
import { useContext, useState } from 'preact/hooks';
import './settings.css';

import ArrowUp from '../../../assets/arrow-up-from-bracket-solid.svg';
import ArrowDown from '../../../assets/arrow-right-to-bracket-solid.svg';
import Brush from '../../../assets/brush-solid.svg';
import Lighting from '../../../assets/bolt-lightning-solid.svg';
import Recycle from '../../../assets/rotate-solid.svg';
import Network from '../../../assets/globe-solid.svg';
import Return from '../../../assets/arrow-rotate-right-solid.svg';

import { ClearDataMemory } from '../../modals/ClearDataMemory';
import { InitializeDataMemory } from '../../modals/InitializeDataMemory';
import { FirmwareUpdate } from '../../modals/FirmwareUpdate';
import { DefaultSettings } from '../../modals/DefaultSettings';
import useNavStore from '../../store/navStore';
import { HeaderAlpha } from '../../layout/Header_main';
import { MainNav } from '../../layout/Main_Nav';
import { SecondaryNav } from '../../layout/Secondary_Nav';
import { FooterAlpha } from '../../layout/Footer_main';
import { TranslateContext } from '@denysvuika/preact-translate';

export function Service() {
    const [isModalClearVisible, setIsModalClearVisible] = useState(false);
    const [isModalInitializeVisible, setIsModalInitializeVisible] = useState(false);
    const [isModalFirmwareVisible, setIsModalFirmwareVisible] = useState(false);
    const [isModalSettingsVisible, setIsModalSettingsVisible] = useState(false);
    const [isModalResetVisible, setIsModalResetVisible] = useState(false);
    const { setActiveNav } = useNavStore();
    const { t } = useContext(TranslateContext);

    const handleNavChange = (navItem) => {
        setActiveNav(navItem);
    }

    const handleClearClick = () => {
        setIsModalClearVisible(true);
    };

    const handleInitializeClick = () => {
        setIsModalInitializeVisible(true);
    };

    const handleFirmwareClick = () => {
        setIsModalFirmwareVisible(true);
    };

    const handleSettingsClick = () => {
        setIsModalSettingsVisible(true);
    };

    const handleResetClick = () => {
        setIsModalResetVisible(true);
    };

    const handleModalClose = () => {
        setIsModalClearVisible(false);
        setIsModalInitializeVisible(false);
        setIsModalFirmwareVisible(false);
        setIsModalSettingsVisible(false);
        setIsModalResetVisible(false);
    };

    return (
        <>
       <HeaderAlpha />
        <div className="alpha_main">
            <MainNav onNavChange={handleNavChange} />
            <SecondaryNav />
            <div className="service_box">
                <h3>{t('service_functions')}</h3>
                <div className="service_flex">
                    <div>
                        <img src={ArrowUp} alt="ArrowUp" />
                        <p>{t('save_settings_to_file')}</p>
                    </div>
                    <div>
                        <img src={ArrowDown} alt="ArrowDown" className="arrow_down" />
                        <p>{t('load_settings_from_a_file')}</p>
                    </div>
                    <div onClick={handleClearClick}>
                        <img src={Brush} alt="Brush"/>
                        <p>{t('clear_data_memory')}</p>
                    </div>
                    {isModalClearVisible && <ClearDataMemory showModal={isModalClearVisible} onClose={handleModalClose} />}
                    <div onClick={handleInitializeClick}>
                        <img src={Lighting} alt="Lighting" />
                        <p>{t('initialize_data_memory')}</p>
                    </div>
                    {isModalInitializeVisible && <InitializeDataMemory showModal={isModalInitializeVisible} onClose={handleModalClose} />}
                    <div onClick={handleFirmwareClick}>
                        <img src={Recycle} alt="Recycle" />
                        <p>{t('start_firmware_update')}</p>
                    </div>
                    {isModalFirmwareVisible && <FirmwareUpdate showModal={isModalFirmwareVisible} onClose={handleModalClose} />}
                    <div onClick={handleSettingsClick}>
                        <img src={Network} alt="Network" />
                        <p>{t('default_settings')}</p>
                    </div>
                    {isModalSettingsVisible && <DefaultSettings showModal={isModalSettingsVisible} onClose={handleModalClose} />}
                    <div onClick={handleResetClick}>
                        <img src={Return} alt="Return" />
                        <p>{t('reset_alpha-s')}</p>
                    </div>
                    {isModalResetVisible && <DefaultSettings showModal={isModalResetVisible} onClose={handleModalClose} />}
                </div>
            </div>
        </div>
        <FooterAlpha />
        </>
    );
}
