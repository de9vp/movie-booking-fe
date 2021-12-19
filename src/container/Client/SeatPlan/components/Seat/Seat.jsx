/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react';
import { Row, Col, Button, Space, message, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import seat from '../../../../../assets/images/seat.png';
import seatBookedImg from '../../../../../assets/images/seat-booked.png';
import seatSelectedImg from '../../../../../assets/images/seat-selected.png';
import screenImg from '../../../../../assets/images/screen.png';
import { getMovieInfo, getModalVisible, getModel, getSeatList, getSelectedIndex, getSelectedName, getTotal, postBookingAsync, selected, selectedName, unselect, unselectName, updateDanhSachVe } from '../../module/seatSlice';
import styles from './Seat.module.css';
import { Link } from 'react-router-dom';

function Seat() {
    const dispatch = useDispatch();
    const movieInfo = useSelector(getMovieInfo);
    const data = useSelector(getSeatList);
    const selectedIndexArr = useSelector(getSelectedIndex);
    const selectedNameArr = useSelector(getSelectedName);
    const ticketsPriceTotal = useSelector(getTotal);
    const modalVisible = useSelector(getModalVisible);

    const model = useSelector(getModel);
    console.log(model[0].danhSachVe);
    console.log(selectedIndexArr);

    function handleBooking() {
        if (selectedIndexArr.length !== 0) {
            dispatch(updateDanhSachVe());
        } else {
            message.error('You have not chosen!');
        }
    }
    useEffect(() => {
        // handle event payment button
        if (model[0].danhSachVe.length !== 0) {
            // call api
            //dispatch(postBookingAsync(model));
        }
    })

    function handleSelect(e) {
        let stt = e.target.parentElement.getAttribute('data-key');
        let rangeName = e.target.parentElement.children[1].textContent;
        if (stt !== null) {
            if (!selectedIndexArr.includes(stt)) {
                dispatch(selected(stt));
                dispatch(selectedName(rangeName));
            } else {
                dispatch(unselect(stt));
                dispatch(unselectName(rangeName));
            }
        }
    }

    // Format a Number, Exactly Two in Length - utils
    function pad(d) {
        return (d < 10) ? '0' + d.toString() : d.toString();
    }
    // VND Currency formatting 10.000 VND
    function currencyFormat(params) {
        return params.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
    }


    let i = 1;
    let r = 0;
    let seatRender = data.map((e, index) => {
        let rangeArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K'];
        if (i === 17) { i = 1; r += 1; }
        if (e.taiKhoanNguoiDat !== null) {
            return (
                <button data-key={e.stt} disabled style={{ cursor: 'no-drop' }} onClick={e => handleSelect(e)} className={styles.SingleSeat}>
                    <img src={seatBookedImg} />
                    <span>{rangeArr[r]}{i++}</span>
                </button >
            )
        }
        if (selectedIndexArr.includes(pad(index + 1))) {
            return (
                <button title='Ghế đang được chọn' data-key={e.stt} onClick={e => handleSelect(e)} className={styles.SingleSeat}>
                    <img src={seatSelectedImg} />
                    <span>{rangeArr[r]}{i++}</span>
                </button >
            )
        }
        if (e.loaiGhe === 'Vip') {
            return (
                <button title={`Vip: ${e.giaVe} VND`} data-key={e.stt} onClick={e => handleSelect(e)} className={styles.SingleSeat}>
                    <img style={{ 'filter': 'hue-rotate(40deg)' }} src={seat} />
                    <span>{rangeArr[r]}{i++}</span>
                </button >
            )
        }
        return (
            <button title={`Thường: ${e.giaVe} VND`} data-key={e.stt} onClick={e => handleSelect(e)} className={styles.SingleSeat}>
                <img src={seat} />
                <span>{rangeArr[r]}{i++}</span>
            </button>
        )
    });

    console.log('render 2');
    return (
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className={`gutter-row ${styles.SelectArea}`} span={17}>
                <p className={styles.SelectTitle}>SELECT SEAT</p>
                <div className={styles.ScreenImg}>
                    <img src={screenImg} ></img>
                </div>
                <div className={styles.SeatArea}>
                    {seatRender}
                </div>
            </Col>
            <Col className="gutter-row" span={7}>
                <div style={{ 'padding-top': '100px' }}>
                    <div className={styles.SummeryTitle}>
                        BOOKING SUMMERY
                    </div>
                    <div className={styles.BookingSummery}>
                        <h2>{movieInfo.tenPhim}</h2>
                        <p>2D | DIGITAL</p>
                        <h2>{movieInfo.tenCumRap}</h2>
                        <p>{movieInfo.ngayChieu}, {movieInfo.gioChieu}</p>
                        <div className={styles.Amount}>
                            <h2>{pad(selectedNameArr.length)}</h2>
                            <p>TICKETS</p>
                        </div>
                        <div className={styles.Amount}>
                            <h2>{selectedNameArr.length === 0 ? 'None' : selectedNameArr.join(', ')}</h2>
                            <p>POSITION</p>
                        </div>
                        <div className={styles.Total}>
                            <h2>TICKETS PRICE</h2>
                            <h2>{currencyFormat(ticketsPriceTotal)}</h2>
                        </div>
                        <div style={{ 'text-align': "center", 'margin-top': '25px' }}>
                            <Space>
                                <Button type="primary" shape="round" size="large" onClick={handleBooking}>
                                    PAYMENT
                                </Button>
                                <Modal
                                    title=""
                                    closable={false}
                                    centered
                                    visible={modalVisible}
                                    footer={null}
                                    header={null}
                                >
                                    <p className={styles.ModalTitle}>Great!</p>
                                    <p className={styles.ModalText}>You have successfully booked your ticket!</p>
                                    <div className={styles.ModalBtn}>
                                        <Link to={`/`} >
                                            <Button type="primary" shape="round" size="large" >
                                                Home Page
                                            </Button>
                                        </Link>
                                    </div>
                                </Modal>
                            </Space>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    );
}

export default Seat;