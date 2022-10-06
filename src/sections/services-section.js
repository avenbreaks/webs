import React from "react";
import {StaticImage} from "gatsby-plugin-image";
import PiechartSection from "./piechart-section";

import { Parallax } from 'react-scroll-parallax';

const menu = require('../contents/urls.json');

export function ServicesSection() {
        return (
            <section className={'services-section'}>
                <div className={'section-bg'}/>
                <div className={'container'}>
                    <div className={'row'} data-masonry='{"percentPosition": true }'>
                        <div className={'col-12 col-sm-6'}>
                            <div className={'service cosmostation'}
                                 data-sal="slide-up"
                                 data-sal-delay="200"
                                 data-sal-duration="1000">
                                <div className={'inner'}>
                                    <div className={'title'}>Gitshøck Wallet Extension</div>
                                    <div className={'text-box'}>
                                    Multichain wallet for storing crypto assets from Various Networks. Available for mobile and chrome extension.<br/>
                                    <br/>
                                    </div>
                                    <div className={'row'}>
                                        <div className={'col-auto'}>
                                            <a href={menu.cosmostation} target={'_blank'} rel={'noreferrer'}>
                                                <button type={'button'}>Soon On Chrome</button>
                                            </a>
                                        </div>
                                        <div className={'col-auto'}>
                                            <a href={menu['cosmostation-use']} target={'_blank'} rel={'noreferrer'}>
                                                <div className={'link'}><i className={'icon-arrow-right'}></i>How to use it?</div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'col-12 col-sm-6'}>
                            <div className={'service staking-juno'}
                                 data-sal="slide-up"
                                 data-sal-delay="200"
                                 data-sal-duration="1000">
                                <div className={'inner'}>
                                    <div className={'title'}>Gitshøck Swap</div>
                                    <div className={'text-box'}>
                                    Gitshock Swap is a multinetwork decentralized exchange (DEX) aggregator powered by GTFX token.<br/>
                                    <br/>
                                    </div>
                                    <div className={'row'}>
                                        <div className={'col-auto'}>
                                            <a href={menu['staking-juno']} target={'_blank'} rel={'noreferrer'}>
                                                <button type={'button'}>Swap Now</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'col-12 col-sm-6'}>
                            <div className={'service keplr-wallet'}
                                 data-sal="slide-up"
                                 data-sal-delay="200"
                                 data-sal-duration="1000">
                                <div className={'inner'}>
                                    <div className={'title'}>Gitshøck Edgeware</div>
                                    <div className={'text-box'}>
                                    Deploy your own EVM token in one click or create blockchain using githock edgeware securely.<br/>
                                    <br/>
                                    </div>
                                    <div className={'row'}>
                                        <div className={'col-auto'}>
                                            <a href={menu.keplr} target={'_blank'} rel={'noreferrer'}>
                                                <button type={'button'}>Coming Soon</button>
                                            </a>
                                        </div>
                                        <div className={'col-auto'}>
                                            <a href={menu['keplr-use']} target={'_blank'} rel={'noreferrer'}>
                                                <div className={'link'}><i className={'icon-arrow-right'}></i>How to use it?</div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'col-12 col-sm-6'}>
                            <div className={'service keplr-wallet'}
                                 data-sal="slide-up"
                                 data-sal-delay="200"
                                 data-sal-duration="1000">
                                <div className={'inner'}>
                                    <div className={'title'}>Gitshøck Enterprise</div>
                                    <div className={'text-box'}>
                                    Blockchain offers efficient, dynamic and transparent financial system. Gitshock’s crypto solutions for enterprise empower innovative finance leaders to drive their business advantage from customized blockchain technology today.<br/>
                                    <br/>
                                    </div>
                                    <div className={'row'}>
                                        <div className={'col-auto'}>
                                            <a href={menu.keplr} target={'_blank'} rel={'noreferrer'}>
                                                <button type={'button'}>Coming Soon</button>
                                            </a>
                                        </div>
                                        <div className={'col-auto'}>
                                            <a href={menu['keplr-use']} target={'_blank'} rel={'noreferrer'}>
                                                <div className={'link'}><i className={'icon-arrow-right'}></i>How to use it?</div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={'row junoswap'}>
                        <Parallax translateY={['100px', '0px']}>
                            <div className={'junoswap-graph'}>
                                <StaticImage
                                    src={''}
                                    alt={'Smart Contracts'}
                                    width={827}
                                    height={781}
                                    placeholder="blurred"
                                />
                            </div>
                        </Parallax>
                        <div className={'col-12 col-md-12 col-lg-5 pe-lg-4 z-index-front'}>
                            <h3
                                data-sal="fade"
                                data-sal-delay="200"
                                data-sal-duration="1000">
                                Easy access to GitshockSwap
                            </h3>
                            <div className={'text-box pe-5'}
                                 data-sal="fade"
                                 data-sal-delay="400"
                                 data-sal-duration="1000">
                                Swap, Mint Token & Add LP your GTFX on the GitshockSwap.
                            </div>
                            <div className={'row mt-4'}
                                 data-sal="fade"
                                 data-sal-delay="600"
                                 data-sal-duration="1000">
                                <div className={'col-auto pb-3'}>
                                    <a href={menu.junoswap} target={'_blank'} rel={'noreferrer'}>
                                        <button type={'button'}>Enter GitshockSwap</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={'col-12 col-md-12 col-lg-7 ps-lg-5'}>
                            <div className={'junoswap-box'}
                                 data-sal="fade"
                                 data-sal-delay="400"
                                 data-sal-duration="1000">
                                <StaticImage
                                    src={'../images/junoswap-logo.png'}
                                    alt={'Junoswap'}
                                    width={258}
                                    height={59}
                                    placeholder="blurred"
                                />
                                <a href={menu['connect-keplr']} target={'_blank'} rel={'noreferrer'}
                                   data-sal="fade"
                                   data-sal-delay="600"
                                   data-sal-duration="1000">
                                    <button type={'button'} className={'button-white mt-4'}>Connect Metamask</button>
                                </a>

                                <div className={'row mt-4 pt-2 pt-lg-3'}>
                                    <div className={'col-1'}>
                                        <i className={'icon-hash'}></i>
                                    </div>
                                    <div className={'col-10'}>
                                        Swap
                                    </div>
                                </div>

                                <div className={'row mt-3 pt-2 pt-lg-3'}>
                                    <div className={'col-1'}>
                                        <i className={'icon-transfer'}></i>
                                    </div>
                                    <div className={'col-10'}>
                                        Mint
                                    </div>
                                </div>

                                <div className={'row mt-3 pt-2 pt-lg-3'}>
                                    <div className={'col-1'}>
                                        <i className={'icon-liquidity'}></i>
                                    </div>
                                    <div className={'col-10'}>
                                        Liquidity
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <PiechartSection/>

                </div>
            </section>
        );
}

export default ServicesSection;
