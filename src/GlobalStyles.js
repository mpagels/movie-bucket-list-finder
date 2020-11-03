import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
* {
    box-sizing: border-box;
    font-family: "Open Sans", sans-serif;
}

body {
    color: #0F1C2E;
    margin: 20px 0;
    font-size: 112.5%;

}

:root {
    --NetflixIVADE: #db0000;
    --GooglePlayIVADE: #48ff48;
    --iTunesIVADE: #CC45F2;
    --AmazonPrimeVideoIVADE: #00a8e1;
    --AmazonInstantVideoIVADE: #86D06D;
    --DisneyPlusIVADE: #0F1B4D;
    --ButtonActive: #88A0BF;
    }
`
