import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, 
sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,
output,ruby,section,summary,time,mark,audio,video,button{
    padding: 0;
    margin: 0;
    font-size: 100%;
    box-sizing: border-box;
    border: 0;
    vertical-align: baseline;
}
    
article, aside, details, figcaption, figure, footer, 
header, hgroup, menu, nav, section {
  display: block;
}

body {
  line-height: 1;
}

ol, ul, li {
  list-style: none;
}
.ReactModal__Body--open {
  overflow-y: hidden;
}

.App {font-family: Roboto, "Noto Sans KR", sans-serif;}

.react-datepicker-wrapper {
  display: block !important;
}

button:focus {outline:0;}
input:focus{outline: 0;}
textarea:focus{outline: 0;}
a, a:hover, a:active { text-decoration: none; color: inherit; outline: none;}
a:visited { text-decoration: none;  outline: none; }

/* IE */
div {
  -ms-overflow-style: none; 
}

/* chrome etc */
div::-webkit-scrollbar { 
    display: none !important; 
}

`
export default GlobalStyle;