/* eslint-disable jsx-a11y/alt-text */
import { Col, Row, Spin, Button } from 'antd';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './Index.module.css';
import Header from '../../../components/Client/Header/Header';
import Footer from '../../../components/Client/Footer/Footer';

import Seat from './components/Seat/Seat';
import { useDispatch, useSelector } from 'react-redux';
import { getAll, getSeatPlanAsync, updateAccessToken, updateBookingData } from './module/seatSlice';
import Countdown from './components/Countdown/Countdown';
import { RollbackOutlined, CalendarOutlined, ClockCircleOutlined } from '@ant-design/icons';

function Index() {
    const navigate = useNavigate();
    const params = useParams();
    const dispatch = useDispatch();
    const data = useSelector(getAll);


    function handleBack() {
        navigate(-1);
    }

    // get data ma lich chieu, tai khoan nguoi dung va access token
    let bookingData = {};
    let accessToken;
    if (localStorage.getItem('userInfo') != null) {
        let user = JSON.parse(localStorage.getItem('userInfo'));
        Object.assign(bookingData, { maLichChieu: params.maLichChieu });
        Object.assign(bookingData, { taiKhoanNguoiDung: user.taiKhoan });  ////BUG
        accessToken = user.accessToken;
    }


    // get data Laydanhsachphongve
    useEffect(() => {
        // call api
        dispatch(getSeatPlanAsync(params.maLichChieu));
        dispatch(updateBookingData(bookingData));
        dispatch(updateAccessToken(accessToken));
    }, [])

    console.log('render 1');
    if (data.length === 0) {
        return (
            <div className={styles.LoadingScreen}>
                <Spin size='large' />
            </div>
        );
    }
    return (
        <>
            <Header />
            <div style={{ 'background-color': '#001232' }}>
                <div className={styles.Banner}>
                    <div className={styles.ImgBg}></div>
                    <div className={styles.MovieInfo}>
                        <div style={{ 'display': 'flex', 'justify-content': 'center', 'font-size': '40px', 'font-weight': '500' }}>{data.thongTinPhim.tenPhim}</div>
                        <div title={data.thongTinPhim.diaChi} style={{ 'font-size': '20px' }}>{data.thongTinPhim.tenCumRap} | {data.thongTinPhim.tenRap}</div>
                    </div>
                </div>
                <div className={styles.Countdown}>
                    <div className='Container'>
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                            <Col className="gutter-row" span={8}>
                                <Button type="primary" shape="round" size="large" onClick={handleBack}>
                                    <RollbackOutlined />Back
                                </Button>
                            </Col>
                            <Col style={{ 'display': 'flex', 'justify-content': 'center' }} className="gutter-row space-align-block" span={8}>

                                <span style={{ 'margin-right': '10px' }} className={styles.Time}><CalendarOutlined style={{ 'margin-right': '10px' }} />{data.thongTinPhim.ngayChieu}</span>
                                <span className={styles.Time}><ClockCircleOutlined style={{ 'margin-right': '10px' }} />{data.thongTinPhim.gioChieu}</span>

                            </Col>
                            <Col style={{ 'display': 'flex', 'flex-direction': 'row-reverse' }} className="gutter-row" span={8}>
                                <Countdown />
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className={styles.Select}>
                    <div className='Container'>
                        <Seat />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Index;