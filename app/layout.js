import React from 'react';
import StyledComponentsRegistry from '../lib/registry'; // We'll create this next
import { GA_TRACKING_ID } from '../lib/gtag';
import Script from 'next/script'; // Import Next.js Script component

// Define metadata using the Metadata API
export const metadata = {
  title: 'Greysky Studios | Premier Web Application Developers',
  description: 'We build amazing web applications that transform your business using NodeJS, React and Firebase.', // Add a description
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head> {/* Keep specific head tags like fonts here */}
        <link href="https://fonts.googleapis.com/css?family=Raleway:300,400" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet" />
        <style>{`
          body {
            margin: 0;
            line-height: 1.5;
            font-weight: 400;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;
          }
        `}</style>
        {/* Google Analytics Scripts using next/script */}
        <Script
          strategy="afterInteractive" // Load after page becomes interactive
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          id="gtag-init" // Give script an ID
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
