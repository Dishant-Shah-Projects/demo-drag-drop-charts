import React from 'react';
import { useDrag } from 'react-dnd';

function Item(props) {
  const {setMenuId,menuId} = props;
  console.log(props);
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: 'card',
    collect: (monitor) => {
      setMenuId(menuId);
      return ({
      isDragging: monitor.isDragging(),   

    })},
  }));
  console.log(props)

  return (
      
    <>      
        <div ref={dragRef} >
          <p>This is Item {props.menuId}</p>
        </div>
    </>
  );
}
export default Item;
