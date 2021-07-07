import type { NextPage } from "next";
import ArticleListItem from "../components/ArticleListItem/ArticleListItem";

const Work: NextPage = ({}) => {
  return (
    <>
      <h1>Work</h1>
      <p>
        (<strong>in progress</strong> - but here are few of the projects
        I&apos;ve worked on)
      </p>

      <ArticleListItem
        img="/images/work/outfit-suggestion-using-face-detection.jpg"
        title="Outfit suggestion using Face detection"
        info1="An analysis tool for retail business that learn user’s like and dislike based on 
                        facial gesture and recommend outfit from the next visit - worked at AmazeRealise."
        info2="React JS, Microsoft face API, Redux, Redux Saga, Reselect, Prop types, SASS, Webpack."
      />

      {/* <ArticleListItem img={emirates}
                        title="Emirates Airline"
                        info1="This high profile international project was rebuild from scratch with modern design and 
                        highly accessibility in mind. - worked at AmazeRealise."
                        info2="Modular ES6 using browserify, Responsive design, Multi-language, SASS, Docker, Accessibility AA, Webpack." /> */}

      <ArticleListItem
        img="/images/work/unilever.jpg"
        title="Unilever"
        info1="92 countries, 47 sites, 28 languages, 26 million visitors per year -
                        based on a high performance front-end architecture - worked at AmazeRealise."
        info2="JQuery Module, Multi-language, Responsive design, Complex CSS 3d and 2d animation, 
                        Foundation Grid, SASS, Grunt, Accessibility - AA."
      />

      <ArticleListItem
        img="/images/work/hsbc-login.jpg"
        title="HSBC Login"
        info1="Complete re-written version of HSBC's existing Login module that allows the uesr 
                         login to the banking system securely - worked at Digitas."
        info2="AngularJS, XSS and other Security checking, Multi-language, TDD using Mocha and Protractor, SASS, Gulp, Accessibility - AA."
      />

      <ArticleListItem
        img="/images/work/national-trust.jpg"
        title="National Trust"
        info1="National Trust was rebuilt with modern design in mind. Interactive animation made it fun 
                         to use the site - worked at Digitas."
        info2="RequireJS, Foundation Grid, SASS, Gulp, Complex CSS animation, Accessibility - AA."
      />

      <ArticleListItem
        img="/images/work/saudi-aramco.jpg"
        title="Saudi Aramco"
        info1="Saudi Aramco is the state-owned oil company of the Kingdom of Saudi Arabia and a fully 
                         integrated, global petroleum and chemicals enterprise - worked at digitas."
        info2="RequireJS, Multi-language, SASS, Gulp."
      />
    </>
  );
};

export default Work;
