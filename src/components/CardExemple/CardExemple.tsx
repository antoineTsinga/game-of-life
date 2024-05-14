import React, { useRef, useState } from "react";
import "./CardExemple.css";
import { centerMatrix } from "../../utils/algo.ts";
import Grid from "../Grid/Grid.tsx";
import { BoardType, TemplateGOL } from "../../utils/exempleGameofLife.ts";
import ButtonTool from "../../utils/btn/ButtonTool.tsx";

export default function CardExemple({
  title,
  board,
  size = 40,
  cellSize = "0.4em",
  deletable = false,
  onDelete = (t) => {},
}) {
  const [isHover, setIsHover] = useState<Boolean>(false);

  return (
    <div
      className="card"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {title}

      <div className="overflow">
        {isHover ? (
          <>
            <div
              className="overlay"
              onClick={() =>
                localStorage.setItem(
                  "state",
                  JSON.stringify(centerMatrix(board, size, size))
                )
              }
            ></div>
            <div className="overlay-text">
              <p
                onClick={() =>
                  localStorage.setItem(
                    "state",
                    JSON.stringify(centerMatrix(board, size, size))
                  )
                }
              >
                Click to copie
              </p>
              {deletable ? (
                <ButtonTool
                  className="button-45"
                  onClick={() => {
                    const states = localStorage.getItem("states");
                    if (states !== null && states.length > 0) {
                      let templates: TemplateGOL[] = JSON.parse(states);

                      templates = templates.filter(
                        (template) => template.title !== title
                      );
                      console.log(templates);
                      localStorage.setItem("states", JSON.stringify(templates));
                      onDelete(templates);
                    }
                  }}
                >
                  Delete
                </ButtonTool>
              ) : (
                <></>
              )}
            </div>
          </>
        ) : (
          <></>
        )}
        <div
          className="overview"
          style={{
            gridTemplateColumns: `repeat(${size}, ${cellSize})`,
            gridTemplateRows: `repeat(${size}, ${cellSize})`,
          }}
        >
          {centerMatrix(board, size, size).map((row, i) =>
            row.map((cell, j) => (
              <div
                key={`${i}${j}`}
                className={`cell ${cell === 1 && "cell_alive"}`}
              ></div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
