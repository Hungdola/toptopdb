import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '@/components/Image';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/031e861b377f05c9f3c19a67d7f53df9~c5_300x300.webp?x-expires=1664910000&x-signature=bKH7pbq5rS7srCI25tFQ0XdLqxQ%3D"
                alt="concac"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Trần Mạnh Hùng</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('usename')}>ep zoai vcl</span>
            </div>
        </div>
    );
}

export default AccountItem;
