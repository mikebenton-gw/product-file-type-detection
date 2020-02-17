import React, { useState, useEffect } from 'react'

function DragAndDrop(props) {
  var [drag, setDrag] = useState(false);
  var [dragCounter, setDragCounter] = useState(false);

  var handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  var handleDragIn = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragCounter(dragCounter++);
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setDrag(true);
    }
  };

  var handleDragOut = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragCounter(dragCounter--);
    if (dragCounter === 0) {
      setDrag(false);
    }
  }
  var handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDrag(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      props.handleDrop(e.dataTransfer.files)
      try {
      e.dataTransfer.clearData()
      } 
      catch 
      {

      }
      setDragCounter(0);
    }
  }
  
  var dropRef = React.createRef();
  useEffect(() => {
    let div = dropRef.current
    div.addEventListener('dragenter', handleDragIn)
    div.addEventListener('dragleave', handleDragOut)
    div.addEventListener('dragover', handleDrag)
    div.addEventListener('drop', handleDrop)
    return () => {
    div.removeEventListener('dragenter', handleDragIn)
    div.removeEventListener('dragleave', handleDragOut)
    div.removeEventListener('dragover', handleDrag)
    div.removeEventListener('drop', handleDrop)
  };
}, []);
    return (
      <div className="drop-border" ref={dropRef}>
        {
          drag && <div className="drop-border-dragging"/>
        }
        {props.children}
      </div>
    );
}
export default DragAndDrop;