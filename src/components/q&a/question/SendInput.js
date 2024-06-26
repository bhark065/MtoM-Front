import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

import '../../../styles/common/Style.css';
import styles from '../../../styles/q&a/question/SendInput.module.css';

import { BsSend } from 'react-icons/bs';

function SendInput({ postId, reloadComments }) {
    const userId = useSelector(state => state.userId);
    const [content, setContent] = useState('');

    const send = async (e) => {
        e.preventDefault();
        if (content.trim() === '') {
            alert("글을 입력해주세요.");
            return;
        }
        try {
            const request = await axios.post(`${process.env.REACT_APP_HOST}/api/posts/comments`, {
                userId: userId,
                postId: postId,
                content: content
            });
            if (request.status === 200) {
                console.log("댓글 등록 성공");
                reloadComments();
                setContent('');
            } else {
                console.log("댓글 등록 실패", request.status);
            }
        } catch(error) {
            console.log("서버 연결 실패", error);
        }
    }

    const handleText = (e) => {
        setContent(e.target.value);
    }
    
    return (
        <>
            <div className={styles['container']}>
                <input type='text' onChange={handleText} value={content} />
                <BsSend onClick={send}/>
            </div>
        </>
    )
}

export default SendInput;