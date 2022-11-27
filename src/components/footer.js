import React from "react";
import {Link} from "gatsby";
import {StaticImage} from "gatsby-plugin-image";
import FooterVideoMov from "../videos/footer-cropped.mp4";
import FooterVideo from "../videos/footer-cropped.webm";
import {useState, useEffect} from "react";

const menu = require('../contents/urls.json')

const Footer = () => {
    const [isSafari, setSafari] = useState(false)
    useEffect(() => {
        setSafari(/constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification)));
    });
    return (
        <footer>
            <div className={'video-container'}>
            </div>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-12 col-sm-8'}>
                        <h2>Learn About <br/>Gitshøck Finance</h2>

                        <div className={'row mt-4 mt-lg-5'}>
                            <div className={'col-12 col-sm-6 col-md-2 pb-4'}>
                                <legend>Build</legend>

                                <ul>
                                <li><a href={menu.docs} target={'_blank'} rel={'noreferrer'}>Docs</a></li>
                                    <li><a href={menu.github} target={'_blank'} rel={'noreferrer'}>Github</a></li>
                                    <li><Link to={menu.ecosystem}>Ecosystem</Link></li>
                                    <li><a href={menu.whitepaper} target={'_blank'} rel={'noreferrer'}>Whitepaper</a></li>
                                    <li><a href={menu.mediakit} target={'_blank'} rel={'noreferrer'}>Media Kit</a></li>

                                </ul>
                            </div>
                            <div className={'col-12 col-sm-6 col-md-3 pb-4'}>
                                <legend>Community</legend>

                                <ul>
                                <li><a href={menu.blog} target={'_blank'} rel={'noreferrer'}>Medium</a></li>
                                <li><a href={menu.twitter} target={'_blank'} rel={'noreferrer'}>Twitter</a></li>
                                <li><a href={menu.telegram} target={'_blank'} rel={'noreferrer'}>Telegram</a></li>
                                <li><a href={menu.discord} target={'_blank'} rel={'noreferrer'}>Discord</a></li>
                                <li><a href={menu.instagram} target={'_blank'} rel={'noreferrer'}>Instagram</a></li>
                                </ul>
                            </div>
                            <div className={'col-12 col-sm-6 col-md-3 pb-4'}>
                                <legend>Ecosystem</legend>

                                <ul>
                                <li><Link to={menu.ecosystem+''} state={{category:'dapp'}} target={'_blank'} rel={'noreferrer'}>Neware Contracts</Link></li>
                                    <li><Link to={menu.ecosystem+''} state={{category:'contracts'}} target={'_blank'} rel={'noreferrer'}>EVM Contracts</Link></li>
                                    <li><Link to={menu.ecosystem+'#wallet'} state={{category:'wallet'}} target={'_blank'} rel={'noreferrer'}>Wallet</Link></li>
                                    <li><Link to={menu.ecosystem+'#contracts'} state={{category:'contracts'}} target={'_blank'} rel={'noreferrer'}>Tools</Link></li>
                                    <li><Link to={menu.ecosystem+'#contracts'} state={{category:'contracts'}} target={'_blank'} rel={'noreferrer'}>DeFi</Link></li>
                                </ul>
                            </div>
                            <div className={'col-12 col-sm-6 col-md-4 pb-4'}>
                                <legend>Network</legend>

                                <ul>
                                <li><a href={menu.coingecko} target={'_blank'} rel={'noreferrer'}>CoinMarketCap</a></li>
                                    <li><a href={menu.explorer1} target={'_blank'} rel={'noreferrer'}>Nomics</a></li>
                                    <li><a href={menu.explorer2} target={'_blank'} rel={'noreferrer'}>Recent Coin</a></li>
                                    <li><a href={menu.explorer3} target={'_blank'} rel={'noreferrer'}>Coin Brain</a></li>
                                    <li><a href={menu.explorer4} target={'_blank'} rel={'noreferrer'}>Gitshock Scan</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={'black-box'}>
                    <div className={'row justify-content-between align-items-center'}>
                        <div className={'col-12 col-md-auto pb-3 pb-md-0'}>
                            <div className={'title'}>Meet the global social community:</div>
                        </div>
                        <div className={'col-12 col-md-auto'}>
                            <div className={'social'}>
                                <div className={'row justify-content-center justify-content-mb-end'}>
                                    <div className={'col-auto'}>
                                        <a href={menu.twitter} target={'_blank'} rel={'noreferrer'}><i className={'icon-social-twitter'} aria-label={'Twitter'}></i></a>
                                        <a href={menu.github} target={'_blank'} rel={'noreferrer'}><i className={'icon-social-github'} aria-label={'Github'}></i></a>
                                        <a href={menu.discord} target={'_blank'} rel={'noreferrer'}><i className={'icon-social-discord'} aria-label={'Discord'}></i></a>
                                        <a href={menu.telegram} target={'_blank'} rel={'noreferrer'}><i className={'icon-social-telegram'} aria-label={'Telegram'}></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={'copyright'}>
                    <div className={'row align-items-center justify-content-center'}>
                        <div className={'col-auto'}>
                            <div className={'row'}>
                                <div className={'col-auto'}>Website created by</div>
                                <div className={'col-auto px-0'}>
                                    <a href="https://designatives.com" target={'_blank'} rel={'noreferrer'}>
                                        <StaticImage
                                            src={'../images/designatives-logo.svg'}
                                            alt={'Designatives'}
                                            width={100}
                                            height={18}
                                            placeholder="blurred"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
