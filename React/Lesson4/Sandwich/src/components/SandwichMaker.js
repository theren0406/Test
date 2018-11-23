import React, { Component } from 'react';

export default class SandwichMaker extends Component {
  state = {
    ingredients: [
      { name: 'cheese', amount: 0 },
      { name: 'ham', amount: 0 },
      { egg: 0 },
      { cucumber: 0 }
    ]
  }

  render() {
    const { ingredients } = this.state;
    return (
      <div>
        <ul>
          <li className="bread"></li>
          {
            ingredients.map((item) => {
              let ingreArray = [];
              for(let i = 0; i < item.amount; i++) {
                ingreArray.push(<li className={item.name + ' food'}></li>) 
              }
              return ingreArray;
            })
            .reduce((arr, el) => {
              return arr.concat(el)
            }, [])
          }
          <li className="bread"></li>
        </ul>
      </div>
    );
  }
}