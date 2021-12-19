import React from 'react'
import { Layout, Menu } from 'antd';
import {
    UserOutlined,
    UploadOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

function SideBar() {
    return (
        <Sider className="site-layout-background" width={200}>
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                style={{ height: '100%' }}
            >
                <Menu.Item key="1" icon={<UserOutlined />}>CLient</Menu.Item>
                <Menu.Item key="2" icon={<VideoCameraOutlined />}>Film</Menu.Item>
                <Menu.Item key="3" icon={<UploadOutlined />}>Show Time Film</Menu.Item>
            </Menu>
        </Sider>
    )
}

export default SideBar
