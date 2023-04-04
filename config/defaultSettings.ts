import { ProLayoutProps } from '@ant-design/pro-components';

/**
 * @name
 */
const Settings: ProLayoutProps & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  colorPrimary: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: true,
  fixSiderbar: true,
  colorWeak: false,
  title: 'Lab Bioinformatics',
  pwa: false,
  splitMenus: false,
  breadcrumbRender: false,
  logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Logo_Hust.png',
  iconfontUrl: '',
};
export default Settings;
