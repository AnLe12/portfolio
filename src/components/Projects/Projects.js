import classNames from 'classnames/bind';
import styles from './Projects.module.scss';
import {
    SCSSIcon,
    GithubIcon,
    JSIcon,
    MongoIcon,
    NodeIcon,
    ReactIcon,
    ShareIcon,
} from '~/components/Icons';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Projects() {
    return (
        <div id="projects" className={cx('projectContainer')}>
            <div className={cx('title')}>
                <h1>Projects</h1>
                <div className={cx('line')}></div>
            </div>
            <div className={cx('projects')}>
                <div className={cx('tikTok')}>
                    <div className={cx('tikTokApp')}>
                        <div>
                            <img className={cx('tikTokImage')} src={images.tikTok} alt="tikTok" />
                        </div>
                    </div>
                    <div className={cx('projectsDes')}>
                        <div className={cx('name')}>
                            <span>TikTok</span>
                            <div className={cx('linkIcons')}>
                                <a href="https://github.com/AnLe12/tiktok-frontend">
                                    <GithubIcon className={cx('icon')} />
                                </a>
                                <a href="https://tiktok-clone-web.netlify.app">
                                    <ShareIcon className={cx('icon')} />
                                </a>
                            </div>
                        </div>
                        <p className={cx('description')}>
                            A TikTok clone including features of TikTok by using ReactJS, NodeJS, MongoDB and some
                            libraries.
                        </p>
                        <div className={cx('techsIcon')}>
                            <div>
                                <ReactIcon className={cx('icon')} />
                            </div>
                            <div>
                                <NodeIcon className={cx('icon')} />
                            </div>
                            <div>
                                <MongoIcon className={cx('icon')} />
                            </div>
                            <div>
                                <JSIcon className={cx('icon')} />
                            </div>
                            <div>
                                <SCSSIcon className={cx('icon')} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('tikTok')}>
                    <div className={cx('tikTokApp')}>
                        <div>
                            <img className={cx('tikTokImage')} src={images.todo} alt="tikTok" />
                        </div>
                    </div>
                    <div className={cx('projectsDes')}>
                        <div className={cx('name')}>
                            <span>Todo App</span>
                            <div className={cx('linkIcons')}>
                                <a href="https://github.com/AnLe12/ToDoApp">
                                    <GithubIcon className={cx('icon')} />
                                </a>
                                <a href="https://todoapp2112.netlify.app">
                                    <ShareIcon className={cx('icon')} />
                                </a>
                            </div>
                        </div>
                        <p className={cx('description')}>
                        Using MongoDB, ReactJS, Express, NodeJS to create this website with basic functions for a Todo list
                        </p>
                        <div className={cx('techsIcon')}>
                            <div>
                                <ReactIcon className={cx('icon')} />
                            </div>
                            <div>
                                <NodeIcon className={cx('icon')} />
                            </div>
                            <div>
                                <MongoIcon className={cx('icon')} />
                            </div>
                            <div>
                                <JSIcon className={cx('icon')} />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('projects')}>
                <div className={cx('tikTok')}>
                    <div className={cx('tikTokApp')}>
                        <div>
                            <img className={cx('tikTokImage')} src={images.musicPlayer} alt="tikTok" />
                        </div>
                    </div>
                    <div className={cx('projectsDes')}>
                        <div className={cx('name')}>
                            <span>Music Player</span>
                            <div className={cx('linkIcons')}>
                                <a href="https://github.com/AnLe12/MusicPlayer">
                                    <GithubIcon className={cx('icon')} />
                                </a>
                                <a href="https://music-player-2112.netlify.app/">
                                    <ShareIcon className={cx('icon')} />
                                </a>
                            </div>
                        </div>
                        <p className={cx('description')}>
                            A simple website to create a basic music player by using HTML, CSS, JavaScript.
                        </p>
                        <div className={cx('techsIcon')}>
                            <div>
                                <JSIcon className={cx('icon')} />
                            </div>                           
                        </div>
                    </div>
                </div>
                <div className={cx('tikTok')}>
                    <div className={cx('tikTokApp')}>
                        <div>
                            <img className={cx('tikTokImage')} src={images.map} alt="tikTok" />
                        </div>
                    </div>
                    <div className={cx('projectsDes')}>
                        <div className={cx('name')}>
                            <span>A website using Google API</span>
                            <div className={cx('linkIcons')}>
                                <a href="https://github.com/AnLe12/Embed-Google-Map-in-website">
                                    <GithubIcon className={cx('icon')} />
                                </a>
                                <a href="https://hamilton-education-institutions.netlify.app">
                                    <ShareIcon className={cx('icon')} />
                                </a>
                            </div>
                        </div>
                        <p className={cx('description')}>
                        Using Google Map API to point out educational locations in hamilton.
                        </p>
                        <div className={cx('techsIcon')}>
                            <div>
                                <JSIcon className={cx('icon')} />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Projects;
