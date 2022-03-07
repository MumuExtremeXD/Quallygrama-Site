import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  html {
    scroll-behavior: smooth;
  }

  html, body, #root {
    font-family: "Poppins", sans-serif;
    background:#fff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    -webkit-appearance: none;
  }

  * {
  scrollbar-width: thin;
  scrollbar-color: blue orange;
}

/* Works on Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: blue orange;
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 14px;
}

*::-webkit-scrollbar-track {
  background:  #eee;
}

*::-webkit-scrollbar-thumb {
  background-color:  #aaa;
  border-radius: 10px;
  border: 2px solid #eee;
}

  :root {
    --primary:#559645;
    --secondary:#FFF;
    --third:#0b5b3a;
    --fourth:#93c53b;
    --five:#4f2d0f;
    --blue: #008ffc;
    --black:#222222;
    --gray:#444;
  }
`;
