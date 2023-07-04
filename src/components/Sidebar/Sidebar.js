import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
// import { EmailIcon, GithubIcon, LinkedInIcon, ViewProfileIcon } from '~/components/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('sidebar')}>
            <div className={cx('btnContainer')}>
                <div className={cx('rectangle')}>
                    <a className={cx('btnLinks')} href="/">
                        Linkedin
                    </a>
                </div>
                <button className={cx('sidebarIcon')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faLinkedin} />
                </button>
            </div>
            <div className={cx('btnContainer')}>
                <div className={cx('rectangle')}>
                    <a className={cx('btnLinks')} href="/">
                        Github
                    </a>
                </div>
                <button className={cx('sidebarIcon')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faGithub} />
                </button>
            </div>
            <div className={cx('btnContainer')}>
                <div className={cx('rectangle')}>
                    <a className={cx('btnLinks')} href="/">
                        Facebook
                    </a>
                </div>
                <button className={cx('sidebarIcon')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faFacebook} />
                </button>
            </div>
            <div className={cx('btnContainer')}>
                <div className={cx('rectangle')}>
                    <a className={cx('btnLinks')} href="/">
                        Download
                    </a>
                </div>
                <button className={cx('sidebarIcon')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faDownload} />
                </button>
            </div>
        </div>
    );
}

export default Sidebar;
