import styles from './Header.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles); //bind sẽ giúp các bạn bind cái obj style này vào
//rồi nó sẽ trả ra 1 method là 1  function class cx
//rồi dùng này để dùng class khi đó nó giúp các bạn viết classname dưới dạng có dấu gạch ngang

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}></div>
        </header>
    );
}

export default Header;
