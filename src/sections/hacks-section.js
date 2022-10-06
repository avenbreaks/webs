import React from "react";
import {StaticImage} from "gatsby-plugin-image";
import {Parallax} from "react-scroll-parallax";

const menu = require('../contents/urls.json');

class HackSection extends React.Component {

    render() {
        return (
            <section className={'hacks-section'}>
                <div className={'bg'}/>
                <div className={'container'}>
                    <div className={'row align-items-center mb-5'}>
                        <div className={'col-12 col-md-6 pe-md-5'}>
                            <h3 className={'mb-4'}
                                data-sal="fade"
                                data-sal-delay="200"
                                data-sal-duration="1000">
                                Technology Behind <br />
                                The Network</h3>
                            <div className={'text-box'}
                                 data-sal="fade"
                                 data-sal-delay="400"
                                 data-sal-duration="1000">
                                <p>
                                Gitshøck Finance project is not only just another token project, it is also developing the mainnet layer 1 based on
                                </p>
                                <p>
                                Ethereum and Cosmos Network. With the reliable technologies from Cosmos SDK, Tendermint Core, Ethereum Virtual Machines, Gitshock Netwørk will enable interoperable smart contract between IBC and EVM.
                                </p>
                            </div>
                            <a href={menu["hacks-and-bounties"]} target={'_blank'} rel={'noreferrer'}>
                                <div className={'link'} data-sal="fade"
                                     data-sal-delay="600"
                                     data-sal-duration="1000"><i className={'icon-arrow-right'}></i> Learn more</div>
                            </a>
                        </div>
                        <div className={'col-12 col-md-6 pt-5 pt-md-0 ps-md-5'}>
                            <div className={'row'}>
                                <div className={'col-12 col-sm-6'}>
                                    <div className={'bounty first'}>
                                        <div className={'image'}>
                                            <StaticImage
                                                src={'../images/decentralized-finance.png'}
                                                alt={'Cosmos SDK'}
                                                width={218}
                                                height={96}
                                                placeholder="blurred"
                                            />
                                        </div>
                                        <div className={'title'}>Cosmos SDK</div>
                                        <div className={'text-box'}>
                                        The Cosmos-SDK is a platform for building multi-asset Proof-of-Stake (PoS) blockchains, like the Cosmos Hub. <a href="https://cosmos-network.gitbooks.io/cosmos-academy/content/cosmos-for-developers/cosmos-sdk.html">  Learn it here&#x2197;</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={'col-12 col-sm-6'}>
                                    <div className={'bounty'}>
                                        <div className={'image'}>
                                            <StaticImage
                                                src={'../images/gaming.png'}
                                                alt={'Tendermint'}
                                                width={96}
                                                height={97}
                                                placeholder="blurred"
                                            />
                                        </div>
                                        <div className={'title'}>Tendermint</div>
                                        <div className={'text-box'}>
                                        Tendermint is software for securely and consistently replicating an application on many machines. <br/>
                                        <a href="https://docs.tendermint.com/master/introduction/what-is-tendermint.html"> Learn it here&#x2197;</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={'col-12 col-sm-6'}>
                                    <div className={'bounty'}>
                                        <div className={'image'}>
                                            <StaticImage
                                                src={'../images/non-fungible-tokens.png'}
                                                alt={'Ethereum Virtual Machine'}
                                                width={96}
                                                height={96}
                                                placeholder="blurred"
                                            />
                                        </div>
                                        <div className={'title'}>Ethereum Virtual Machine</div>
                                        <div className={'text-box'}>
                                        Ethereum Virtual machine serves as a layer of abstraction between both the code being executed and the system on which it is being executed. <a href="https://ethereum.org/en/developers/docs/evm/"> Learn it here&#x2197;</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={'col-12 col-sm-6'}>
                                    <div className={'bounty'}>
                                        <div className={'image'}>
                                            <StaticImage
                                                src={'../images/privacy.png'}
                                                alt={'Cosmos IBC'}
                                                width={96}
                                                height={96}
                                                placeholder="blurred"
                                            />
                                        </div>
                                        <div className={'title'}>Cosmos IBC</div>
                                        <div className={'text-box'}>
                                        The inter-blockchain communication (IBC) rotocol is a reliable & secure inter-module communication protocol that enables a secure interoperability between chains. <b/>
                                        <a href="https://docs.cosmos.network/master/ibc/overview.html"> Learn it here&#x2197;</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={'row pt-md-5 align-items-top'}>
                        <div className={'col-12 col-md-6 pe-md-5'}>
                            <Parallax translateY={['20%', '0%']}>
                                <StaticImage
                                    src={'../images/cosmwasm.png'}
                                    alt={'Interoperable Smart Contracts - Home of CosmWasm'}
                                    placeholder="blurred"
                                />
                            </Parallax>
                        </div>
                        <div className={'col-12 col-md-6'}>
                            <legend
                                data-sal="fade"
                                data-sal-delay="100"
                                data-sal-duration="1000">Open Ware SDK</legend>
                            <h3 className={'mb-4'}
                                data-sal="fade"
                                data-sal-delay="200"
                                data-sal-duration="1000">Interoperability between Cosmøs and EVM.</h3>
                            <div className={'text-box'}
                                 data-sal="fade"
                                 data-sal-delay="400"
                                 data-sal-duration="1000">
                                Home for interchain EVM Decentralized Apps powered by Cosmos SDK and Tendermint Core which enables fast and secure transaction.
                            </div>

                            <a href={menu["cosmwasm"]} target={'_blank'} rel={'noreferrer'}>
                                <div className={'link'}
                                     data-sal="fade"
                                     data-sal-delay="600"
                                     data-sal-duration="1000"><i className={'icon-arrow-right'}></i> Learn more</div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default HackSection;
