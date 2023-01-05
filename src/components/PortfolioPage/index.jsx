import React from "react"
import "./PortfolioPage.css";
import OrbitImageComponent from "../OrbitImageComponent";

import {BlogPosts} from "../../lib"
import FeaturedArticelsFrame from "../FeaturedArticelsFrame";
// <BlogPosts postcard={PostCard} cards={2} />
        // <OrbitProvider config={config}>
const PostCard = (props,ipfs) => {
  return (
    <div key={props.postDate} className="case-study-one">
    <OrbitImageComponent className="image-one"  alt={props.subject} ipfs={ipfs} src={props.photoCID} /> 
      <div className="case-study-text-one">
        <div className="frame-container">
          <div className="frame-22">
            <div className="p2-p-prototype sfprotext-regular-normal-emperor-16px">{props.tags[0]} ({props.postDate})</div>
            <div className="orbit-blog sfprotext-regular-normal-black-24px">{props.subject}</div>
            <p className="implemented-a-basic sfprotext-regular-normal-black-18px">{props.body.substring(0,70)}</p>
          </div>
          <div className="frame-21">
            <div className="read-more sfprotext-regular-normal-black-20px">readMore</div>
          </div>
        </div>
      </div>
    </div>
  )
}


function PortfolioPage(props) {
  const {
    signature,
    profilePic,
    title,
    intro,
    heading1,
    github,
    twitter,
    dannysylvesterGmailCom,
  } = props;



  return (
    <div className="container-center-horizontal">
      <div className="portfolio-page screen">
        <h1 className="logo valign-text-middle">{signature}</h1>
        <div className="group-9">
          <div className="overlap-group">
            <div className="group-7">
              <div className="rectangle-31"></div>
              <div className="rectangle-32"></div>
              <div className="rectangle-33"></div>
              <div className="rectangle-34"></div>
            </div>
            <img
              className="nico-neumarkt-2022-1"
              src={profilePic}
              alt="nico-neumarkt-2022 1"
            />
          </div>
          <div className="text-headline">
            <p className="consultant-for-decen valign-text-middle sfprotext-regular-normal-black-28px">
              {title}
            </p>
            <p className="my-name-is-nico-krau sfprotext-regular-normal-black-20px">
              {intro}
            </p>
          </div>
        </div>
        <div className="heading valign-text-middle sfprotext-regular-normal-black-28px">
          {heading1}
        </div>

        <div className="projects">
        <BlogPosts postcard={PostCard} cards={2} />
          {/* <BlogPosts postcard={PostCard} cards={2} />*/}
        </div>
        <div className="heading-1 valign-text-middle sfprotext-regular-normal-black-28px">
          {props.heading2}
        </div>
          {" "}
            <FeaturedArticelsFrame />
  
                    {/*         <FeaturedArticelsFrame />*/}

        <div className="footer sfprotext-regular-normal-black-16px">
          <div className="socials">
            <div className="socials-item valign-text-middle">{github}</div>
            <div className="socials-item valign-text-middle">{twitter}</div>
          </div>
          <div className="danny-sylvestergmailcom valign-text-middle">
            {dannysylvesterGmailCom}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioPage;
