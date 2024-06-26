import '../../../styles/common/Style.css';
import styles from '../../../styles/chat/search/SearchItem.module.css';
import SearchDetail from './SearchDetail';

function SearchItem({ id, onClick, isSelected, data }) {
    return (
        <>
            {isSelected ? (
                <SearchDetail user={data} />
            ) : (
                <div className={styles['container']} onClick={() => onClick(id)}>
                    <div className={styles['inDiv']}>
                        <div className={styles['imgDiv']}>
                            <img src={`${data.profile}`} />
                        </div>

                        <div className={styles['info']}>
                            <p>{data.studentId} {data.name}</p>
                            <p>{data.information}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default SearchItem;