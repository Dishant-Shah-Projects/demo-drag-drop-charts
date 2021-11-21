import React, { useState } from 'react';
import { useDrag } from 'react-dnd';

import Item from './Item.jsx';

function Nav(props) {
  const { menuId, setMenuId } = props;

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
        <Item isMoved={menuId === 1} menuId={1} setMenuId={moveMenuItem} />
        <Item isMoved={menuId === 2} menuId={2} setMenuId={moveMenuItem} />
        <Item isMoved={menuId === 3} menuId={3} setMenuId={moveMenuItem} />
      </div>
    </>
  );
}
export default Nav;
