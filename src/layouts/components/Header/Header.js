import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faEarthAsia,
    faEllipsisVertical,
    faKeyboard,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
// import { faMessage } from '@fortawesome/free-regular-svg-icons';
import 'tippy.js/dist/tippy.css'; //dùng để css lại cái tippy
import { Link } from 'react-router-dom';

import config from '@/config';
import Button from '@/components/Button';
import styles from './Header.module.scss';
import images from '@/assets/images';
import Menu from '@/components/Popper/Menu';
import { UploadIcon, MessageIcon, InboxIcon } from '@/components/Icons';
import Image from '@/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles); //bind sẽ giúp các bạn bind cái obj style này vào
//rồi nó sẽ trả ra 1 method là 1  function class cx
//rồi dùng này để dùng class khi đó nó giúp các bạn viết classname dưới dạng có dấu gạch ngang

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>,
        title: 'Feedback and help',
        to: './feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = true;

    //handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                //handle change language
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>,
            title: 'View profile',
            to: './@hung',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins}></FontAwesomeIcon>,
            title: 'Get coins',
            to: './coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>,
            title: 'Settings',
            to: './settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon>,
            title: 'Log out',
            to: './logout',
            separate: true, //thằng nào có cái này sẽ css để nó có vạch
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="logo tiktok"></img>
                </Link>

                <Search></Search>

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon></UploadIcon>
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon></MessageIcon>
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Mail box" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon></InboxIcon>
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/920551b9fdaa6a620f2aef13f8d15c74~c5_720x720.jpeg?x-expires=1666116000&x-signature=s18wkHyAaVcCMYqOJW%2BsPs7kTIM%3D"
                                alt="Trần Mạnh Hùng"
                            ></Image>
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
