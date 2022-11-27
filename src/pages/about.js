import * as React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Layout from "../components/layout";
import Ecosystem from "../components/ecosystem";

import EcosystemFlow from "../videos/flow-small.png";
import EcosystemFlowPage from "../videos/flowpage.png";
import EcosystemFlows from "../videos/flow.png";

import { useState, useEffect } from "react";

const menu = require('../contents/urls.json');
const ecosystems = require('../contents/about.json');
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
                                    data-sal-duration="1000">About Gitshøck
                                </h1>

                                <div className={'text-box'} data-sal="fade"
                                    data-sal-delay="400"
                                    data-sal-duration="1000">
                                    Gitshøck Finance is a blockchain project created using Cosmos and Ethereum Virtual Machine which aims to provide a suitable network where developers can build on with affordale fees and fast transaction.  
                                    <br/>
                                    <br/>The team intends to build their own native projects on the network such as token builder, blockchain builder, Gitshøck Swap, Gitshøck Wallet, and will allow everyone to build their own projects, govern, operate the network and more.</div>
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
                                    data-sal-duration="1000"></h5>
                            </div>
                            <div className={'col-12 col-md-auto'}>
                                <nav>
                                    <div className="nav nav-tabs" id="filter-nav" role="tablist">
                                        <button className="nav-link active" id="nav-all-tab"
                                            onClick={() => toggleNav()}
                                            data-bs-toggle="tab" data-bs-target="#nav-all" type="button"
                                            role="tab" aria-controls="nav-all" aria-selected="true">Teams
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
                                        <h6 className={'mb-2'}>Core Teams</h6>
                                    </div>
                                    {ecosystems.map((ecosystem, index) => {
                                        return (
                                            ecosystem.featured && (<div key={index} className={'col-12 col-sm-6 col-md-3 p-2'}>
                                                <Ecosystem ecosystem={ecosystem} />
                                            </div>)
                                        )
                                    })}
                                </div>
                                <div className={'row justify-content-between'}>
                            <div className={'col-auto'}>
                                <h5 className={'mb-3 mb-lg-4 mb-xl-5'}
                                    data-sal="fade"
                                    data-sal-delay="200"
                                    data-sal-duration="1000"></h5>
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

                            <div className="tab-pane fade" id="nav-contracts" role="tabpanel"
                                aria-labelledby="nav-contracts-tab">
                                <div className={'row mt-5'}>
                                    <div className={'col-12'}>
                                        <h6 className={'mb-2'}>Wallet</h6>
                                    </div>
                                </div>
                                <div className={'row'}>
                                    {ecosystems.map((ecosystem, index) => {
                                        return (
                                            ecosystem.category === 'Contract' && (<div key={index} className={'col-6 col-md-3 p-2'}>
                                                <Ecosystem ecosystem={ecosystem} />
                                            </div>)
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
                                            ecosystem.category === 'Tool' && (<div key={index} className={'col-6 col-md-3 p-2'}>
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
                                        <h6 className={'mb-2'}>DAOs</h6>
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
                                            Have an ongoing project coming up on Gitshock? Let us know. <a className={'p-1'} href={'https://github.com/gitshock-labs/'} target={'_blank'} rel={'noreferrer'}><i className={'icon-social-github'} aria-label={'Github'}></i></a>
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