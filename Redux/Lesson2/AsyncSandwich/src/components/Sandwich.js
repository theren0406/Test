import React from 'react';

export default function Sandwich(props) {
  const { ingreds } = props 

  return (
    <ul>
      <li className="bread food"></li>
      {ingreds.map((item) => {
          let ingreArray = [];
          for (let i = 0; i < item.amount; i++) {
            ingreArray.push(<li key={item.id + i} className={item.id + ' food'}></li>)
          }
          return ingreArray;
          // 回傳二維陣列 ex: [[cheese], [ham, ham], [egg, egg], [cucumber]]
        })
          .reduce((arr, el) => {
            return arr.concat(el)
          }, [])
        // 使用reduce 將二維轉為一維陣列 ex: [cheese, ham, ham, egg, egg, cucumber]
      }
      <li className="bread food"></li>
    </ul>
  );
} 