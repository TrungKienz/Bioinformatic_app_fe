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
  layout: 'top',
  contentWidth: 'Fixed',
  fixedHeader: true,
  fixSiderbar: true,
  colorWeak: false,
  title: 'Lab Bioinformatics',
  pwa: false,
  splitMenus: true,
  logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Logo_Hust.png',
  iconfontUrl: '',
};
// {
//   "navTheme": "light",
//   "colorPrimary": "#1890ff",
//   "layout": "top",
//   "contentWidth": "Fixed",
//   "fixedHeader": true,
//   "fixSiderbar": true,
//   "pwa": false,
//   "splitMenus": false,
//   "logo": "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
// }
export default Settings;
