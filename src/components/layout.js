import React from "react"
import Footer from "./footer";
import Header from "./header";
import {Helmet} from "react-helmet";
import { ParallaxProvider } from 'react-scroll-parallax';

import ogimage from '../images/ogimage.png';
import favicon from '../images/favicons/apple-icon-57x57.png';
import favicon72 from '../images/favicons/apple-icon-72x72.png';

export default function Layout({ children }) {

    return (
        <div>
            <Helmet>
                <html lang="en" />

                <script src="https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js"
                        integrity="sha384-GNFwBvfVxBkLMJpYMOABq3c+d3KnQxudP/mGPkzpZSTYykLBNsZEnG2D9G/X/+7D"
                        crossOrigin="anonymous" async></script>

                <meta charSet="utf-8" />
                <title>Gitshøck Finance - Blockchain Infrastructure For All</title>
                <meta name={'title'} content={'Gitshøck Finance - Blockchain Infrastructure For All'} />
                <meta name={'description'} content={'Gitshock is bringing EVM based chains to the interoperable networks of the Cosmos ecosystem. Gitshock is aiming to involve non-crypto business to the network while providing easiness for the ecosystem!'} />

                <meta content="Blockchain Infrastructure For All" property="og:site_name"/>
                <meta content="https://gitshock.com" property="og:url"/>
                <meta property="og:title" content="Gitshøck Finance - Blockchain Infrastructure For All" />
                <meta name={'og:description'} content={'Gitshock is bringing EVM based chains to the interoperable networks of the Cosmos ecosystem. Gitshock is aiming to involve non-crypto business to the network while providing easiness for the ecosystem!'} />
                <meta content={ogimage} property="og:image"/>

                <link rel="canonical" href="https://gitshock.com" />

                <link rel="apple-touch-icon" href={favicon} />
                <link rel="apple-touch-icon" sizes="72x72" href={favicon72} />

                <meta name="theme-color" content="#312526"/>

                <meta property="article:publisher" content="https://gitshock.com" />
                <meta property="og:site_name" content="Gitshøck Finance - Blockchain Infrastructure For All" />
                <meta property="og:type" content="website" />
                <meta name="author" content="Gitshøck Finance - Blockchain Infrastructure For All" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:text:title" content="Gitshøck Finance - Blockchain Infrastructure For All" />
                <meta property="og:url" content="https://gitshock.com" />

                <meta property="og:image" content={ogimage} key="ogimage" />
                <meta property="og:image:height" content={930} />
                <meta property="og:image:width" content={1900} />
                <meta name="twitter:image" content={ogimage} key="twimage" />
                <meta name="twitter:card" content="summary_large_image"/>

            </Helmet>
            <Header/>
            <ParallaxProvider>
                <main>
                    {children}
                    <Footer/>
                </main>
            </ParallaxProvider>
        </div>
    )
}
