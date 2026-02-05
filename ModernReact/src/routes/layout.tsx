import { Outlet, useLocation, useNavigate } from '@modern-js/runtime/router';
import { Layout, Menu } from 'antd';
import { useState, useEffect } from 'react';
import type { MenuProps } from 'antd';
import { routeConfig, routeConfigToMenuItems } from '../utils/routeConfig';
import './index.css';

const { Header, Content, Sider } = Layout;

export default function RootLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState<string[]>(['/']);

  // 根据当前路径更新选中的菜单项
  useEffect(() => {
    setSelectedKeys([location.pathname]);
  }, [location.pathname]);

  // 菜单点击处理
  const handleMenuClick: MenuProps['onClick'] = ({ key }) => {
    navigate(key);
  };

  // 从配置生成菜单项
  const menuItems = routeConfigToMenuItems(routeConfig);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* 左侧菜单栏 */}
      <Sider 
        collapsible 
        collapsed={collapsed} 
        onCollapse={setCollapsed}
        width={220}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        
        {/* 菜单 */}
        <Menu
          theme="dark"
          selectedKeys={selectedKeys}
          mode="inline"
          items={menuItems}
          onClick={handleMenuClick}
          style={{
            border: 'none',
          }}
        />
      </Sider>

      {/* 右侧内容区 */}
      <Layout style={{ marginLeft: collapsed ? 80 : 220, transition: 'margin-left 0.2s' }}>
        <Outlet />
      </Layout>
    </Layout>
  );
}
