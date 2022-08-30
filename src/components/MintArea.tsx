import { useEthers, useCall, useContractFunction, useEtherBalance } from "@usedapp/core";
import { Contract } from "ethers";
import ContractABI from '../ContractABI.json';
import { utils, ethers } from 'ethers';
import React, { useState,useEffect } from 'react';
import '../main.css';
import { debug } from "console";

const contractInterface = new ethers.utils.Interface(ContractABI);
const contractAddress = '0x3554f7E80DAD34fD22Eb388a7Cae33BcA5a5c833';

const contractContract = new Contract(contractAddress, contractInterface);

console.log("ContractAddress = ", contractAddress);

function AlertPrice(price: string) {
    alert("require " + `${price}` + "ETH to mint");
}

function AlertWhitelist() {
    alert("you're not whitelisted");
}

function GetSupply() {
    const { account } = useEthers()
    const { value, error } =
        useCall(
            account &&
            contractAddress && {
                contract: contractContract,
                method: "totalSupply", // Method to be called
                args: [], // Method arguments - address to be checked for balance
            }
        ) ?? {};
    return value ? value.toString() + '/888' : '0/888';
}

function GetMaxMintAmount() {
    const { account } = useEthers()

    const { value: mintedAmount } = useCall(account &&
        contractAddress && {
        contract: contractContract,
        method: "numberMinted",
        args: [account],
    }) ?? {};

    const { value: maxAmount } = useCall(account &&
        contractAddress && {
        contract: contractContract,
        method: "mintPerAddressLimit",
        args: [],
    }) ?? {};

    return (mintedAmount && maxAmount) ? mintedAmount.toString() + "/" + maxAmount.toString() : '';
}

function GetMinted() {
    const { account } = useEthers()

    const { value: mintedAmount } = useCall(account &&
        contractAddress && {
        contract: contractContract,
        method: "numberMinted",
        args: [account],
    }) ?? {};

    return (mintedAmount) ? mintedAmount : 0;
}

export const MintArea = () => {
    const { account, chainId, activateBrowserWallet, deactivate } = useEthers()
    const isConnected = account !== undefined && chainId == 1
    const etherBalance = Number(useEtherBalance(account))
    const supply = GetSupply();

    const maxMintAmount = GetMaxMintAmount();
    const minted = GetMinted();

    const { state, send } = useContractFunction(contractContract, 'GeneralMint')
    function GeneralMint() {
        const mintAmount = String(lotCount);
        if (minted == 0) {
            send(mintAmount, {
                value: (parseFloat(mintAmount) * 3300000000000000 - 3300000000000000).toString()
            });
        }
        else {
            send(mintAmount, {
                value: (parseFloat(mintAmount) * 3300000000000000).toString()
            });
        }
    }

    let [lotCount, setLotCount] = useState(0);

    function incrementCount() {
        if (lotCount >= (3 - minted)) return;
        setLotCount(lotCount + 1);
    }
    function decrementCount() {
        if (lotCount <= 0) return;
        setLotCount(lotCount - 1);
    }
    return (
        <div style={{
            padding: '1vw', verticalAlign: 'middle', textAlign: 'center'
        }}>
            <div className="left-rigth-container" style={{marginTop: '-85px'}}>
                <div data-aos="fade-right">
                    <video id="nft-video" autoPlay muted loop>
                        <source src={require('../images/DemoNFT.mp4')}/>
                    </video>
                    <div className="TitleHeader" style={{ margin: '1vw' }}> {supply}</div>
                </div>
                <div id="mint-area" data-aos="fade-left">
                    <header> Mint Now!</header>
                    <div id="mint-description">
                        <p>-<span>ONLY 3</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure odio nihil beatae molestiae ut vero?</p>
                        <p>-<span>FREE 1</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure odio nihil beatae molestiae ut vero?</p>
                        <p>-<span>MAX 888</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure odio nihil beatae molestiae ut vero?</p>
                    </div>


                    {isConnected ?
                    //SHOW MINTED AMOUNT & MINT BUTTON
                        (
                            <div id="mint-controller">
                                < button className="NormalButton mint-square-btn" onClick={() => decrementCount()}> - </button>
                                <div id="mint-count">{lotCount}</div>
                                < button className="NormalButton mint-square-btn" onClick={() => incrementCount()}> + </button>
                                <div>
                                    < button className="NormalButton mint-btn" onClick={() => GeneralMint()} >Mint</button>
                                </div>
                            </div>
                        ) : (
                    //SHOW CONNECT BUTTONO
                            < button className="NormalButton mint-btn" onClick={() => activateBrowserWallet()}> Connect </button>
                        )
                    }
                    <p id="mint-minted"> you have minted {String(minted)} / 10 </p>
                </div>
            </div>
        </div >

    )
}