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
    icon: 'https://cdn-icons-png.flaticon.com/512/2925/2925854.png',
    access: 'canAdmin',
    routes: [
      {
        path: '/cancer',
      },
      {
        path: '/cancer/lung-cancer',
        name: 'Ung thư phổi',
        component: './Admin',
        routes: [
          {
            path: '/cancer/lung-cancer',
            redirect: '/cancer/lung-cancer/top20',
          },
          {
            path: '/cancer/lung-cancer/top20',
            name: 'Top 20 gen',
            component: './Welcome',
          },
          {
            path: '/cancer/lung-cancer/mutated-genes',
            name: 'Gen đột biến',
            component: './Welcome',
          },
          {
            path: '/cancer/lung-cancer/normal-genes',
            name: 'Gen không đột biến',
            component: './Welcome',
          },
        ],
      },
      {
        path: '/cancer/liver-cancer',
        name: 'Ung thư gan',
        component: './Admin',
        routes: [
          {
            path: '/cancer/liver-cancer',
            redirect: '/cancer/liver-cancer/top20',
          },
          {
            path: '/cancer/liver-cancer/top20',
            name: 'Top 20 gen',
            component: './Welcome',
          },
          {
            path: '/cancer/liver-cancer/mutated-genes',
            name: 'Gen đột biến',
            component: './Welcome',
          },
          {
            path: '/cancer/liver-cancer/normal-genes',
            name: 'Gen không đột biến',
            component: './Welcome',
          },
        ],
      },
      {
        path: '/cancer/breast-cancer',
        name: 'Ung thư vú',
        component: './Admin',
        routes: [
          {
            path: '/cancer/breast-cancer',
            redirect: '/cancer/breast-cancer/top20',
          },
          {
            path: '/cancer/breast-cancer/top20',
            name: 'Top 20 gen',
            component: './Welcome',
          },
          {
            path: '/cancer/breast-cancer/mutated-genes',
            name: 'Gen đột biến',
            component: './Welcome',
          },
          {
            path: '/cancer/breast-cancer/normal-genes',
            name: 'Gen không đột biến',
            component: './Welcome',
          },
        ],
      },
      {
        path: '/cancer/thyroid-cancer',
        name: 'Ung thư tuyến giáp',
        component: './Admin',
        routes: [
          {
            path: '/cancer/thyroid-cancer',
            redirect: '/cancer/thyroid-cancer/top20',
          },
          {
            path: '/cancer/thyroid-cancer/top20',
            name: 'Top 20 gen',
            component: './Welcome',
          },
          {
            path: '/cancer/thyroid-cancer/mutated-genes',
            name: 'Gen đột biến',
            component: './Welcome',
          },
          {
            path: '/cancer/thyroid-cancer/normal-genes',
            name: 'Gen không đột biến',
            component: './Welcome',
          },
        ],
      },
      {
        path: '/cancer/colorectal-cancer',
        name: 'Ung thư trực tràng',
        component: './Admin',
        routes: [
          {
            path: '/cancer/colorectal-cancer',
            redirect: '/cancer/colorectal-cancer/top20',
          },
          {
            path: '/cancer/colorectal-cancer/top20',
            name: 'Top 20 gen',
            component: './Welcome',
          },
          {
            path: '/cancer/colorectal-cancer/mutated-genes',
            name: 'Gen đột biến',
            component: './Welcome',
          },
          {
            path: '/cancer/colorectal-cancer/normal-genes',
            name: 'Gen không đột biến',
            component: './Welcome',
          },
        ],
      },
    ],
  },
  {
    path: '/test',
    name: 'Xét nghiệm',
    icon: 'https://icon-library.com/images/test-tube-icon/test-tube-icon-23.jpg',
    access: 'canAdmin',
    routes: [
      {
        path: '/test/list-test',
        name: 'Danh sách xét nghiệm',
        component: './Admin',
      },
      {
        path: '/test/add-test',
        name: 'Thêm xét nghiệm',
        component: './Admin',
      },
    ],
  },
  {
    path: '/drug',
    name: 'Thông tin thuốc',
    icon: 'https://icon-library.com/images/drug-icon/drug-icon-18.jpg',
    access: 'canAdmin',
    routes: [
      {
        path: '/drug/update-drug',
        name: 'Cập nhật thông tin thuốc',
        component: './Admin',
      },
      {
        path: '/drug/find-drug',
        name: 'Tìm kiếm thông tin thuốc',
        component: './Admin',
      },
    ],
  },
  {
    name: 'Gen và đột biến',
    icon: 'https://icon-library.com/images/ef4d093f9d.png',
    path: '/gene-and-mutation',
    access: 'canAdmin',
    component: './TableList',
  },
  {
    path: '*',
    layout: false,
    component: './404',
  },
  // {
  //   path: '/',
  //   name: 'Ung thư',
  //   component: './Welcome',
  //   routes: [
  //     {
  //       path: '/cancer',
  //       redirect: '/cancer/lung-cancer',
  //     },
  //     {
  //       path: '/cancer/lung-cancer',
  //       name: 'Ung thư phổi',
  //       component: './Welcome',
  //       hideInMenu: false,
  //       routes: [
  //         {
  //           path: '/cancer/lung-cancer',
  //           redirect: '/cancer/lungCancer/top20',
  //         },
  //         {
  //           path: '/cancer/lungCancer/top20',
  //           name: 'Top 20 gen',
  //           component: './Welcome',
  //         },
  //         {
  //           path: '/cancer/lungCancer/mutated-genes',
  //           name: 'Gen đột biến',
  //           component: './Welcome',
  //         },
  //         {
  //           path: '/cancer/lungCancer/normal-genes',
  //           name: 'Gen không đột biến',
  //           component: './Welcome',
  //         },
  //       ],
  //     },
  //     {
  //       path: '/cancer/liver-cancer',
  //       name: 'Ung thư gan',
  //       component: './Welcome',
  //       hideInMenu: false,
  //     },
  //   ],
  // },
  // {
  //   path: '/admin',
  //   name: 'admin',
  //   icon: 'crown',
  //   access: 'canAdmin',
  //   routes: [
  //     {
  //       path: '/admin',
  //       redirect: '/admin/sub-page',
  //     },
  //     {
  //       path: '/admin/sub-page',
  //       name: 'sub-page',
  //       component: './Admin',
  //       routes: [
  //         {
  //           path: '/admin/sub-page',
  //           redirect: '/admin/sub-page/newpage2',
  //         },
  //         {
  //           path: '/admin/sub-page/newpage2',
  //           name: 'newpage2',
  //           component: './Newpage2',
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   name: 'list.table-list',
  //   icon: 'table',
  //   path: '/list',
  //   component: './TableList',
  // },
  // {
  //   path: '/',
  //   redirect: '/welcome',
  // },
  // {
  //   path: '*',
  //   layout: false,
  //   component: './404',
  // },
  // {
  //   name: 'newpage',
  //   path:'/newpage',
  //   compomnent: './Newpage',
  // }
];
