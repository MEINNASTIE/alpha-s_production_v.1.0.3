// Main state management for the navigation bar 
// Documentation refer https://docs.pmnd.rs/zustand/getting-started/introduction

import { create } from 'zustand';

const statusOptions = [
    { key: 'actual', path: '/alpha-s/actual' }, 
    { key: 'statistic', path: '/alpha-s/statistic' },
    { key: 'device', path: '/alpha-s/device' },
];

const dataOptions = [
    { key: 'files', path: '/alpha-s/files' },
];

const settingsOptions = [
    { key: 'measure', path: '/alpha-s/measure' },
    { key: 'device_settings', path: '/alpha-s/device-settings' }, 
    { key: 'ethernet', path: '/alpha-s/ethernet' },
    { key: 'wi_fi', path: '/alpha-s/wi-fi' },
    { key: 'wi_fi_AP', path: '/alpha-s/wi-fi_AP' },
    { key: 'users', path: '/alpha-s/users' },
    { key: 'service', path: '/alpha-s/service' },
];

const factoryOptions = [
    { key: 'parameter', path: '/alpha-s/parameter' },
    { key: 'service_factory', path: '/alpha-s/service-factory' },
];

const aboutOptions = [
    { key: 'about', path: '/alpha-s/about' }
];

const useNavStore = create((set) => ({
    activeNav: 'STATUS',
    options: statusOptions,
    activePathLabel: statusOptions[0].key,
    activePath: statusOptions[0].path,
    
    setActiveNav: (navItem) => {
        let options;
        switch (navItem) {
            case 'STATUS':
                options = statusOptions;
                break;
            case 'DATA':
                options = dataOptions;
                break;
            case 'SETTINGS':
                options = settingsOptions;
                break;
            case 'FACTORY':
                options = factoryOptions;
                break;
            case 'ABOUT':
                options = aboutOptions;
                break;
            default:
                return;
        }
         
        setTimeout(() => {
            set(state => {  
                const activeOption = options.find(option => option.path === state.activePath) || options[0];
                return {
                    ...state,
                    activeNav: navItem, 
                    options, 
                    activePathLabel: activeOption.key, 
                    activePath: activeOption.path  
                };
            });
        }, 100);
    },
    setActivePath: (path, label) => {
        set({ activePath: path, activePathLabel: label });
    },
}));

export default useNavStore;






