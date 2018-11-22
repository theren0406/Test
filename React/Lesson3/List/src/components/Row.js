import React, { Component } from 'react';

import Button from './Button';

export default function Row(props) {
  return (
    <div className={props.class}>
      {props.words.map(function(word, idx){
          return <Button key={idx} click={props.click} content={word} />
        })
      }
    </div>
  );
}