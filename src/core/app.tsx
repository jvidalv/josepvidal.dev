import {h} from 'preact';
import {Dots} from 'components/shapes/dots/dots';
import {Circle} from 'components/shapes/circle/circle';
import {Triangle} from 'components/shapes/red-triangle/triangle';
import {HalfMoon} from 'components/shapes/half-moon/half-moon';
import {RoundImage} from 'components/atoms/round-image/round-image';
import {myNetworks} from 'constants/my-networks';

import me from 'url:./images/me.jpg';
import * as styles from './app.css';
import {Row} from "components/containers/row/row";


export const App = () => (
    <div className={styles.inner}>
        <div className={styles.constellation}>
            <Circle/>
            <Dots/>
            <Triangle/>
            <HalfMoon/>
        </div>
        <aside className={styles.left}>
            <div className={styles.left__inner}>
                <RoundImage
                    src={me}
                    alt="Josep Vidal Vidal"
                    title="Josep Vidal Vidal"
                    className={styles.left__image}
                />
                <p className={styles.left__text}>
                    I'm Josep, a <span className={styles.software}>software</span> developer
                    specialized in <span className={styles.react}>React</span>
                </p>
                <div className={styles.networks}>
                    {myNetworks.map(({url, Icon, name}) => (
                        <a
                            href={url}
                            className={styles.networks__link}
                            title={name}
                            target="_blank">
                            <Icon width="3rem" height="3rem"/>
                        </a>
                    ))}
                </div>
            </div>
        </aside>
        <main className={styles.right}>
            <section className={styles.right__inner}>
                <Row>
                    <h1 className={styles.right__title}>
                        Welcome <span aria-label="hand wave">👋🏻</span>
                    </h1>
                    <div className={styles.right__content}>
                        <p>
                            Currently working remotely for{' '}
                            <a
                                href="https://www.linkedin.com/company/zartis/"
                                target="_blank"
                                className={styles.zartis}>
                                Zartis
                            </a>{' '}
                            as a software engineer. My role is to lead the frontend part of Agreeable, a brand new
                            e-sign platform.
                        </p>
                        <p>
                            My actual work requires me to code mostly in React (Preact &{' '}
                            <span className={styles.typescript}>TypeScript</span>), but my experience includes React Native, PHP, .NET, SQL, Mongo and more.
                        </p>
                        <p>
                            In{' '}
                            <a
                                href="https://github.com/jvidalv"
                                target="_blank"
                                className={styles.github}>
                                Github
                            </a>{' '}
                            I have a collection of open source projects, like{' '}
                            <a
                                href="https://github.com/jvidalv/astrale"
                                target="_blank"
                                className={styles.astrale}>
                                Astrale
                            </a>
                            , a mobile app powered by React Native and Python.
                        </p>
                        <p>
                            From time to time I do side jobs for personal clients, if you are interested in having a
                            cutting edge, well document codebase{' '}
                            <a className={styles.contact} href="mailto:josepvidalvidal@gmail.com">
                                contact me
                            </a>
                            .
                        </p>
                        <p>🚀🌕</p>
                    </div>
                </Row>
            </section>
        </main>
    </div>
);
