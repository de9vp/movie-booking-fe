import React from 'react'
import SideBar from '../../../../../components/Admin/SideBar'
import TopBar from '../../../../../components/Admin/TopBar'
import UserList from '../../Components/UserList';
import './style.css'

// import { Layout, Breadcrumb } from 'antd';

import { Layout, Breadcrumb } from 'antd';

const { Content,  } = Layout;


function UserPage() {
    return (
        <Layout style={{height: "100vh"}}>
            <TopBar />
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                    <SideBar />
                    {/* <Content style={{ padding: '0 24px', minHeight: 280 }}>Content</Content> */}
                    <UserList />
                </Layout>
            </Content>
        </Layout>
    )
}

export default UserPage
