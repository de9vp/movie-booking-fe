import React, { useEffect, useRef } from 'react';
import { getMovieAsync, selectMovie } from './module/movieSlice';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Index.module.css'
import { Row, Col, Button, Spin } from 'antd';
import { CalendarOutlined, HourglassOutlined, HeartOutlined } from '@ant-design/icons';
import Showtimes from './components/Showtimes/Showtimes';
import moment from 'moment';
import Header from '../../../components/Client/Header/Header';
import Footer from '../../../components/Client/Footer/Footer';
import { useParams } from 'react-router-dom';

const styleCenter = { 'text-align': 'center' };
function Index() {
    const params = useParams();
    const myRef = useRef(null);
    const dispatch = useDispatch();
    const movie = useSelector(selectMovie);
    useEffect(function () {
        //call api get data movie detail
        dispatch(getMovieAsync(params.maPhim));
    }, []);

    if (Object.keys(movie).length === 0) {
        return (
            <div className={styles.LoadingScreen}>
                <Spin size='large' />
            </div>
        );
    }

    const executeScroll = () => myRef.current.scrollIntoView()

    return (
        <>
            <Header />
            <div style={{ 'background-color': '#001232', 'color': 'white' }}>
                <div className={styles.DetailsBanner} style={{ 'background-image': `url(${movie.hinhAnh})` }}>
                    <div className='Container'>
                        <div className={styles.Wrapper}>
                            <div className={styles.Thumbnail}>
                                <img src={movie.hinhAnh} alt="movie"></img>
                                <div className={styles.WatchTrailer}></div>
                            </div>
                            <div className={styles.DetailContent}>
                                <div class={styles.MovieTitle}>{movie.tenPhim}</div>
                                <div class={styles.MovieLanguages}>
                                    <span>ENGLISH, VIETNAMESE</span>
                                </div>
                                <span class={styles.TypeOfMovie}>2D | DIGITAL</span>
                                <div class={styles.Duration}>
                                    <div style={{ 'padding-right': '25px' }}>
                                        <CalendarOutlined />
                                        <span> {moment(movie.ngayKhoiChieu).format("DD/MM/YYYY")}</span>
                                    </div>
                                    <div>
                                        <HourglassOutlined />
                                        <span> {movie.lichChieu[0].thoiLuong} minutes</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.BookingArea}>
                    <div className='Container'>
                        <div className={styles.WrapperOther}>
                            <div style={styleCenter}>aaaaaa</div>
                            <div style={styleCenter}>bbbbbb</div>
                            <div style={styleCenter}>
                                <div style={{ 'padding-bottom': '15px' }}>
                                    <HeartOutlined style={{ 'font-size': '25px' }} /> {movie.danhGia}/10
                                </div>
                                <span>Users Rating</span>
                            </div>
                            <div className={styles.BtnBooking}>
                                <Button type="primary" shape="round" size="large" onClick={executeScroll}>
                                    Booking
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.Main} Container`}>
                    <div className=''>
                        <Row gutter={{ sm: 16, md: 24, lg: 32 }}>
                            <Col className="gutter-row" span={18}>
                                <div className={styles.Summary}>
                                    <h3 className={styles.Title}>SUMMARY</h3>
                                    <div className='content'>
                                        {movie.moTa}
                                    </div>
                                </div>
                                <div ref={myRef}>
                                    <Showtimes showTimes={movie.lichChieu} />
                                </div>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <h3 className={styles.Title}>APPLICABLE OFFER</h3>
                                <div className={styles.ApplicableOffer}>None</div>
                                <div className={styles.ApplicableOffer}>None</div>
                                <div className={styles.ApplicableOffer}>None</div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Index;