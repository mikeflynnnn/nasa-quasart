import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = () => (
  <ContentLoader viewBox="0 0 500 500" height={500} width={550}>
    <rect x="3" y="3" rx="10" ry="10" width="400" height="400" />
    <rect x="4" y="410" rx="0" ry="0" width="400" height="20" />
    <rect x="4" y="435" rx="0" ry="0" width="400" height="20" />
    <rect x="4" y="460" rx="0" ry="0" width="400" height="20" />
  </ContentLoader>
);

export default MyLoader;
