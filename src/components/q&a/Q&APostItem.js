import { Link } from 'react-router-dom';

import '../../styles/common/Style.css';
import styles from '../../styles/q&a/Q&APostItem.module.css';

import HeartCommentIcon from './HeartCommentIcon';

function QandAPostItem({ data, views, hearts, comments }) {
    let hashtag = data && data.hashtags ? data.hashtags.split("/")[0] : "";
    return (
        <>
            <Link to={`/q&a/question/${data.postId}`} style={{ textDecoration: 'none', color: 'black' }}>
                <div className={styles['container']}>
                    <div className={styles['imgDiv']}> <img src={data.img} /> </div>
                    <div className={styles['info']}>
                        <div className={styles['topDiv']}>
                            <div className={styles['top']}>
                                <p>{data.createdAt}</p>
                            </div>
                            <div className={styles['middle']}>
                                <div className={styles['title']}> <p>{data.title}</p> </div>
                            </div>
                            <div className={styles['bottom']}>
                                <div className={styles['tag']}> <p>{hashtag}</p> </div>
                                <p>조회수 {views}회</p>
                            </div>
                        </div>
                        <hr />
                        <div className={styles['iconDiv']}>
                            <HeartCommentIcon hearts={hearts} comments={comments} />
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default QandAPostItem;