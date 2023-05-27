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
        routes: [
          {
            path:'/cancer/lung-cancer'
          },
          {
            path: '/cancer/lung-cancer/overview',
            name: 'Tổng quan',
            component: './CancerInformation'
          },
          {
            path: '/cancer/lung-cancer/epidemiology',
            name: 'Dịch tễ',
            component: './CancerInformationPages/VietnameseCancer'
          },
          {
            path: '/cancer/lung-cancer/gene-mutation',
            name: 'Gene đột biến',
            component: './GeneAndMutation/geneAndMutation'
          },
          {
            path: '/cancer/lung-cancer/drug',
            name: 'Thuốc điều trị',
            component: './DrugInformation/drugInfor',
          },
          {
            path: '/cancer/lung-cancer/other-treatment',
            name: 'Các điều trị khác',
            component: './Admin.tsx'
          },
        ]
      },
      {
        path: '/cancer/liver-cancer',
        name: 'Ung thư gan',
        routes: [
          {
            path:'/cancer/liver-cancer'
          },
          {
            path: '/cancer/liver-cancer/overview',
            name: 'Tổng quan',
            component: './CancerInformation'
          },
          {
            path: '/cancer/liver-cancer/epidemiology',
            name: 'Dịch tễ',
            component: './CancerInformationPages/VietnameseCancer'
          },
          {
            path: '/cancer/liver-cancer/gene-mutation',
            name: 'Gene đột biến',
            component: './GeneAndMutation/geneAndMutation'
          },
          {
            path: '/cancer/liver-cancer/drug',
            name: 'Thuốc điều trị',
            component: './DrugInformation/drugInfor',
          },
          {
            path: '/cancer/liver-cancer/other-treatment',
            name: 'Các điều trị khác',
            component: './Admin.tsx'
          },
        ]
      },
      {
        path: '/cancer/breast-cancer',
        name: 'Ung thư vú',
        routes: [
          {
            path:'/cancer/breast-cancer'
          },
          {
            path: '/cancer/breast-cancer/overview',
            name: 'Tổng quan',
            component: './CancerInformation'
          },
          {
            path: '/cancer/breast-cancer/epidemiology',
            name: 'Dịch tễ',
            component: './CancerInformationPages/VietnameseCancer'
          },
          {
            path: '/cancer/breast-cancer/gene-mutation',
            name: 'Gene đột biến',
            component: './GeneAndMutation/geneAndMutation'
          },
          {
            path: '/cancer/breast-cancer/drug',
            name: 'Thuốc điều trị',
            component: './DrugInformation/drugInfor',
          },
          {
            path: '/cancer/breast-cancer/other-treatment',
            name: 'Các điều trị khác',
            component: './Admin.tsx'
          },
        ]
      },
      {
        path: '/cancer/thyroid-cancer',
        name: 'Ung thư tuyến giáp',
        routes: [
          {
            path:'/cancer/thyroid-cancer'
          },
          {
            path: '/cancer/thyroid-cancer/overview',
            name: 'Tổng quan',
            component: './CancerInformation'
          },
          {
            path: '/cancer/thyroid-cancer/epidemiology',
            name: 'Dịch tễ',
            component: './CancerInformationPages/VietnameseCancer'
          },
          {
            path: '/cancer/thyroid-cancer/gene-mutation',
            name: 'Gene đột biến',
            component: './GeneAndMutation/geneAndMutation'
          },
          {
            path: '/cancer/thyroid-cancer/drug',
            name: 'Thuốc điều trị',
            component: './DrugInformation/drugInfor',
          },
          {
            path: '/cancer/thyroid-cancer/other-treatment',
            name: 'Các điều trị khác',
            component: './Admin.tsx'
          },
        ]
      },
      {
        path: '/cancer/colorectal-cancer',
        name: 'Ung thư trực tràng',
        routes: [
          {
            path: '/cancer/colorectal-cancer/overview',
            name: 'Tổng quan',
            component: './CancerInformation'
          },
          {
            path: '/cancer/colorectal-cancer/epidemiology',
            name: 'Dịch tễ',
            component: './CancerInformationPages/VietnameseCancer'
          },
          {
            path: '/cancer/colorectal-cancer/gene-mutation',
            name: 'Gene đột biến',
            component: './GeneAndMutation/geneAndMutation'
          },
          {
            path: '/cancer/colorectal-cancer/drug',
            name: 'Thuốc điều trị',
            component: './DrugInformation/drugInfor',
          },
          {
            path: '/cancer/colorectal-cancer/other-treatment',
            name: 'Các điều trị khác',
            component: './Admin.tsx'
          },
        ]
      },
    ],
  },
  {
    path: '/cancer',
    access: 'canAdmin',
    layout: false,
    hideInMenu: true,
    routes: [
      {
        path: '/cancer/vietnamese-cancer',
        hideInMenu: true,
        component: './CancerInformationPages/VietnameseCancer',
      },
    ],
  },
  {
    path: '/tests',
    name: 'Xét nghiệm',
    icon: '/icons/tests_icon.jpg',
    access: 'canAdmin',
    routes: [
      {
        path:'/tests'
      },
      {
        path: '/tests/test-list',
        name: 'Danh sách xét nghiệm',
        component: './TestList'
      },
      {
        path: '/tests/add-test',
        name: 'Thêm mới xét nghiệm',
        component: './Admin.tsx'
      },
    ]
  },
  {
    path: '/tests/:id',
    access: 'canAdmin',
    component: './DetailTest',
    hideInMenu: true,
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
    name: 'Quản lý bệnh án',
    icon: '/icons/health-record.png',
    path: '/health-record/:typeHealthRecord',
    component: './HealthRecord/',
  },
  {
    name: 'Bệnh án ung thư trực tràng',
    icon: 'https://icon-library.com/images/ef4d093f9d.png',
    path: '/health-record/conlorectal-record/:id',
    component: './HealthRecord/ColorectalCancer',
    hideInMenu: true,
  },
  {
    name: 'Bệnh án ung thư phổi',
    icon: 'https://icon-library.com/images/ef4d093f9d.png',
    path: '/health-record/lung-record/:id',
    component: './HealthRecord/LungCancer',
    hideInMenu: true,
  },
  {
    name: 'Bệnh án ung thư gan',
    icon: 'https://icon-library.com/images/ef4d093f9d.png',
    path: '/health-record/liver-record/:id',
    component: './HealthRecord/LiverCancer',
    hideInMenu: true,
  },
  {
    name: 'Bệnh án NC-K Giáp',
    icon: 'https://icon-library.com/images/ef4d093f9d.png',
    path: '/health-record/thyroid-record/:id',
    component: './HealthRecord/ThyroidCancer',
    hideInMenu: true,
  },
  {
    name: 'Bệnh án NC-K Vú',
    icon: 'https://icon-library.com/images/ef4d093f9d.png',
    path: '/health-record/breast-record/:id',
    component: './HealthRecord/BreastCancer',
    hideInMenu: true,
  },

  {
    path: '/gene-and-mutation/:id',
    access: 'canAdmin',
    component: './GeneAndMutation/articles',
    hideInMenu: true,
  },
  // {
  //   name: 'Cosmic Gene',
  //   icon: 'https://icon-library.com/images/ef4d093f9d.png',
  //   path: '/cosmic-gene',
  //   access: 'canAdmin',
  //   component: './GeneCosmic',
  //   routes: [
  //     {
  //       path: '/cosmic-gene/:gene',
  //       component: './GeneCosmic/geneDetail',
  //       hideInMenu: true,
  //     },
  //   ],
  // },
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
