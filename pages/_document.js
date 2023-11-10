import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <Script
          strategy="beforeInteractive"
          src={`https://cdn-cookieyes.com/client_data/1c6dd9714063c6679b53f7f1/script.js`}
        ></Script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function getCookie(key) {
                const cookies = document.cookie
                  .split(";")
                  .reduce(
                    (ac, cv, i) =>
                      Object.assign(ac, { [cv.split("=")[0]]: cv.split("=")[1] }),
                    {}
                  )["cookieyes-consent"];
        
                const { [key]: value } = cookies
                  .split(",")
                  .reduce(
                    (obj, pair) => (
                      (pair = pair.split(":")), (obj[pair[0]] = pair[1]), obj
                    ),
                    {}
                  );
                return value;
              }
        
              if (getCookie("consent") == "yes" && getCookie("analytics") == "yes") {
                const script = document.createElement("script");
                script.setAttribute("src", "<URL of your script>");
                document.body.appendChild(script);
              }
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
