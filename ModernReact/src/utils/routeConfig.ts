// 路由配置文件
// 在 Modern.js 的约定式路由中，你只需要在这里定义路由元信息
// 实际的路由会根据 src/routes 目录自动生成

export interface RouteConfig {
  path: string;
  label: string;
  icon?: React.ReactNode;
  children?: RouteConfig[];
}

export const routeConfig: RouteConfig[] = [
  {
    path: "/",
    label: "首页",
  },
  {
    path: "/formily",
    label: "Formily表单",
    
    children: [
      {
        path: "/formily/basic",
        label: "基础",
      },
    ],
  },
  {
    path: "/about",
    label: "关于",
  },
  // 示例：添加更多路由
  // 当你在 src/routes 创建新的页面后，在这里添加对应的配置即可
  // {
  //   path: '/products',
  //   label: '产品',
  //   children: [
  //     {
  //       path: '/products/list',
  //       label: '产品列表',
  //     },
  //     {
  //       path: '/products/detail',
  //       label: '产品详情',
  //     },
  //   ],
  // },
];

// 将路由配置转换为 antd Menu 所需的格式
export function routeConfigToMenuItems(routes: RouteConfig[]) {
  return routes.map((route) => {
    const item: any = {
      key: route.path,
      label: route.label,
      icon: route.icon,
    };

    if (route.children && route.children.length > 0) {
      item.children = routeConfigToMenuItems(route.children);
    }

    return item;
  });
}
