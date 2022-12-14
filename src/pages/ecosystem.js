import * as React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Layout from "../components/layout";
import Ecosystem from "../components/ecosystem";

import EcosystemFlow from "../videos/flow-small.png";
import EcosystemFlowPage from "../videos/flowpage.png";
import EcosystemFlows from "../videos/flow.png";

import { useState, useEffect } from "react";

const menu = require('../contents/urls.json');
const ecosystems = require('../contents/ecosystems.json');
const daos = require('../contents/daos.json');

function toggleNav() {
    document.getElementById('filter-nav').classList.toggle('opened');
}

function loadTab(props) {
    const currentCategory = props.location.hash ? props.location.hash.substring(1) : 'all';
    document.getElementById('nav-' + currentCategory + '-tab').click();
}

const EcosystemPage = (props) => {
    function checkSoon() {
        for (var index = 0; index < ecosystems.length; ++index) {
            var ecosystem = ecosystems[index];
            if (ecosystem.category == "Soon") {
                setSoon(true);
                break;
            }
        }
    }
    const [hasSoon, setSoon] = useState(false);
    const [isSafari, setSafari] = useState(false);
    useEffect(() => {
        loadTab(props);
        checkSoon()
        document.getElementById('filter-nav').classList.remove('opened');
        window.scrollTo(0, 0)
        setSafari(/constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification)));
    });
    return (
        <div className={'ecosystem-page'}>
            <Layout>
                <section className={'hero-section'}>
                    <div className={'container'}>
                        <div className={'video-container'}>
                            <div className={'video-wrapper'}>
                                <div className={'video-bg'} />
                                <video autoPlay={true} loop={true} preload={'none'} playsInline={true} muted={true} poster={EcosystemFlowPage}>
                                    {isSafari &&
                                        <source src={EcosystemFlow} type='video/mp4;codecs="hvc1"' />
                                    }
                                    {!isSafari &&
                                        <source src={EcosystemFlows} type="video/webm" />
                                    }
                                </video>
                            </div>
                        </div>
                        <div className={'row'}>
                            <div className={'col-12 col-sm-8 col-xl-10'}>
                                <h1 data-sal="fade"
                                    data-sal-delay="200"
                                    data-sal-duration="1000">Gitsh??ck Ecosystem
                                </h1>

                                <div className={'text-box'} data-sal="fade"
                                    data-sal-delay="400"
                                    data-sal-duration="1000">
                                    I want to... 
                                    <br/>
                                    <br/><a href="https://gitshock.gitbook.io/gitshock-finance/developers/getting-started">Develop &#x2197;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a><a href="https://swap.gitshock.com">Govern &#x2197;</a>
                                    <br/><a href="https://gitshock.gitbook.io/gitshock-finance/networks-guides/evm-network-guide">Operate &#x2197;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a><a href="https://swap.gitshock.com">Discover &nbsp;GTFX &#x2197;</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id={'browse'} className={'search-section mt-4 mt-lg-5'}>
                    <div className={'container'}>
                        <div className={'row justify-content-between'}>
                            <div className={'col-auto'}>
                                <h5 className={'mb-3 mb-lg-4 mb-xl-5'}
                                    data-sal="fade"
                                    data-sal-delay="200"
                                    data-sal-duration="1000">Browse Gitsh??ck Ecosystem
                                </h5>
                            </div>
                            <div className={'col-12 col-md-auto'}>
                                <nav>
                                    <div className="nav nav-tabs" id="filter-nav" role="tablist">
                                        <button className="nav-link active" id="nav-all-tab"
                                            onClick={() => toggleNav()}
                                            data-bs-toggle="tab" data-bs-target="#nav-all" type="button"
                                            role="tab" aria-controls="nav-all" aria-selected="true">All
                                        </button>
                                        <button className="nav-link" id="nav-dapp-tab"
                                            onClick={() => toggleNav()}
                                            data-bs-toggle="tab" data-bs-target="#nav-dapp" type="button"
                                            role="tab" aria-controls="nav-dapp" aria-selected="true">Dapp
                                        </button>
                                        <button className="nav-link" id="nav-defi-tab" data-bs-toggle="tab"
                                            onClick={() => toggleNav()}
                                            data-bs-target="#nav-defi" type="button" role="tab"
                                            aria-controls="nav-contracts" aria-selected="false">DeFi
                                        </button>
                                        <button className="nav-link" id="nav-wallet-tab" data-bs-toggle="tab"
                                            onClick={() => toggleNav()}
                                            data-bs-target="#nav-wallet" type="button" role="tab"
                                            aria-controls="nav-wallet" aria-selected="false">Wallet
                                        </button>
                                        <button className="nav-link" id="nav-nft-tab" data-bs-toggle="tab"
                                            onClick={() => toggleNav()}
                                            data-bs-target="#nav-nft" type="button" role="tab"
                                            aria-controls="nav-soon" aria-selected="false">NFT
                                        </button>
                                        <button className="nav-link" id="nav-dao-tab" data-bs-toggle="tab"
                                            onClick={() => toggleNav()}
                                            data-bs-target="#nav-dao" type="button" role="tab"
                                            aria-controls="nav-dao" aria-selected="false">Dao
                                        </button>
                                        <button className="nav-link" id="nav-tools-tab" data-bs-toggle="tab"
                                            onClick={() => toggleNav()}
                                            data-bs-target="#nav-tools" type="button" role="tab"
                                            aria-controls="nav-soon" aria-selected="false">Tools
                                        </button>
                                        <button className="nav-link" id="nav-soon-tab" data-bs-toggle="tab"
                                            onClick={() => toggleNav()}
                                            data-bs-target="#nav-soon" type="button" role="tab"
                                            aria-controls="nav-soon" aria-selected="false">Soon
                                        </button>
                                    </div>
                                </nav>
                            </div>
                        </div>


                        <div className="tab-content pt-3" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-all" role="tabpanel"
                                aria-labelledby="nav-all-tab">
                                <div className={'row'}>
                                    <div className={'col-12'}>
                                        <h6 className={'mb-2'}>Featured</h6>
                                    </div>
                                    {ecosystems.map((ecosystem, index) => {
                                        return (
                                            ecosystem.featured && (<div key={index} className={'col-12 col-sm-6 col-md-3 p-2'}>
                                                <Ecosystem ecosystem={ecosystem} />
                                            </div>)
                                        )
                                    })}
                                </div>
                                <div className={'row mt-5'}>
                                    <div className={'col-12'}>
                                        <h6 className={'mb-2'}>All Ecosystems</h6>
                                    </div>
                                </div>

                                <div className={'row'}>
                                    {ecosystems.map((ecosystem, index) => {
                                        return (
                                            !ecosystem.featured && ecosystem.category !== 'Contract' && (<div key={index} className={'col-6 col-md-3 p-2'}>
                                                <Ecosystem ecosystem={ecosystem} />
                                            </div>)
                                        )
                                    })}
                                </div>
                            </div>

                            <div className="tab-pane fade" id="nav-dapp" role="tabpanel"
                                aria-labelledby="nav-dapp-tab">
                                <div className={'row mt-5'}>
                                    <div className={'col-12'}>
                                        <h6 className={'mb-2'}>DAPPS</h6>
                                    </div>
                                </div>
                                <div className={'row'}>
                                    {ecosystems.map((ecosystem, index) => {
                                        return (
                                            ecosystem.category === 'Dapp' && (<div key={index} className={'col-6 col-md-3 p-2'}>
                                                <Ecosystem ecosystem={ecosystem} />
                                            </div>)
                                        )
                                    })}
                                </div>
                            </div>

                            <div className="tab-pane fade" id="nav-defi" role="tabpanel"
                                aria-labelledby="nav-defi-tab">
                                <div className={'row mt-5'}>
                                    <div className={'col-12'}>
                                        <h6 className={'mb-2'}>DeFi</h6>
                                    </div>
                                </div>
                                <div className={'row'}>
                                    {ecosystems.map((ecosystem, index) => {
                                        return (
                                            ecosystem.category === 'DeFi' && (<div key={index} className={'col-6 col-md-3 p-2'}>
                                                <Ecosystem ecosystem={ecosystem} />
                                            </div>)
                                        )
                                    })}
                                </div>
                            </div>

                            <div className="tab-pane fade" id="nav-wallet" role="tabpanel"
                                aria-labelledby="nav-wallet-tab">
                                <div className={'row mt-5'}>
                                    <div className={'col-12'}>
                                        <h6 className={'mb-2'}>Wallet</h6>
                                    </div>
                                </div>
                                <div className={'row'}>
                                    {ecosystems.map((ecosystem, index) => {
                                        return (
                                            ecosystem.category === 'Wallet' && (<div key={index} className={'col-6 col-md-3 p-2'}>
                                                <Ecosystem ecosystem={ecosystem} />
                                            </div>)
                                        )
                                    })}
                                </div>
                            </div>

                            <div className="tab-pane fade" id="nav-nft" role="tabpanel"
                                aria-labelledby="nav-nft-tab">
                                <div className={'row mt-5'}>
                                    <div className={'col-12'}>
                                        <h6 className={'mb-2'}>Non-Fungible Tokens</h6>
                                    </div>
                                </div>
                                <div className={'row'}>
                                    {ecosystems.map((ecosystem, index) => {
                                        return (
                                            ecosystem.category === 'NFT' && (<div key={index} className={'col-6 col-md-3 p-2'}>
                                                <Ecosystem ecosystem={ecosystem} />
                                            </div>)
                                        )
                                    })}
                                </div>
                            </div>

                            <div className="tab-pane fade" id="nav-dao" role="tabpanel"
                                aria-labelledby="nav-dao-tab">
                                <div className={'row mt-5'}>
                                    <div className={'col-12'}>
                                        <h6 className={'mb-2'}>Dao</h6>
                                    </div>
                                </div>
                                <div className={'row'}>
                                    {daos.map((dao, index) => {
                                        return (
                                            <div key={index} className={'col-6 col-md-3 p-2'}>
                                                <Ecosystem ecosystem={dao} />
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                            <div className="tab-pane fade" id="nav-tools" role="tabpanel"
                                aria-labelledby="nav-tools-tab">
                                <div className={'row mt-5'}>
                                    <div className={'col-12'}>
                                        <h6 className={'mb-2'}>Tools</h6>
                                    </div>
                                </div>
                                <div className={'row'}>
                                    {ecosystems.map((ecosystem, index) => {
                                        return (
                                            ecosystem.category === 'Tools' && (<div key={index} className={'col-6 col-md-3 p-2'}>
                                                <Ecosystem ecosystem={ecosystem} />
                                            </div>)
                                        )
                                    })}
                                </div>
                            </div>

                            <div className="tab-pane fade" id="nav-soon" role="tabpanel"
                                aria-labelledby="nav-soon-tab">
                                <div className={'row mt-5'}>
                                    <div className={'col-12'}>
                                        <h6 className={'mb-2'}>Coming Soon</h6>
                                    </div>
                                </div>
                                <div className={'row'}>
                                    {hasSoon && ecosystems.map((ecosystem, index) => {
                                        return (
                                            ecosystem.category === 'Soon' && (<div key={index} className={'col-6 col-md-3 p-2'}>
                                                <Ecosystem ecosystem={ecosystem} />
                                            </div>)
                                        )
                                    })}
                                    {!hasSoon &&
                                        <div className={'text-box'} data-sal="fade">
                                            Have an ongoing project coming up on Gitshock? Let us know. <a className={'p-1'} href={'https://github.com/gitshock-labs'} target={'_blank'} rel={'noreferrer'}><i className={'icon-social-github'} aria-label={'Github'}></i></a>
                                        </div>
                                    }
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    )
}

export default EcosystemPage