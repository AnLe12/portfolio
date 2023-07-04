import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Header() {
    const [width, setWidth] = useState(window.innerWidth);
    const [barsList, setBarList] = useState(true);
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    useEffect(() => {
        if (width < 750) {
            setBarList(false);
        }
        return () => setBarList(true);
    }, [width]);

    const handleChangeState = () => {
        setBarList(!barsList);
    };
    return (
        <div className={cx('header')}>
            <div className={cx('navbar')}>
                <div className={cx('portfolio')}>
                    <span>
                        <a href="/">Portfolio</a>
                    </span>
                </div>
                {barsList && (
                    <ul>
                        <li>
                            <a href="#content">About</a>
                        </li>
                        <li>
                            <a href="#experiences">Experiences</a>
                        </li>
                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                )}
                <button className={cx('barsList')} onClick={handleChangeState}>
                    <FontAwesomeIcon icon={faBars} className={cx('barsIcon')} />
                </button>
            </div>
        </div>
    );
}

export default Header;
