import { h } from 'preact';
import { createContext } from 'preact';
import { useContext, useState } from 'preact/hooks';

const translations = {
  en: {
    actual: 'Actual',
    statistic: 'Statistic',
    device: 'Device',
    files: 'Files',
    measure: 'Measure',
    device_settings: 'Device',
    ethernet: 'Ethernet',
    wi_fi: 'Wi-fi',
    wi_fi_AP: 'Wi-fi (AP)',
    users: 'Users',
    service: 'Service',
    parameter: 'Parameter',
    service_factory: 'Service',
  },
  zh: {
    actual: '实际',
    statistic: '统计',
    device: '设备',
    files: '文件',
    measure: '测量',
    device_settings: '设备设置',
    ethernet: '以太网',
    wi_fi: 'Wi-fi',
    wi_fi_AP: 'Wi-fi (AP)',
    users: '用户',
    service: '服务',
    parameter: '参数',
    service_factory: '服务工厂',
  },
};

const TranslateContext = createContext({});

export const TranslateProviderNav = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const t = (key) => translations[language][key];

  return (
    <TranslateContext.Provider value={{ t, setLanguage }}>
      {children}
    </TranslateContext.Provider>
  );
};

export const useTranslate = () => useContext(TranslateContext);
