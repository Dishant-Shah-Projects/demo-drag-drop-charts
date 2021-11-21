import React, { useState } from 'react';
import { useDrag } from 'react-dnd';

import Item from './Item.jsx';

function Nav(props) {
  const [menuId, setMenuId] = useState(null);
  //   const [{ isDragging }, dragRef] = useDrag(() => ({
  //     type: 'card',
  //     collect: (monitor) => ({
  //       isDragging: monitor.isDragging(),
  //     }),
  //   }));
  function moveMenuItem(id) {
    setMenuId(id);
  }

  return (
    <>
      <div
        style={{
          backgroundColor: 'skyblue',
          float: 'left',
          width: '30%',
          height: '100%',
        }}
      >
        <Item
          isMoved={menuId === 1}
          moveMenuItem={moveMenuItem.bind(null, 1)}
        />
        <Item
          isMoved={menuId === 2}
          moveMenuItem={moveMenuItem.bind(null, 2)}
        />
        <Item
          isMoved={menuId === 3}
          moveMenuItem={moveMenuItem.bind(null, 3)}
        />
      </div>
    </>
  );
}
export default Nav;
