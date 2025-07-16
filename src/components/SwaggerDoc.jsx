"use client"; // Mark as client component for App Router

import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

const SwaggerDoc = () => {
  return <SwaggerUI 
    url="/swagger.json"
    docExpansion="list"
    deepLinking={true}
    tryItOutEnabled={true}
    requestInterceptor={(req) => {
      // Override the host for "Try it out"
      req.url = req.url.replace(/http:\/\/localhost:[0-9]+/, `${process.env.NEXT_PUBLIC_API_BASE_URL}`);
      return req;
    }}
  />;
};

export default SwaggerDoc;