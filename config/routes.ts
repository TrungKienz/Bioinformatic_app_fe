/**
 * @name umi
 * @description Only supports configuring paths, components, routes, redirects, wrappers, names, icons
 * @param path path only supports two placeholder configurations, the first is as a dynamic parameter :id, the second is a wildcard * and the wildcard can only appear at the end routing chain.
 * @param component Configure the path of the React component to be rendered after matching the location and the path. It can be an absolute path or a relative path, if it's a relative path it will start at src/pages。
 * @param routes Configure sub-routes, commonly used when you need to add layout elements to multiple paths.
 * @param redirect Configure routing jumps
 * @param wrappers Configure the routing component's encapsulation. Through the encapsulation component, more functionality can be incorporated into the existing routing component. For example, it can be used to verify permissions at the routing level
 * @param name Configure the title of the route. By default, the value of menu.xxxx in the internationalization file menu.ts is read. If the name is configured as login, the value of menu.login in menu.ts is read as the title.
 * @param icon https://ant.design/components/icon-cn
 * @doc https://umijs.org/docs/guides/routes
 */

import access from "@/access";

export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './User/Login',
      },
    ],
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    path: '/welcome',
    name: 'Giới thiệu',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/cancer',
    name: 'Ung thư',
    icon: '/icons/cancer_icon.png',
    access: 'canAdmin',
    routes: [
      {
        path: '/cancer',
      },
      {
        path: '/cancer/lung-cancer',
        name: 'Ung thư phổi',
        component: './CancerInformation',
      },
      {
        path: '/cancer/liver-cancer',
        name: 'Ung thư gan',
        component: './CancerInformation',
      },
      {
        path: '/cancer/breast-cancer',
        name: 'Ung thư vú',
        component: './CancerInformation',
      },
      {
        path: '/cancer/thyroid-cancer',
        name: 'Ung thư tuyến giáp',
        component: './CancerInformation',
      },
      {
        path: '/cancer/colorectal-cancer',
        name: 'Ung thư trực tràng',
        component: './CancerInformation',
      },
      {
        path: '/cancer/vietnamese-cancer',
        name: 'Thống kê tại Việt Nam',
        component: './CancerInformationPages/VietnameseCancer',
      },
    ],
  },

  {
    path: '/cancer',
    layout: false,
    access: 'canAdmin',
    hideInMenu: true,
    routes: [
      {
        path: '/cancer/vietnamese-cancer',
        name: 'Thống kê tại Việt Nam',
        component: './CancerInformationPages/VietnameseCancer',
      },
    ],
  },
  {
    path: '/tests',
    name: 'Xét nghiệm',
    icon: '/icons/tests_icon.jpg',
    access: 'canAdmin',
    component: './TestList',
  },
  {
    path: '/tests/:id',
    access: 'canAdmin',
    component: './DetailTest',
    hideInMenu: true,
  },
  {
    path: '/drug',
    name: 'Thông tin thuốc',
    icon: '/icons/drug_icon.jpg',
    access: 'canAdmin',
    component: './DrugInformation/drugInfor',
  },
  {
    path: '/drug/:id',
    access: 'canAdmin',
    component: './DrugInformation/articles',
    hideInMenu: true,
  },
  {
    name: 'Quản lý bệnh nhân',
    icon: '/icons/patient_icon.png',
    path: '/patient-management',
    access: 'canAdmin',
    routes: [
      {
        path: '/patient-management/patient-information',
        name: 'Thêm thông tin bệnh nhân',
        access: 'canAdmin',
        component: './PatientManagement',
      },
      {
        path: '/patient-management/patient-list',
        name: 'Danh sách bệnh nhân',
        access: 'canAdmin',
        component: '',
      },
    ],
  },
  {
    name: 'Gen và đột biến',
    icon: '/icons/gene_icon.png',
    path: '/gene-and-mutation',
    access: 'canAdmin',
    component: './GeneAndMutation/geneAndMutation',
  },
  {
    path: '/gene-and-mutation/:id',
    access: 'canAdmin',
    component: './GeneAndMutation/articles',
    hideInMenu: true,
  },
  {
    name: 'Bệnh án',
    path: 'health-record',
    access: 'canAdmin',
    icon: '/icons/health-record.jpg',
    routes:[
      {
        name: 'Bệnh án ung thư trực tràng ',
        // icon: 'https://icon-library.com/images/ef4d093f9d.png',
        path: '/health-record/conlorectal-cancer',
        component: './HealthRecord/ColorectalCancer',
      },
      {
        name: 'Bệnh án  ung thư phổi',
        // icon: 'https://icon-library.com/images/ef4d093f9d.png',
        path: '/health-record/lung-cancer',
        component: './HealthRecord/Detail',
      },
      {
        name: 'Bệnh án gan',
        // icon: 'https://icon-library.com/images/ef4d093f9d.png',
        path: '/health-record/liver-cancer',
        component: './HealthRecord/LiverCancer',
      },
    ]
  },
  {
    name: 'Cosmic Gene',
    icon: 'https://icon-library.com/images/ef4d093f9d.png',
    path: '/cosmic-gene',
    access: 'canAdmin',
    component: './GeneCosmic',
    routes: [
      {
        path: '/cosmic-gene/:gene',
        component: './GeneCosmic/geneDetail',
        hideInMenu: true,
      }
    ]
  },
  {
    name: 'Thông tin nhóm phát triển',
    icon: '',
    path: '',
    access: 'canAdmin',
    component: './Welcome',
  },
  {
    path: '*',
    layout: false,
    component: './404',
  },
];
