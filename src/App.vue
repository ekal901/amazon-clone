<template>
  <div id="app">
    <Nav />
    <router-link to="/home">
      <Home location="Deliver to Republic of Korea"></Home>
    </router-link>
    <!-- <router-link to="/about">About</router-link> -->
    <Footer />
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Home from '@/views/Home.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Nav,
    Home,
    Footer,
  },
}
</script>

<style lang="scss">
@charset "UTF-8";
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/
@import url(https://fonts.googleapis.com/earlyaccess/nanumgothic.css);

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  /*font: inherit;*/
  vertical-align: baseline;
}
html {
  overflow: auto;
  /*margin-left: calc(100vw - 100%);*/
  margin-right: 0;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
  font-weight: 400;
  font-size: 14px;
  font-family: 'Nanum Gothic', arial, '돋움', dotum, sans-serif;
  font-family: 'Amazon Ember', Arial, sans-serif;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
button {
  border: 0;
  margin: 0;
  padding: 0;
}

/* custom */
a,
a:link,
a:visited,
a:hover,
a:active {
  text-decoration: none;
  color: #fff;
  cursor: pointer;
}

body {
  font-weight: 400;
  font-size: 14px;
  font-weight: 400;
  color: #000;
  background-color: #d5dbdb;
}

// common style
.a__link {
  font-size: 14px;
  color: #007185;
}

.mr-5 {
  margin-right: 5px !important;
}
.mr-10 {
  margin-right: 10px !important;
}
.mb-5 {
  margin-bottom: 5px !important;
}
.mb-10 {
  margin-bottom: 10px !important;
}
.mb-15 {
  margin-bottom: 15px !important;
}
.line-height-bottom {
  line-height: 43px;
  color: #007185 !important;
  font-size: 14px;
}
</style>
