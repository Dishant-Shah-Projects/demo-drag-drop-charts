import React from 'react';
import { useDrag } from 'react-dnd';

function Item(props) {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: 'card',
    drag: () => props.setMenuId(props.menuId),
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),      
    }),
  }));
  console.log(props)

  return (
      
    <>      
        <div ref={dragRef} >
          <p>This is Item {props.isMoved}</p>
        </div>
    </>
  );
}
export default Item;
