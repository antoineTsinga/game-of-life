import React, { useEffect, useRef, useState } from "react";
import "./Grid.css"; // Assurez-vous d'importer votre fichier CSS avec les styles nécessaires

function Grid({ width, height, children, isGrabble = true, ref = null }) {
  const gridContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const gridRect = children.ref.current.getBoundingClientRect();
    console.log(
      gridContainerRef.current.getBoundingClientRect(),
      children.ref.current.getBoundingClientRect()
    );
    const middleX = 0;
    const middleY = 154;
    gridContainerRef.current.scroll({
      left: middleX,
      top: middleY,
    });
  }, [gridContainerRef]);

  const handleMouseDown = (e) => {
    if (!gridContainerRef.current) return; // Vérifier si gridContainerRef est null
    setIsDragging(true);
    setStartX(e.clientX - gridContainerRef.current.offsetLeft);
    setStartY(e.clientY - gridContainerRef.current.offsetTop);
    setScrollLeft(gridContainerRef.current.scrollLeft);
    setScrollTop(gridContainerRef.current.scrollTop);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!gridContainerRef.current || !isDragging) return;
    e.preventDefault();
    const x = e.clientX - gridContainerRef.current.offsetLeft;
    const y = e.clientY - gridContainerRef.current.offsetTop;
    const deltaX = x - startX;
    const deltaY = y - startY;

    gridContainerRef.current.scrollLeft = scrollLeft - deltaX;
    gridContainerRef.current.scrollTop = scrollTop - deltaY;
  };

  return (
    <div
      ref={gridContainerRef}
      className={`grid-container ${isGrabble && "grab"}`}
      style={{ width: width, height: height }} // Appliquer la taille personnalisée
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onScroll={(e) =>
        console.log(
          gridContainerRef.current.getBoundingClientRect().top,
          gridContainerRef.current.getBoundingClientRect().bottom,
          gridContainerRef.current.getBoundingClientRect().left,
          gridContainerRef.current.getBoundingClientRect().right,
          e
        )
      }
    >
      {children}
    </div>
  );
}

export default Grid;
