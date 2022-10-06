import React from "react";
import {Link} from "gatsby";
import EcosystemWard from "../videos/ward-small.png";
import EcosystemWardPage from "../videos/wardpage.png";
import EcosystemWards from "../videos/ward.png";
import {useState, useEffect} from "react";

const menu = require('../contents/urls.json');

const EcosystemSection = () => {
    const [isSafari, setSafari] = useState(false);
    useEffect(() => {
    setSafari(/constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification)));
    });
    return (
        <section className={'ecosystem-section'}>
            <div className={'container'}>
                <div className={'row align-items-center'}>
                    <div className={'col-12 col-md-6'}>
                        <div className={'video-container'}>
                            <div className={'video-wrapper'}>
                                <div id={'video-bg'}/>
                                <video id={'ecosystem-video'} autoPlay={true} preload={'none'} loop={true} playsInline={true} muted={true} poster={EcosystemWardPage}>
                                    {isSafari &&
                                        <source src={EcosystemWard} type='video/mp4;codecs="hvc1"'/>
                                    }
                                    {!isSafari &&
                                        <source src={EcosystemWards} type="video/webm" />
                                    }
                                </video>
                            </div>
                        </div>
                    </div>
                    <div className={'col-12 col-md-6'}>
                        <legend data-sal="fade"
                                data-sal-delay="400"
                                data-sal-duration="1000">ECOSYSTEM</legend>
                        <h3 data-sal="fade"
                             data-sal-delay="200"
                             data-sal-duration="1000">Will be ready to host any awesome web3 dapps on Gitshøck Network</h3>
                        <div className={'text-box'} data-sal="fade"
                             data-sal-delay="600"
                             data-sal-duration="1000">
                            Discover the decentralized applications built on Gitshock or Neware chain and learn how to build your own.
                        </div>
                        <Link to={menu.ecosystem}>
                            <div className={'link'} data-sal="fade"
                                 data-sal-delay="800"
                                 data-sal-duration="1000"><i className={'icon-arrow-right'} aria-label={'View Ecosystem'}></i> View Ecosystem</div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EcosystemSection;

