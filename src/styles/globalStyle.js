// src/styles/globalStyle.js

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
}

html,
body,
div,
span,
h1,
h2,
h3,
h4,
h5,
h6,
p,
a,
strong,
dl,
dt,
dd,
ol,
ul,
li {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

body {
  min-width: 320px;
  line-height: normal;
  font-size: 14px;
  scroll-behavior: smooth;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  font-family: 'Archivo', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}

body,
input,
textarea,
select,
table,
button,
code {
  font-size: 16px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

ul,
ol,
li {
  list-style: none;
}

a {
  color: inherit;
  cursor: pointer;
  text-decoration: none;
  &:hover,
  &:focus {
    text-decoration: none;
  }
}

button {
  border: 0;
  background-color: transparent;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }
}

input:disabled {
  background-color: rgba(255, 255, 255, 0);
  cursor: not-allowed;
}

select {
  border: 0;
  background-color: transparent;
  cursor: pointer;
  &::-ms-expand {
    display: none;
  }
}

input,
textarea {
  font-size: inherit;
  border: 0;
  &::placeholder {
    /* Chrome, Safari, Firefox */
    color: #bdbdbd;
    opacity: 1;
  }
  &:-ms-input-placeholder {
    /* IE, Edge */
    color: #bdbdbd;
    opacity: 1;
  }
  &[readonly],
  &:disabled {
    &::placeholder {
      /* Chrome, Safari, Firefox */
      color: rgba(#000, 0.2);
      opacity: 1;
    }
    &:-ms-input-placeholder {
      /* IE, Edge */
      color: rgba(#000, 0.2);
      opacity: 1;
    }
  }
  &::-ms-clear,
  &::-ms-reveal {
    /* IE, Edge */
    display: none;
  }
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
}

button {
  width: 100%;
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
}





`;

export default GlobalStyles;
