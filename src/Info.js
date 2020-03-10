import React from 'react';

const Info = () => {
  return (
    <div>
      <h2>Info</h2>
      <p>
        Based on <a href={'https://www.youtube.com/watch?v=5gl3cCB_26M'} target='blank'>
          advance redux patterns
        </a>
      </p>
      <p>
        Check my <a href={`${window.location}books`} target='blank'>data-base</a>. I use json-server
      </p>
      <p>
        You can check all actions in console. Redux-devtools-extension is added to devDependencies
      </p>

    </div>
  )
}

export default Info;
