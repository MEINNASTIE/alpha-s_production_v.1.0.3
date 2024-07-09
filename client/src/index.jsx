// main routing system and website navigatior
// preact h and Fragment import leave it here
import { h, Fragment } from 'preact';
import { render } from 'preact';
import { Router } from 'preact-router';
import { TranslateProvider } from '@denysvuika/preact-translate';

import './style.css';
import './breakpoints.css';

import { Home } from './pages/Home/Home.jsx';
import { NotFound } from './pages/_404.jsx';
import { AlphaS } from './pages/Alpha-S/Alpha_S.jsx';
import { createHashHistory } from 'history';
import { Statistic } from './components/general/Main/Status_Statistic.jsx';
import DeviceWrapper from './components/general/Main/DeviceWrapper.jsx';
import { Files } from './components/general/Data/Files.jsx';
import { DeviceSettings } from './components/general/Settings/Device.jsx';
import { Measure } from './components/general/Settings/Measure.jsx';
import { Ethernet } from './components/general/Settings/Ethernet.jsx';
import { WiFi } from './components/general/Settings/Wi-Fi.jsx';
import { WiFiAP } from './components/general/Settings/Wi-Fi_AP.jsx';
import { Users } from './components/general/Settings/Users.jsx';
import { Service } from './components/general/Settings/Service.jsx';
import { Parameter } from './components/general/Factory/Parameter.jsx';
import { ServiceFactory } from './components/general/Factory/Service.jsx';
import { About } from './components/general/About/About.jsx';
import { ChamberAdminSystem } from './components/general/Factory/ParametersComps/ChamberAdminSystem.jsx';
import { ServiceLoadParameters } from './components/general/Factory/ParametersComps/ServiceLoadParameters.jsx';
import { InitializeFrontend } from './components/general/Factory/ServiceComps/InitializeFrontend.jsx';
import ActualStatusWrapper from './components/general/Main/ActualStatusWrapper.jsx';
import useNavStore from './components/store/navStore';
import useUserStore from './components/store/userStore';
import { useEffect } from 'preact/hooks';
import { TranslateProviderNav } from './components/hooks/translationSecondaryNav';

const history = createHashHistory();
export function App() {
  const { activePath } = useNavStore();
  const { initialize } = useUserStore();
  useEffect(() => {
    initialize(); 
}, []);

  return (
    <>
    <TranslateProvider lang="en" root="/assets/i18n">
      <TranslateProviderNav>
      <div className="background">
        <main style={{ fontFamily: 'CenturyGothic' }}>
          <Router history={history}>
            <Home path="/" />
            <AlphaS path="/alpha-s" />
              <ActualStatusWrapper path="/alpha-s/actual" />
              <Statistic path="/alpha-s/statistic" />
              <DeviceWrapper path="/alpha-s/device" />
              <Files path="/alpha-s/files" />
              <DeviceSettings path="/alpha-s/device-settings" />
              <Measure path="/alpha-s/measure" />
              <Ethernet path="/alpha-s/ethernet" />
              <WiFi path="/alpha-s/wi-fi" />
              <WiFiAP path="/alpha-s/wi-fi_AP" />
              <Users path="/alpha-s/users" />
              <Service path="/alpha-s/service" />
              <Parameter path="/alpha-s/parameter" />
              <ServiceFactory path="/alpha-s/service-factory" />
              <About path="/alpha-s/about"/>
              <ChamberAdminSystem path="/alpha-s/chamber_admin_config_flags"/>
              <ServiceLoadParameters path="/alpha-s/service-load-parameter"/>
              <InitializeFrontend path="/alpha-s/initialize-frontend"/>
              {/* Add a default route to handle unknown paths */}
              <ActualStatusWrapper default/>
            <NotFound default/>
          </Router>
        </main>
      </div>
      </TranslateProviderNav>
    </TranslateProvider>
    </>
  );
}

render(<App />, document.getElementById('app'));






