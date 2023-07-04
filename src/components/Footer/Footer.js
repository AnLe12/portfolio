import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('footer')}>
            <div className={cx('header')}>
                <div className={cx('version')}>
                    <div className={cx('name')}>
                        <span>Thi Hoai An Le</span>
                        <span>v2.0.0</span>
                    </div>
                    <a className={cx('madeBy')} href="/">
                    Made by
                    <span> Thi Hoai An Le.</span>
                </a>
                </div>
                <div className={cx('links')}>
                    <ul>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#experiences">Experiences</a>
                        </li>
                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;
