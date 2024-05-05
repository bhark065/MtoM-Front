import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import '../../../styles/common/Style.css';
import styles from '../../../styles/project/register/ProjectRegister.module.css';

import { Icon } from '@iconify/react';
import { IoPersonSharp } from "react-icons/io5";
import { FiPlus } from 'react-icons/fi';
import { FaRegCalendarAlt } from "react-icons/fa";

import Header from '../Header';
import ProjectRegisterModal from '../../modals/ProjectRegisterModal';

function ProjectRegister({ startDate, endDate }) {
    const [backgroundImage, setBackgroundImage] = useState(null);
    const [frontendCount, setFrontendCount] = useState(0);
    const [designCount, setDesignCount] = useState(0);
    const [backendCount, setBackendCount] = useState(0);
    const [planCount, setPlanCount] = useState(0);
    const [showModal, setShowModal] = useState(false);

    console.log(startDate, endDate);

    const handleClick = () => {
        setShowModal(true);
        setTimeout(() => {
            setShowModal(false);
        }, 1000);
    };

    const handleImageUpload = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = (event) => {
            const selectedFile = event.target.files[0];
            const objectURL = URL.createObjectURL(selectedFile);
            setBackgroundImage(objectURL);
        };
        input.click();
    };

    const people = [
        { id: 1, text: '프론트엔드' },
        { id: 2, text: '디자인' },
        { id: 3, text: '백엔드' },
        { id: 4, text: '기획' }
    ];

    const addPersonShape = (personId) => {
        switch(personId) {
            case 1: setFrontendCount(frontendCount + 1); break;
            case 2: setDesignCount(designCount + 1); break;
            case 3: setBackendCount(backendCount + 1); break;
            case 4: setPlanCount(planCount + 1); break;
            default: break;
        }
    };
    const peopleNumber = frontendCount + designCount + backendCount + planCount;

    return (
        <>
            <Header title='프로젝트 등록'/>
            <div className={styles['container']}>
                <div>
                    <div className={styles['content']}>
                        {/* 이미지 선택 */}
                        <div>
                            <div className={styles['imgDiv']} onClick={handleImageUpload}>
                                { backgroundImage ?
                                    <img src={`${backgroundImage}`} /> : <Icon icon='mdi:camera' />
                                }
                            </div>
                        </div>

                        {/* 제목 설명 입력 */}
                        <div className={styles['titleAndcontext']}>
                            <input type='text' placeholder='제목' />
                            <input type='text' placeholder='설명 입력' />
                        </div>
                    </div>

                    {/* 기간 설정 */}
                    <div className={styles['period']}>
                        <div className={styles['recruitment']}>
                            <p>모집 기간 설정</p>
                            <div className={styles['setting']}>
                                <div className={styles['settingBox']}> <p>{startDate}</p> </div>
                                ~
                                <div className={styles['settingBox']}> <p>{endDate}</p> </div>
                                <Link to='/project/recruitment-period' style={{ textDecoration: 'none', color: 'black' }}>
                                    <FaRegCalendarAlt style={{ fontSize: '24px', color: '#FF6524' }} />
                                </Link>
                            </div>
                        </div>
                        
                        <div className={styles['work']}>
                            <p>작업 기간 설정</p>
                            <div className={styles['setting']}>
                                <div className={styles['settingBox']}></div>
                                ~
                                <div className={styles['settingBox']}></div>
                                <Link to='/project/work-period' style={{ textDecoration: 'none', color: 'black' }}>
                                    <FaRegCalendarAlt style={{ fontSize: '24px', color: '#FF6524' }} />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* 모집 인원 설정 */}
                    <div className={styles['people']}>
                        <div className={styles['peopleTitle']}>
                            <p>모집 인원</p>
                            <p>{peopleNumber}명</p>
                        </div>
                        <div className={styles['peopleNum']}>
                            {people.map(person => (
                                <div className={styles['peopleDiv']} key={person.id}>
                                    <div className={styles['person']}>
                                        <div className={styles['textDiv']}>{person.text}</div>
                                            <div className={styles['peopleNumber']}>
                                                {[...Array(person.id === 1 ? frontendCount : person.id === 2 ? designCount : person.id === 3 ? backendCount : planCount)].map((_, index) => (
                                                    <IoPersonSharp key={index+1} style={{ fontSize: '20px', color: '#5A5A5A' }} />
                                                ))}
                                            </div>
                                    </div>
                                    <FiPlus style={{ fontSize: '20px', color: '#5A5A5A', [person.id % 2 !== 0 ? 'right' : null]: '5%'  }} onClick={() => addPersonShape(person.id)}/>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 프로젝트 소개 */}
                    <div className={styles['projectText']}>
                        <p>프로젝트 소개</p>
                        <textarea />
                    </div>
                </div>

                <button onClick={handleClick}>프로젝트 만들기</button>
                {showModal && (
                    <ProjectRegisterModal />
                )}
            </div>
        </>
    )
}

export default ProjectRegister;