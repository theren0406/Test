import React, { Component } from 'react';

import Comment from './Comment';

//名稱可自取，但通常使用props作為名稱

const props = {
  author: {
    avatarUrl: 'https://www2.gomaji.com/img/gomajidream.png',
    name: 'Cindy',
  },
  text: 'my comment',
  date: '1995/04/06'
}

export default function App() {
  return (
    <div>
      <Comment { ...props } />
    </div>
  );
}



// Object spread example

function App1() {
  return <Greeting firstName="Ben" lastName="Hector" />;
}

function App2() {
  const props = {firstName: 'Ben', lastName: 'Hector'};
  return <Greeting {...props} />;
}