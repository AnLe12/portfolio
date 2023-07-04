import classNames from 'classnames/bind';
import styles from './GetInTouch.module.scss';
import { EmailIcon, GithubIcon, StarsIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function GetInTouch() {
    return (
        <div id="contact" className={cx('getInTouchContainer')}>
            <div className={cx('icons')}>
                <StarsIcon className={cx('starsIcon')} />
            </div>
            <div className={cx('title')}>
                <h1>Get In Touch</h1>
                <div className={cx('line')}></div>
            </div>
            <div className={cx('info')}>
                <div className={cx('infoDes')}>
                    <p className={cx('description')}>
                        I'm always open to new projects and opportunities. Whether you're a company looking to hire or
                        you're just looking to chat, I'd love to hear from you.
                    </p>
                    <div className={cx('infoEmail')}>
                        <div className={cx('emailIcon')}>
                            <EmailIcon className={cx('icon')} />
                        </div>
                        <a href = "mailto: thihoaian.le21@gmail.com" className={cx('mailToLink')}><span >thihoaian.le21@gmail.com</span></a>
                    </div>
                    <div className={cx('infoGithub')}>
                        <div className={cx('linkIcon')}>
                            <GithubIcon className={cx('icon')} />
                        </div>
                        <a href = "https://github.com/AnLe12" className={cx('githubLink')}><span >https://github.com/AnLe12</span></a>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default GetInTouch;
