import classNames from 'classnames/bind';
import styles from './Tech.module.scss';
import {
    BootstrapIcon,
    ExpressIcon,
    JSIcon,
    MaterialIcon,
    MongoIcon,
    NodeIcon,
    ReactIcon,
    MicrosoftSQLServerIcon,
    PHPIcon,
    SCSSIcon
} from '~/components/Icons';

const cx = classNames.bind(styles);

function Tech() {
    return (
        <div id="experiences" className={cx('techContainer')}>
            
            <div className={cx('title')}>
                <h1>Experiences</h1>
                <div className={cx('line')}></div>
            </div>
            <div className={cx('techName')}>
                <div className={cx('techSectionContainer')}>
                    <div className={cx('icon')}>
                        <ReactIcon className={cx('reactIcon')} />
                    </div>
                    <div className={cx('iconTitle')}>
                        <span>React</span>
                    </div>
                </div>
                <div className={cx('techSectionContainer')}>
                    <div className={cx('icon')}>
                        <SCSSIcon className={cx('reactIcon')} />
                    </div>
                    <div className={cx('iconTitle')}>
                        <span>SCSS</span>
                    </div>
                </div>
                <div className={cx('techSectionContainer')}>
                    <div className={cx('icon')}>
                        <NodeIcon className={cx('reactIcon')} />
                    </div>
                    <div className={cx('iconTitle')}>
                        <span>NodeJS</span>
                    </div>
                </div>

                <div className={cx('techSectionContainer')}>
                    <div className={cx('icon')}>
                        <PHPIcon className={cx('reactIcon')} />
                    </div>
                    <div className={cx('iconTitle')}>
                        <span>PHP</span>
                    </div>
                </div>
                <div className={cx('techSectionContainer')}>
                    <div className={cx('icon')}>
                        <ExpressIcon className={cx('reactIcon')} />
                    </div>
                    <div className={cx('iconTitle')}>
                        <span>ExpressJS</span>
                    </div>
                </div>
                
                <div className={cx('techSectionContainer')}>
                    <div className={cx('icon')}>
                        <JSIcon className={cx('reactIcon')} />
                    </div>
                    <div className={cx('iconTitle')}>
                        <span>JavaScript</span>
                    </div>
                </div>
                <div className={cx('techSectionContainer')}>
                    <div className={cx('icon')}>
                        <MaterialIcon className={cx('reactIcon')} />
                    </div>
                    <div className={cx('iconTitle')}>
                        <span>Material UI</span>
                    </div>
                </div>
                <div className={cx('techSectionContainer')}>
                    <div className={cx('icon')}>
                        <BootstrapIcon className={cx('reactIcon')} />
                    </div>
                    <div className={cx('iconTitle')}>
                        <span>Bootstrap</span>
                    </div>
                </div>

                <div className={cx('techSectionContainer')}>
                    <div className={cx('icon')}>
                        <MicrosoftSQLServerIcon className={cx('reactIcon')} />
                    </div>
                    <div className={cx('iconTitle')}>
                        <span>Microsoft SQL Server</span>
                    </div>
                </div>

                <div className={cx('techSectionContainer')}>
                    <div className={cx('icon')}>
                        <MongoIcon className={cx('reactIcon')} />
                    </div>
                    <div className={cx('iconTitle')}>
                        <span>MongoDB</span>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Tech;
