import { h, Fragment } from 'preact';
import { useLocation } from 'preact-iso';
import { Exit } from '../../../buttons/Exit';
import '../factory.css';
import { SaveModals } from '../../../buttons/Save_modals';
import useNavStore from '../../../store/navStore';
import { HeaderAlpha } from '../../../layout/Header_main';
import { MainNav } from '../../../layout/Main_Nav';
import { SecondaryNav } from '../../../layout/Secondary_Nav';
import { FooterAlpha } from '../../../layout/Footer_main';
import { useState } from 'preact/hooks';
import { SaveSuccess } from '../../../modals/Warning_three';
export function ChamberAdminSystem() {
  const { url } = useLocation();
  const { setActiveNav } = useNavStore();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleNavChange = (navItem) => {
      setActiveNav(navItem);
  }

  const handleModalClick = () => {
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };
  
  return (
        <>
        <HeaderAlpha />
        <div className="alpha_main">
            <MainNav onNavChange={handleNavChange} />
            <div className="hidden">
              <SecondaryNav/>
            </div>
        <div class="parameters_box">
            <div>
               <p>Chamber linear correction factors</p>
               <p>2008h</p> 
            </div>
            <table>
               <thead></thead>
               <tbody>
                  <tr>
                    <td>1</td>
                    <td>1.000</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>1.001</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>0.650</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>0.234</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>0.843</td>
                  </tr>
               </tbody>
            </table>
            <div>
                {/* change afterwards with actual data */}
                <p>Min: 0.1</p>
                <p>Max: 2.0</p>
                <p>Unit: --</p>
            </div>
            <div>
                <div onClick={handleModalClick}>
                <SaveModals />
                </div>
                <a href="/alpha-s/parameter" class={url == 'parameters' && 'active'}>
                <Exit /> 
                </a>
            </div>
        </div>
        </div>
        <FooterAlpha />
        {isModalVisible && <SaveSuccess showModal={isModalVisible} onClose={handleModalClose} />}
        </>
    )
}