import React, { Fragment } from "react";

function news() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <a href="/news/nextjs-is-a-great-framework">
            NextJS is a Great Framework
          </a>
        </li>
        <li>Something else</li>
      </ul>
    </Fragment>
  );
}

export default news;
