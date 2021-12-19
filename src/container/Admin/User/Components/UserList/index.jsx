import React from 'react'
import { Layout } from 'antd';
import withData from '../../../../../hoc/withData'

const { Content } = Layout;

function UserList({ data }) {
    console.log(data);
    return (
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>

            </div>
        </Content>
    )
}

export default withData(UserList, "QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP06")
