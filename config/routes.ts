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
        component: './CancerInformation',
      },
      {
        path: '/cancer/liver-cancer',
        name: 'Ung thư gan',
        component: './Admin',
      },
      {
        path: '/cancer/breast-cancer',
        name: 'Ung thư vú',
        component: './Admin',
      },
      {
        path: '/cancer/thyroid-cancer',
        name: 'Ung thư tuyến giáp',
        component: './Admin',
      },
      {
        path: '/cancer/colorectal-cancer',
        name: 'Ung thư trực tràng',
        component: './Admin',
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
];
