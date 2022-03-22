import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';
import { AnimatePresence, motion, useMotionValue, useTransform, useViewportScroll, Variants } from "framer-motion"
import { useEffect, useRef, useState } from 'react';

const Globalstyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
    box-sizing: border-box;
}
body {
  font-weight: 300;
  font-family: 'Source Sans Pro', sans-serif;
  color:black;
  line-height: 1.2;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a{
  text-decoration: none;
  color:inherit;
}
`;



const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg,rgb(251, 197, 49),rgb(156, 136, 255));

`;
const Box = styled(motion.div)`
  width: 300px;
  height: 300px;
  background-color: rgba(0, 168, 255,0.7);
  border-radius: 30px;
  position: absolute;
  top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const slideVariants= {
  start:{
      opacity: 0,
      scale:0,
      x:500,
  },
  end:{
      opacity:1,
      scale:1,
      x:0,
      transition:{duration:1}
  },
  exit:{
    opacity: 0,
      scale:0,
      x:-500,
  }

}



const App = () => {
    const [slideNum,setSlideNum] = useState(1);
    const next = ()=>{
      setSlideNum((pre)=> (pre===8? pre-7 : pre+1) )
    }
  return (
    <>
      <Globalstyle/>
      <Wrapper>
      <AnimatePresence>
        {[1,2,3,4,5,6,7,8].map(i => slideNum===i ? <Box 
        variants={slideVariants}
        initial="start"
        animate="end"
        exit="exit"
        key={i}> {i}</Box>: null)}
      </AnimatePresence>
      <button onClick={next}>next</button>    
      </Wrapper>
    </>
  );
};

export default App;