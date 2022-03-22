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
  background: linear-gradient(135deg,rgb(251, 197, 49),rgb(156, 136, 255));
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



const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50vw;
  gap: 10px;
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;
const ShowModal = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

`;
const Box = styled(motion.div)`

  height: 200px;
  background-color: rgba(255,255,255,1);
  border-radius: 30px;  

`;

const clickVariant:Variants= {
  start:{ backgroundColor: "rgba(0,0,0,0.5)"},
  animate:{backgroundColor: "rgba(0,0,0,0.7)"},
  exit : {backgroundColor: "rgba(0,0,0,0.5)"},
}


const App = () => {
  const [clicked, setClicked] = useState(false);
  const onClick= ()=>{
    console.log('s')
    setClicked(pre => !pre)
  }
  return (
    <>
      <Globalstyle/>
      <Wrapper>
        <Grid>
        <Box onClick={onClick} layoutId="1box"></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        </Grid>
       <AnimatePresence> {clicked? <ShowModal 
       variants={clickVariant} initial="start" animate="animate" exit="opacity" onClick={onClick}> 
       <Box style={{width:400, height:200}} layoutId="1box"/></ShowModal> : null}</AnimatePresence>
      </Wrapper>
      
    </>
  )
};


export default App;