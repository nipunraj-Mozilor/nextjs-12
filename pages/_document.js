import { Html, NextScript } from "next/document";
import Script from "next/script";

export default function Document(){
 return (
   <Html>
     <Head>
       <Script
         strategy="beforeInteractive"
         src={`https://cdn-cookieyes.com/client_data/1c6dd9714063c6679b53f7f1/script.js`}
       ></Script>
     </Head>
     <body>
      <Main/>
      <NextScript/>
     </body>
   </Html>
 );
}

