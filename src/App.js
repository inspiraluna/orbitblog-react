import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { OrbitProvider,useOrbitDb } from "@decentrasol/react-orbitdb";
import PortfolioPage from "./components/PortfolioPage";

// const frame261Data = {
//   isTheDynamicIslandWorthIt: "Is the dynamic island worth it?",
// };

// const frame262Data = {
//   isTheDynamicIslandWorthIt: "Secrets of great Wireframes",
// };

const portfolioPageData = {
  signature: "Nico Krause",
  profilePic: "/img/nico-neumarkt-2022-1@2x.png",
  title: "Consultant for decentralized software architectures, auditor, mentor, digital nomad",
  intro: <React.Fragment>"You can be sitting still surfing the Internet, and experience other worlds, ideas and societies. But I've found that there is nothing better than visiting a different country, even if for three days. ...   You can't only be a virtual Global Nomad, with goggles on, in a virtual reality.   You have to be there. You have to see it, smell it and live it. 
  You have to see people, travel, and interact." Nouriel Roubini</React.Fragment>,
  heading1: "Featured Projects",
  p2PPrototype: "P2P Prototype",
  orbitblog: "OrbitBlog",
  implementedABasic: "Implemented a basic p2p blog via OrbitDB and IPFS. No Blockchain no centralized servers involved.",
  readMore: "Read more ...",
  // p2PArgumentModels: "P2P Argument Models",
  // deAmoDecentralizedArgumentModels: "DE-AMO Decentralized Argument Models",
  // loremIpsumDolorSi1: "Lorem ipsum dolor sit amet consectetur. Tempus dui commodo venenatis adipiscing ..",
  // uiUxDesign: "UI/UX DESIGN",
  name: "Willow App",
  loremIpsumDolorSi2: "Lorem ipsum dolor sit amet consectetur. Tempus dui commodo venenatis adipiscing ..",
  heading2: "Featured Trips",
  github: "Github",
  twitter: "Twitter",
  decentraSolEmail: "post@nicokrause.com",
};
const config = {
  repo: './example',
  config:
  {  
    Addresses: {
      Swarm: [
      '/dns6/ipfs.le-space.de/tcp/9091/wss/p2p-webrtc-star',
      '/dns4/ipfs.le-space.de/tcp/9091/wss/p2p-webrtc-star'
      ]
    }
  }
}

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/:path(|portfolio-page)">
             <OrbitProvider config={config}>
              <PortfolioPage {...portfolioPageData} />
              </OrbitProvider>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;

