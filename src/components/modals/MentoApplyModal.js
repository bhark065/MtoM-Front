import React from 'react';
import Modal from 'react-modal';

import '../../styles/common/Style.css';
import styles from '../../styles/modals/MentoApplyModal.module.css';

import { FaCircleCheck } from "react-icons/fa6";

function MentoApplyModal() {
    return (
        <Modal isOpen={true} className={styles['modal']}>
            <div className={styles['container']}>
                <FaCircleCheck style={{ fontSize: '30px', color: '#FF6524' }}/>
                <p>멘토링 신청 완료!</p>
                <p>매칭 완료 시 채팅에 자동 추가 됩니다.</p>
            </div>
        </Modal>
    )
}

export default MentoApplyModal;