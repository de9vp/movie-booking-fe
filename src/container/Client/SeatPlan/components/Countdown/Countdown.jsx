import { Modal, Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getModalVisibleCountdown, timesUp } from '../../module/seatSlice';
import styles from './Countdown.module.css';
import { SyncOutlined } from '@ant-design/icons';

function Countdown() {
    const dispatch = useDispatch();
    const modalVisibleCountdown = useSelector(getModalVisibleCountdown);
    const [num, setNum] = useState(60);
    useEffect(() => {
        if (num !== 0) {
            setTimeout(() => {
                setNum(num - 1);
            }, 1000);
        } else {
            dispatch(timesUp());
        }
    });

    return (
        <>
            <span style={{ 'width': '90px' }} className={styles.Time}><SyncOutlined spin style={{ 'margin-right': '10px' }} />{num}s</span>
            <Modal
                title=""
                closable={false}
                centered
                visible={modalVisibleCountdown}
                footer={null}
                header={null}
            >
                <p className={styles.ModalTitle}>Times Up!</p>
                <p className={styles.ModalText}>Please <span onClick={() => { window.location.reload(); }}>click here</span> to re-book your tickets!</p>
            </Modal>
        </>
    );
}

export default Countdown;