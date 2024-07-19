import React from "react";
import "../styles/LandingPage.css";
import Card from "./Card";

// Importing SVGs from the src/assets/logos directory
import aavraniLogo from "../assets/logos/aavrani-logo@logotyp.us.svg";
import filaLogo from "../assets/logos/fila-logo@logotyp.us.svg";
import pepsiLogo from "../assets/logos/pepsi-logo@logotyp.us.svg";
import airJordanLogo from "../assets/logos/air-jordan-logo@logotyp.us.svg";
import flipkartLogo from "../assets/logos/flipkart-logo@logotyp.us.svg";
import piscartLogo from "../assets/logos/piscart-logo@logotyp.us.svg";
import amazonLogo from "../assets/logos/amazon-logo@logotyp.us.svg";
import frootiLogo from "../assets/logos/frooti-logo@logotyp.us.svg";
import primeVideoLogo from "../assets/logos/prime-video-logo@logotyp.us.svg";
import cocaColaLogo from "../assets/logos/coca-cola-company-logo@logotyp.us.svg";
import nikeLogo from "../assets/logos/nike-logo@logotyp.us.svg";
import tropicanaLogo from "../assets/logos/tropicana-logo@logotyp.us.svg";
import facebookLogo from "../assets/logos/facebook-logo@logotyp.us.svg";
import northfaceLogo from "../assets/logos/northface-logo@logotyp.us.svg";
import vedantuLogo from "../assets/logos/vedantu-logo@logotyp.us.svg";
import dunkinDonutsLogo from "../assets/logos/dunkin-donuts-logo@logotyp.us.svg";
import bellaItaliaLogo from "../assets/logos/bella-italia-logo@logotyp.us.svg";
import pizzaHutLogo from "../assets/logos/pizza-hut-logo@logotyp.us.svg";
import walkmeLogo from "../assets/logos/walkme-logo@logotyp.us.svg";
import bugattiLogo from "../assets/logos/bugatti-logo@logotyp.us.svg";
import ibmLogo from "../assets/logos/ibm-logo@logotyp.us.svg";
import whatsappLogo from "../assets/logos/whatsapp-logo@logotyp.us.svg";
import chilisLogo from "../assets/logos/chilis-logo@logotyp.us.svg";
import kfcLogo from "../assets/logos/kfc-logo@logotyp.us.svg";
import softwareoneLogo from "../assets/logos/softwareone-logo@logotyp.us.svg";
import xeroxLogo from "../assets/logos/xerox-logo@logotyp.us.svg";
import ciscoLogo from "../assets/logos/cisco-logo@logotyp.us.svg";
import louisVuittonLogo from "../assets/logos/louis-vuitton-logo@logotyp.us.svg";
import starbucksLogo from "../assets/logos/starbucks-logo@logotyp.us.svg";
import mcdonaldsLogo from "../assets/logos/mcdonalds-logo@logotyp.us.svg";
import tapcartLogo from "../assets/logos/tapcart-logo@logotyp.us.svg";
import disneyLogo from "../assets/logos/disney-logo@logotyp.us.svg";
import timHortonsLogo from "../assets/logos/tim-hortons-logo@logotyp.us.svg";

const LandingPage = () => {
  const sampleUrl =
    "https://buzzfame.in/wp-content/uploads/2023/11/instagram-influencer-Foodaholic-Tn.jpg";
  const sampleName = "Foodaholic TN";
  const sampleFeedback =
    "Amazing content! Loved working with this savante .Amazing content! Loved working with this savante";

  return (
    <div className="landing-page">
      <div className="header">
        <div className="brand-name">SAVANTE</div>
        <div className="Head-option">
          <div className="header-options">About</div>
          <div className="header-options">Home</div>
          <div className="header-options">Contact Us</div>
          <div className="header-options">Products</div>
        </div>
      </div>
      <div className="body">
        <div className="up-body">
          <div className="tag-line">
            Unleash Perfect Matches <br />
            with Savante
          </div>
          <div className="second-tag-line">
            Experience the future of influencer marketing with our innovative
            AI-driven platform.
          </div>
          <div className="buttons">
            <button className="button">Start as Influencer</button>
            <button className="button">Join as Brand</button>
          </div>
          <div className="video-container">
            <iframe
              loading="lazy"
              className="video"
              src="https://www.youtube.com/embed/-jRkI1nOwbc?si=j-ogcEik2maBCR0O?rel=0?rel=0"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
          <div className="third-tag-line">
            Crafted by Savante <br />
            for Marketers
          </div>
          <div className="fourth-tag-line">
            Savante is a groundbreaking platform that transforms influencer
            marketing by <br />
            matching brands with the perfect influencers. Experience it today.
          </div>
          <div className="data">
            <div className="data2">
              <div className="data3">
                <div id="one">42%</div>
                <div id="two">More Efficient</div>
              </div>
              <div className="data4">
                Achieve a 42% increase in campaign effectiveness with Savante’s
                advanced AI-driven matchmaking.
              </div>
            </div>

            <div className="data2">
              <div className="data3">
                <div id="one">30%</div>
                <div id="two">Increased Engagement</div>
              </div>
              <div className="data4">
                Boost your engagement by 30% with Savante’s tailored influencer
                partnerships.
              </div>
            </div>
            <div className="data2">
              <div className="data3">
                <div id="one">99.99%</div>
                <div id="two">Reliability</div>
              </div>
              <div className="data4">
                Enjoy 99.9% reliability with Savante, ensuring seamless and
                uninterrupted marketing campaigns.
              </div>
            </div>
          </div>
          <div className="fifth-tag-line">Our partners</div>
          <div className="second-tag-line">
            We are proud to work with these industry leaders.
          </div>
          <div className="logos">
            <img src={aavraniLogo} alt="Aavrani" className="logo" />
            <img src={filaLogo} alt="Fila" className="logo" />
            <img src={pepsiLogo} alt="Pepsi" className="logo" />
            <img src={airJordanLogo} alt="Air Jordan" className="logo" />
            <img src={flipkartLogo} alt="Flipkart" className="logo" />
            <img src={piscartLogo} alt="Piscart" className="logo" />
            <img src={amazonLogo} alt="Amazon" className="logo" />
            <img src={frootiLogo} alt="Frooti" className="logo" />
            <img src={primeVideoLogo} alt="Prime Video" className="logo" />
            <img src={cocaColaLogo} alt="Coca Cola" className="logo" />
            <img src={nikeLogo} alt="Nike" className="logo" />
            <img src={tropicanaLogo} alt="Tropicana" className="logo" />
            <img src={facebookLogo} alt="Facebook" className="logo" />
            <img src={northfaceLogo} alt="Northface" className="logo" />
            <img src={vedantuLogo} alt="Vedantu" className="logo" />
            <img src={dunkinDonutsLogo} alt="Dunkin Donuts" className="logo" />
            <img src={bellaItaliaLogo} alt="Bella Italia" className="logo" />
            <img src={pizzaHutLogo} alt="Pizza Hut" className="logo" />
            <img src={walkmeLogo} alt="Walkme" className="logo" />
            <img src={bugattiLogo} alt="Bugatti" className="logo" />
            <img src={ibmLogo} alt="IBM" className="logo" />
            <img src={whatsappLogo} alt="WhatsApp" className="logo" />
            <img src={chilisLogo} alt="Chilis" className="logo" />
            <img src={kfcLogo} alt="KFC" className="logo" />
            <img src={softwareoneLogo} alt="SoftwareOne" className="logo" />
            <img src={xeroxLogo} alt="Xerox" className="logo" />
            <img src={ciscoLogo} alt="Cisco" className="logo" />
            <img src={louisVuittonLogo} alt="Louis Vuitton" className="logo" />
            <img src={starbucksLogo} alt="Starbucks" className="logo" />
            <img src={mcdonaldsLogo} alt="McDonald's" className="logo" />
            <img src={tapcartLogo} alt="Tapcart" className="logo" />
            <img src={disneyLogo} alt="Disney" className="logo" />
            <img src={timHortonsLogo} alt="Tim Hortons" className="logo" />
          </div>
          <div className="fifth-tag-line">Influencers we have worked with</div>
          <div className="influencers-card">
            <Card
              imageUrl={
                "https://buzzfame.in/wp-content/uploads/2023/11/instagram-influencer-Alya-Manasa.jpg"
              }
              name={"Alya Manasa"}
              feedback={sampleFeedback}
            />
            <Card
              imageUrl={
                "https://buzzfame.in/wp-content/uploads/2023/11/instagram-influencer-begumschoice.jpg"
              }
              name={"Begums Choice"}
              feedback={sampleFeedback}
            />
            <Card
              imageUrl={
                "https://buzzfame.in/wp-content/uploads/2023/11/instagram-influencer-Daniel.jpg"
              }
              name={"Daniel"}
              feedback={sampleFeedback}
            />
            <Card
              imageUrl={
                "https://buzzfame.in/wp-content/uploads/2023/11/instagram-influencer-Foodaholic-Tn.jpg"
              }
              name={"Foodaholic TN"}
              feedback={sampleFeedback}
            />
            <Card
              imageUrl={
                "https://buzzfame.in/wp-content/uploads/2023/11/instagram-influencer-FoodOzers.jpg"
              }
              name={"FoodOzers"}
              feedback={sampleFeedback}
            />
            <Card
              imageUrl={
                "https://buzzfame.in/wp-content/uploads/2023/11/instagram-influencer-Hazel-Shiny.jpg"
              }
              name={"Hazel Shiny"}
              feedback={sampleFeedback}
            />
            <Card
              imageUrl={
                "https://buzzfame.in/wp-content/uploads/2023/11/instagram-influencer-Irfan-Views.jpg"
              }
              name={"Irfan Views"}
              feedback={sampleFeedback}
            />
            <Card
              imageUrl={
                "https://buzzfame.in/wp-content/uploads/2023/11/instagram-influencer-kishendas.jpg"
              }
              name={"Kishendas"}
              feedback={sampleFeedback}
            />
            <Card
              imageUrl={
                "https://buzzfame.in/wp-content/uploads/2023/11/instagram-influencer-Losliya.jpg"
              }
              name={"Losliya"}
              feedback={sampleFeedback}
            />
            <Card
              imageUrl={
                "https://buzzfame.in/wp-content/uploads/2023/11/instagram-influencer-new-to-chennai.jpg"
              }
              name={"New to Chennai"}
              feedback={sampleFeedback}
            />
            <Card
              imageUrl={
                "https://buzzfame.in/wp-content/uploads/2023/11/instagram-influencer-pragyanagra.jpg"
              }
              name={"Pragya Nagra"}
              feedback={sampleFeedback}
            />
            <Card
              imageUrl={
                "https://buzzfame.in/wp-content/uploads/2023/11/instagram-influencer-Priyadarshini.jpg"
              }
              name={"Priyadarshini"}
              feedback={sampleFeedback}
            />
            <Card
              imageUrl={
                "https://buzzfame.in/wp-content/uploads/2023/11/instagram-influencer-Pugazh.jpg"
              }
              name={"Pugazh"}
              feedback={sampleFeedback}
            />
            <Card
              imageUrl={
                "https://buzzfame.in/wp-content/uploads/2023/11/instagram-influencer-Sanjana.jpg"
              }
              name={"Sanjana"}
              feedback={sampleFeedback}
            />
            <Card
              imageUrl={
                "https://buzzfame.in/wp-content/uploads/2023/11/instagram-influencer-Sarath.jpg"
              }
              name={"Sarath"}
              feedback={sampleFeedback}
            />
            <Card
              imageUrl={
                "https://buzzfame.in/wp-content/uploads/2023/11/instagram-influencer-subhikshavenkat.jpg"
              }
              name={"Subhiksha Venkat"}
              feedback={sampleFeedback}
            />
            <Card
              imageUrl={
                "https://buzzfame.in/wp-content/uploads/2023/11/instagram-influencer-Suhail.jpg"
              }
              name={"Suhail"}
              feedback={sampleFeedback}
            />
            <Card
              imageUrl={
                "https://buzzfame.in/wp-content/uploads/2023/11/instagram-influencer-tamil-tech.jpg"
              }
              name={"Tamil Tech"}
              feedback={sampleFeedback}
            />
            <Card
              imageUrl={
                "https://buzzfame.in/wp-content/uploads/2023/11/instagram-influencer-TechBoss.jpg"
              }
              name={"Tech Boss"}
              feedback={sampleFeedback}
            />
            <Card
              imageUrl={
                "https://buzzfame.in/wp-content/uploads/2023/11/instagram-influencer-teju_ashwini.jpg"
              }
              name={"Teju Ashwini"}
              feedback={sampleFeedback}
            />
            <Card
              imageUrl={
                "https://buzzfame.in/wp-content/uploads/2023/11/instagram-influencer-Tharshan.jpg"
              }
              name={"Tharshan"}
              feedback={sampleFeedback}
            />
            <Card
              imageUrl={
                "https://buzzfame.in/wp-content/uploads/2023/11/instagram-influencer-Vidyu.jpg"
              }
              name={"Vidyu"}
              feedback={sampleFeedback}
            />
            <Card
              imageUrl={
                "https://buzzfame.in/wp-content/uploads/2023/11/instagram-influencer-Vivin.jpg"
              }
              name={"Vivin"}
              feedback={sampleFeedback}
            />
          </div>
          <div className="custom-solutions">
            <div className="custom1">
              <div id="three">Custom Solutions</div>
              <div id="four">Tailored software solutions to meet your unique needs.</div>
              <button className="button">Contact Us</button>
            </div>
            <div className="custom2" id="custom-solution"></div>
          </div>
          <div className="custom-solutions">
          <div className="custom2" id="dedicated-support"></div>
            <div className="custom1">
              <div id="three">Dedicated Support</div>
              <div id="four">We're here to help you every step of the way.</div>
              <button className="button">Get Support</button>
            </div>
            
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-company">
            <h1>SAVANTE</h1>
            <p>&copy; {new Date().getFullYear()} Savante. All rights reserved.</p>
          </div>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
