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
`;

const ClickVariants={
  start:{
    opacity: 1,
    scale: 0.5,

    
  },
  visible:{
    opacity: 1,
    scale: 1,
    

    
  },
  leaving:{
    opacity:0,
    scale:0,
    y:100
    
  }
}



const App = () => {
    const [showing,setShowing] = useState(false);
    const onClick = ()=>{
      setShowing(pre=> !pre)
    }
  return (
    <>
      <Globalstyle/>
      
      <Wrapper>
  
      <AnimatePresence>
        {showing? (<Box 
        variants={ClickVariants}
        initial="start"
        animate="visible"
        exit="leaving"
        />) : null}  
      </AnimatePresence>
      <button onClick={onClick}>click</button>
          
        
          
      </Wrapper>
    </>
  );
};

export default App;