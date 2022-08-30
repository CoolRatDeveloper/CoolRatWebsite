import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { ChainId, DAppProvider,Config } from '@usedapp/core';
import { MintArea } from './components/MintArea';
import BrownConnect from './images/BrownConnect.png';
import Brown from './images/Brown.png';
import Banner from './images/ExoticOneImage.png';
import CoolOneImage from './images/CoolOneImage.png';
import CoolTwoImage from './images/CoolTwoImage.png';
import WildOneImage from './images/WildOneImage.png';
import WildTwoImage from './images/WildTwoImage.png';
import ClassyOneImage from './images/ClassyOneImage.png';
import ClassyTwoImage from './images/ClassyTwoImage.png';
import ExoticOneImage from './images/ExoticOneImage.png';
import ExoticTwoImage from './images/ExoticTwoImage.png';

import twitterPNG from './images/twitter.png';
import openseaPNG from './images/opensea.png';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const config: Config = {
  readOnlyChainId: ChainId.Mainnet,
  readOnlyUrls: {
    [ChainId.Mainnet]: `https://mainnet.infura.io/v3/ba30e50414ff488a8a09fb4619cc8891`,
  },
  notifications: {
    expirationPeriod: 1000,
    checkInterval: 1000
  }
}


function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    AOS.init({duration: 2000});
  }, []);
  

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <DAppProvider config={config}>
      <div id="all">
        <div id="sticky-bar"
          style={scrollPosition > 400 ? {
            boxShadow: '0px 0px 10px black', top: '0', backgroundColor: '#2D132C'
          } : { top: '-100px'}}>
          <header style={{ marginRight: '200px', color:'#fad021', fontSize:'50px'}}>Cool Rat NFT</header>
          <a href="#all" className='section-link'>Mint</a>
          <a href="#about-section" className='section-link'>About</a>
          <a href="#rarity-section" className='section-link'>Rarity</a>
          <a href="#faq-section" className='section-link'>FAQ</a>
          <a href="#team-section" className='section-link'>Team</a>
          <a href="#roadmap-section" className='section-link'>Roadmap</a>
          <a href="" className='TwitterButton'><img className='Icon-PNG' src={twitterPNG}></img></a>
          <a href="" className='OpenseaButton'> <img className='Icon-PNG' src={openseaPNG}></img></a>
        
        </div>

        <div id="mint-section">
          <MintArea />
        </div>

        <div id="about-section">
          <div className='left-rigth-container'>
            <div id="about-container" data-aos="fade-right">
              <header>About Cool Rat</header>
              <p id='about-description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, nam perspiciatis cum inventore quisquam illum dicta natus voluptatibus. Velit, porro voluptates cupiditate quo nulla doloribus, nobis a cum totam dolorem quam consectetur minus ex eos veritatis, possimus sequi nemo doloremque rem delectus commodi fugit laboriosam aliquid! Laboriosam odit ad impedit!</p>
            </div>
            <img id="about-img" data-aos="fade-left" src={CoolOneImage}></img>
          </div>
        </div>

        <div id="rarity-section">
          <header className="TitleHeader">How is the Rarity?</header>
          <p data-aos="fade-up" className='rarity-description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, nam perspiciatis cum inventore quisquam illum dicta natus voluptatibus. Velit, porro voluptates cupiditate quo nulla doloribus, nobis a cum totam dolorem quam consectetur minus ex eos veritatis, possimus sequi nemo doloremque rem delectus commodi fugit laboriosam aliquid! Laboriosam odit ad impedit!</p>
          <div id='rarity-container'>

            <div className="rarity-card" data-aos="flip-right">
              <img className="rarity-profile" src={CoolOneImage}></img>
              <header className='rarity-title'>Cool 1</header>
              <div className="rarity-rate">
                <p className='drop-chance'>Drop Chance</p>
                <p id="cool-1" className='drop-rate'>10%</p>
              </div>
            </div>

            <div className="rarity-card" data-aos="flip-right">
              <img className="rarity-profile" src={CoolTwoImage}></img>
              <header className='rarity-title'>Cool 2</header>
              <div className="rarity-rate">
                <p className='drop-chance'>Drop Chance</p>
                <p id="cool-2" className='drop-rate'>10%</p>
              </div>
            </div>

            <div className="rarity-card" data-aos="flip-right">
              <img className="rarity-profile" src={WildOneImage}></img>
              <header className='rarity-title'>Wild 1</header>
              <div className="rarity-rate">
                <p className='drop-chance'>Drop Chance</p>
                <p id="wild-1" className='drop-rate'>10%</p>
              </div>
            </div>

            <div className="rarity-card" data-aos="flip-right">
              <img className="rarity-profile" src={WildTwoImage}></img>
              <header className='rarity-title'>Wild 2</header>
              <div className="rarity-rate">
                <p className='drop-chance'>Drop Chance</p>
                <p id="wild-2" className='drop-rate'>10%</p>
              </div>
            </div>
            
          </div>

          <div id='rarity-container'>

            <div className="rarity-card" data-aos="flip-right">
              <img className="rarity-profile" src={ClassyOneImage}></img>
              <header className='rarity-title'>Classy 1</header>
              <div className="rarity-rate">
                <p className='drop-chance'>Drop Chance</p>
                <p id="classy-1" className='drop-rate'>10%</p>
              </div>
            </div>

            <div className="rarity-card" data-aos="flip-right">
              <img className="rarity-profile" src={ClassyTwoImage}></img>
              <header className='rarity-title'>Classy 2</header>
              <div className="rarity-rate">
                <p className='drop-chance'>Drop Chance</p>
                <p id="classy-2" className='drop-rate'>10%</p>
              </div>
            </div>

            <div className="rarity-card" data-aos="flip-right">
              <img className="rarity-profile" src={ExoticOneImage}></img>
              <header className='rarity-title'>Exotic 1</header>
              <div className="rarity-rate">
                <p className='drop-chance'>Drop Chance</p>
                <p id="exotic-1" className='drop-rate'>10%</p>
              </div>
            </div>

            <div className="rarity-card" data-aos="flip-right">
              <img className="rarity-profile" src={ExoticTwoImage}></img>
              <header className='rarity-title'>Exotic 2</header>
              <div className="rarity-rate">
                <p className='drop-chance'>Drop Chance</p>
                <p id="exotic-2" className='drop-rate'>10%</p>
              </div>
            </div>

          </div>
        </div>

        <div id="roadmap-section">
          <header className="TitleHeader">Roadmap</header>
          <div className='left-rigth-container'>
            <div className='roadmap-container'>
              <div className="roadmap-bubble-container" data-aos="fade-right">
                <p className='roadmap-bubble-day'>30</p>
                <p className='roadmap-bubble-month'>August</p>
                <p className='roadmap-bubble-time'>(USC+8)</p>
              </div>
            </div>
            <div data-aos="fade-left">
              <header>Presale</header>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptas quod nostrum dolore ipsam perspiciatis.</p>
            </div>
          </div>

          <div className='left-rigth-container'>
            <div className='roadmap-container'>
              <div className="roadmap-bubble-container" data-aos="fade-right">
                <p className='roadmap-bubble-day'>30</p>
                <p className='roadmap-bubble-month'>August</p>
                <p className='roadmap-bubble-time'>(USC+8)</p>
              </div>
            </div>
            <div data-aos="fade-left">
              <header>Presale</header>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptas quod nostrum dolore ipsam perspiciatis.</p>
            </div>
          </div>

          <div className='left-rigth-container'>
            <div className='roadmap-container'>
              <div className="roadmap-bubble-container" data-aos="fade-right">
                <p className='roadmap-bubble-day'>30</p>
                <p className='roadmap-bubble-month'>August</p>
                <p className='roadmap-bubble-time'>(USC+8)</p>
              </div>
            </div>
            <div data-aos="fade-left">
              <header>Presale</header>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptas quod nostrum dolore ipsam perspiciatis.</p>
            </div>
          </div>

          <div className='roadmap-bottom-line'></div>

          <header className="TitleHeader">After Sold</header>
          <div className='left-rigth-container'>
            <div className='up-down-container' data-aos="fade-up" data-aos-delay="200">
              <header>Task</header>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptas quod nostrum dolore ipsam perspiciatis.</p>
            </div>
            <div className='up-down-container' data-aos="fade-down" data-aos-delay="350">
              <header>Task</header>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptas quod nostrum dolore ipsam perspiciatis.</p>
            </div>
            <div className='up-down-container' data-aos="fade-up" data-aos-delay="500">
              <header>Task</header>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptas quod nostrum dolore ipsam perspiciatis.</p>
            </div>
            <div className='up-down-container' data-aos="fade-down" data-aos-delay="650">
              <header>Task</header>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptas quod nostrum dolore ipsam perspiciatis.</p>
            </div>
          </div>

        </div>

        <div id="faq-section" >
          <div style={{ textAlign: 'left', verticalAlign: 'middle', color: 'white', margin: 'auto', width: "90vw" }}>
            <div className="TitleHeader">FAQ</div>
            <div style={{ backgroundColor: '#2D132C', borderRadius: '1vw', margin: '1vw', padding: '.5vw', boxShadow: "0px 0px 5px black" }} data-aos="fade-right">
              <div style={{ fontSize: '2vw', padding: '.25vw 0vw .25vw 1vw' }}>1 - question</div>
              <p className='faq-answer'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia deleniti provident ut at dolor numquam.</p>
            </div>

            <div style={{ backgroundColor: '#2D132C', borderRadius: '1vw', margin: '1vw', padding: '.5vw', boxShadow: "0px 0px 5px black" }} data-aos="fade-right">
              <div style={{ fontSize: '2vw', padding: '.25vw 0vw .25vw 1vw' }}>2 - question</div>
              <p className='faq-answer'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia deleniti provident ut at dolor numquam.</p>
            </div>

            <div style={{ backgroundColor: '#2D132C', borderRadius: '1vw', margin: '1vw', padding: '.5vw', boxShadow: "0px 0px 5px black" }} data-aos="fade-right">
              <div style={{ fontSize: '2vw', padding: '.25vw 0vw .25vw 1vw' }}>3 - question</div>
              <p className='faq-answer'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia deleniti provident ut at dolor numquam.</p>
            </div>

            <div style={{ backgroundColor: '#2D132C', borderRadius: '1vw', margin: '1vw', padding: '.5vw', boxShadow: "0px 0px 5px black" }} data-aos="fade-right">
              <div style={{ fontSize: '2vw', padding: '.25vw 0vw .25vw 1vw' }}>4 - question</div>
              <p className='faq-answer'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia deleniti provident ut at dolor numquam.</p>
            </div>
          </div>
          <div style={{ padding: '1vw' }}></div>
        </div>

        <div id="team-section">
          <header className="TitleHeader">Team</header>
            <div className="member-card" data-aos="fade-up">
            <img className="member-profile" src={CoolOneImage}></img>
              <div className="member-description">
              <header>Member's Name</header>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum cupiditate esse culpa fugiat odit architecto ducimus pariatur quos sequi nisi, dolor ipsam eveniet unde nemo, maiores saepe dolore accusantium accusamus? Sed suscipit fuga unde, vero alias officia eius quidem aspernatur vitae repellat aut nisi id reiciendis deleniti nulla. Dolores, in?</p>
              </div>
            </div>

            <div className="member-card" data-aos="fade-up">
            <img className="member-profile" src={CoolOneImage}></img>
              <div className="member-description">
              <header>Member's Name</header>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum cupiditate esse culpa fugiat odit architecto ducimus pariatur quos sequi nisi, dolor ipsam eveniet unde nemo, maiores saepe dolore accusantium accusamus? Sed suscipit fuga unde, vero alias officia eius quidem aspernatur vitae repellat aut nisi id reiciendis deleniti nulla. Dolores, in?</p>
              </div>
            </div>

            <div className="member-card" data-aos="fade-up">
            <img className="member-profile" src={CoolOneImage}></img>
              <div className="member-description">
                <header>Member's Name</header>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum cupiditate esse culpa fugiat odit architecto ducimus pariatur quos sequi nisi, dolor ipsam eveniet unde nemo, maiores saepe dolore accusantium accusamus? Sed suscipit fuga unde, vero alias officia eius quidem aspernatur vitae repellat aut nisi id reiciendis deleniti nulla. Dolores, in?</p>
              <a className='member-link' href="">
                <img src={twitterPNG}></img>
                <div>(twitter's name)</div>
              </a>
              </div>
            </div>
        </div>

        <footer id='footer-section'>
          <img id="footer-icon" src={CoolOneImage}></img>
          <div className="footer-gap"></div>
          <div style={{ margin: '0vw 0vw 1vw 3vw', color: 'rgba(255,255,255,.7)', fontSize: "1vw" }}>© coolrat.lol</div>

        </footer>

      </div>
    </DAppProvider >
  );
}

export default App;
