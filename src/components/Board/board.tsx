import React, { useEffect, useState, useCallback } from "react";
import {
  generateInitalRandomState,
  generateInit,
  generateState,
  centerMatrix,
} from "../../utils/algo.ts";
import "./Board.css";
import SideInfo from "../SideInfo/SideInfo.tsx";
import ButtonTool from "../../utils/btn/ButtonTool.tsx";
import {
  Archive,
  ArrowRotateLeft,
  ArrowTurnUpRight,
  Copy,
  Disk,
  FileArrowDown,
  Octagon,
  Pause,
  Play,
  Shuffle,
  Stop,
} from "../../utils/icons/iconsGol.tsx";
import { TemplateGOL } from "../../utils/exempleGameofLife.ts";
import CardExemple from "../CardExemple/CardExemple.tsx";

const size = 40;

type BoardType = Array<Array<0 | 1>>;

const init = generateInit(size);

const Board = () => {
  const [board, setBoard] = useState<BoardType>(init);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [timer, setTimer] = useState<any>(false);
  const [play, setPlay] = useState<Boolean>(false);
  const [stateCopy, setStateCopy] = useState<Boolean>(false);
  const [savedBoard, setSavedBoard] = useState<TemplateGOL[]>([]);

  const handleMouseDown = (row, col, bypass = false) => {
    if (isMouseDown || bypass) {
      const newB = [...board];
      newB[row][col] = newB[row][col] === 1 ? 0 : 1;

      setStateCopy(false);
      setBoard(newB);
    }
  };
  useEffect(() => {
    const states = localStorage.getItem("states");
    if (states) {
      setSavedBoard(JSON.parse(states));
    } else {
      setSavedBoard([]);
    }
  }, []);

  useEffect(() => {
    setStateCopy(false);
  }, [board]);

  useEffect(() => {
    if (!timer) {
      return;
    }

    const t = setInterval(() => {
      setBoard(generateState(board, size));
    }, 100);

    return () => clearInterval(t);
  }, [board, timer]);

  return (
    <div className="container">
      <div className="container2">
        <SideInfo />
        <div className="grid-container">
          <div className="board">
            {board.map((row, i) =>
              row.map((cell, j) => (
                <div
                  onMouseUp={() => {
                    if (isMouseDown) {
                      setIsMouseDown(false);
                    }
                  }}
                  onMouseDown={() => {
                    if (!isMouseDown) {
                      setIsMouseDown(true);
                    }
                  }}
                  onMouseEnter={() => handleMouseDown(i, j)}
                  onClick={() => handleMouseDown(i, j, true)}
                  key={`${i}${j}`}
                  className={`cell ${cell === 1 && "cell_alive"}`}
                ></div>
              ))
            )}
          </div>
        </div>
        <div className="toolbar-saved">
          <div className="toolbar">
            {!play ? (
              <ButtonTool
                onClick={() => {
                  setPlay(true);
                  setTimer(true);
                }}
                alttext="PLAY"
              >
                <Play />
              </ButtonTool>
            ) : (
              <ButtonTool
                onClick={() => {
                  setPlay(false);
                  setTimer(false);
                }}
                alttext="PAUSE"
              >
                <Pause />
              </ButtonTool>
            )}

            <ButtonTool
              onClick={() => {
                setBoard(generateState(board, size));
              }}
              alttext="NEXT STEP"
            >
              <ArrowTurnUpRight />
            </ButtonTool>
            <ButtonTool
              onClick={() => {
                setBoard(generateInitalRandomState(size));
              }}
              alttext="RAN DOM"
            >
              <Shuffle />
            </ButtonTool>
            <ButtonTool
              onClick={() => {
                setBoard(generateInit(size));
              }}
              alttext="CLEAR"
            >
              <Octagon />
            </ButtonTool>
            <ButtonTool
              onClick={() => {
                setBoard(init);
              }}
              alttext="INITIAL STATE"
            >
              <ArrowRotateLeft />
            </ButtonTool>
            <ButtonTool
              onClick={() => {
                setStateCopy(true);
                localStorage.setItem("state", JSON.stringify(board));
              }}
              alttext={stateCopy ? "COPIED" : "COPY"}
            >
              <Copy />
            </ButtonTool>
            <ButtonTool
              onClick={() => {
                const a = localStorage.getItem("state");
                if (a) {
                  setBoard(JSON.parse(a));
                }
              }}
              alttext="PASTE"
            >
              <FileArrowDown />
            </ButtonTool>
            <ButtonTool
              onClick={() => {
                const states = localStorage.getItem("states");
                const dateTime = new Date();
                let template = new TemplateGOL(
                  "Saved " + dateTime.toISOString(),
                  board
                );
                if (states) {
                  const templates = JSON.parse(states);
                  localStorage.setItem(
                    "states",
                    JSON.stringify([...templates, template])
                  );
                  setSavedBoard([...savedBoard, template]);
                } else {
                  localStorage.setItem("states", JSON.stringify([template]));
                  setSavedBoard([template]);
                }
              }}
              alttext="SAVE"
            >
              <Disk />
            </ButtonTool>
          </div>
        </div>
      </div>
      <div className="saved-bord">
        <h2 className="title-save-data">Saved Data</h2>
        {savedBoard && savedBoard.length > 0 ? (
          <div className="saved-state">
            {savedBoard.map((template, i) => (
              <CardExemple
                key={i}
                title={template.title}
                board={template.value}
                deletable={true}
                onDelete={setSavedBoard}
              />
            ))}
          </div>
        ) : (
          <div className="no-data">
            <Archive
              className="archive"
              height="150"
              width="150"
              fill="white"
            />
            <p>You don't have any saved board ☹️</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Board;
