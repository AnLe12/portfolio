import classNames from 'classnames/bind';
import styles from './Content.module.scss';
import { TypeAnimation } from 'react-type-animation';

const cx = classNames.bind(styles);

const CONTENT = [
    'I Love Finding Secret.',
    1000,
    'I Love building Things For The Web.',
    1000,
    'I Love React.',
    1000,
    '',
];

function Content() {
    return (
        <div id="about" className={cx('content')}>
            <div className={cx('userDescription')}>
                <div className={cx('hello')}>Hi, I am</div>
                <div className={cx('userName')}>
                    <h2>Thi Hoai An Le.</h2>
                    <span>👋</span>
                </div>
                <div className={cx('description')}>
                    <TypeAnimation cursor={true} speed={53} sequence={CONTENT} wrapper="p" repeat={Infinity} />
                </div>
                <div className={cx('paragraph')}>Don't forget to read some information about me</div>
                
            </div>
        </div>
    );
}

export default Content;
