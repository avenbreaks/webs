import React from "react";
import PiechartVideoMov from "../videos/piechart.mp4";
import PiechartVideo from "../videos/piechart.webm";
import PiechartPoster from "../videos/piechart.png"

import PieChart from "../videos/pie.png";
import PieChartPosters from "../videos/pieposter.png";
import PieChartMov from "../videos/piemov.png";

import {useState, useEffect} from "react";

const PiechartSection = () => {
    const [isSafari, setSafari] = useState(false);
    useEffect(() => {
    setSafari(/constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification)));
    });
    return (
        <div className={'row piechart'}>
            <div className={'col-12 col-md-7 pe-md-5'}>
                <div className={'video-container'}>
                    <div className={'video-wrapper'}>
                        <div className={'chart-text'}>
                        </div>
                        <video autoPlay={true} loop={false} playsInline={true} muted={true} poster={PieChartPosters}>
                            {isSafari &&
                                <source src={PieChartMov} type='video/mp4;codecs="hvc1"'/>
                            }
                            {!isSafari &&
                                <source src={PieChart} type="video/webm" />
                            }
                        </video>
                    </div>
                </div>
            </div>
            <div className={'col-12 col-md-5 pt-5 pt-md-0'}>
                <h3
                    data-sal="fade"
                    data-sal-delay="200"
                    data-sal-duration="1000">Token Economics</h3>
                <div className={'text-box'}
                     data-sal="fade"
                     data-sal-delay="400"
                     data-sal-duration="1000">
                    <p>Gitshock Token (GTFX) Maximum supply will be 1.05 B consisting of 400 M for all bridge supporting networks, i.e. BSC, Ethereum, Aurora/Near, Polygon, Metis, Fantom, Avalanche and Solana and 650 M for the main network layer 0 Cosmos and the Gitshock's EVM network.</p>
                </div>

                <div className={'black-box'}
                     data-sal="fade"
                     data-sal-delay="600"
                     data-sal-duration="1000">
                    <ul>
                    <li>Interchain token designs with 1:1 bridging comparison</li>
                        <li>Genesis Airdrop For Cosmos Staker</li>
                        <li>Supporting zero carbon PoS consensus</li>
                        <li>Also Built On Several Top EVM Networks</li>
                        <li>Open For Backers.&nbsp;<a href="https://swap.gitshock.com"> Back Us &#x2197;</a></li>
                        <li><a href="https://swap.gitshock.com">Join Private Sale and ICO &#x2197;</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default PiechartSection;
