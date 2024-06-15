import React, { useContext } from "react";
import { InterviewContext } from "../components/home/InterviewProvider";

import Header from "../components/common/Header";
import styles from "../styles/interview/InterviewContent.module.css"
import QandAQuestionProfile from "../components/q&a/question/Q&AQuestionProfile";
import styles2 from '../styles/home/Home.module.css'
import PostTitle from "../components/q&a/question/PostTitle"
import PostInfo from "../components/q&a/question/PostInfo"

function InterviewContent() {
    // postTitle: title
    // postInfo: data
    const { title, info } = useContext(InterviewContext);
    const data = {
        createdAt: '2024.06.14',
        view: 3
    };

    return(
        <div>
            <Header text="인터뷰"/>
            <div>
                <img src="/images/HomeImg.png" className={styles['main-img']}/>
                <div className={styles['profile']}><QandAQuestionProfile /></div>
            </div>
            <div className={styles2["home-container"]}>
                <div className={styles['post-container']}>
                    <PostTitle title={title} />
                    <PostInfo data={data} />
                </div>
                <div className={styles["content-container"]}>
                    {
                        info && Array.isArray(info) && info.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))
                    }
                    {/* <img src="/images/example.png" alt="참고자료"/>
                    <p>안녕하세요</p> */}
                </div>
            </div>
        </div>
    )
}
export default InterviewContent;