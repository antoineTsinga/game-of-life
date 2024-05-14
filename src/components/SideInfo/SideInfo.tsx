import React from "react";
import CardExemple from "../CardExemple/CardExemple.tsx";
import "./SideInfo.css";
import {
  glider,
  blinker,
  gosperGliderGun,
  achimsp4,
} from "../../utils/exempleGameofLife.ts";

export default function SideInfo() {
  const templates = [glider, blinker, gosperGliderGun, achimsp4];
  return (
    <div className="sideinfo">
      <h1 className="h1">Game of life 🧬</h1>
      <div className="container-sideinfo">
        <p>
          This A mesmerizing digital playground where simple rules give rise to
          complex patterns, mirroring the essence of life's evolution
        </p>
        <p>The rules of the Game of Life are deceptively simple:</p>
        <div className="rules">
          <li>
            Any live cell with fewer than two live neighbors dies , as if by
            <span className="bold"> underpopulation.</span> ☠️
          </li>
          <li>
            Any live cell with two or three live neighbors lives on to the next
            generation.
          </li>
          <li>
            Any live cell with more than three live neighbors dies , as if by
            <span className="bold"> overpopulation.</span> ☠️
          </li>
          <li>
            Any dead cell with exactly three live neighbors becomes a live cell,
            as if by <span className="bold"> reproduction.</span>
          </li>
          <p>Here is some exemple of what you can make ! 👇</p>
        </div>
        <div className="example-state">
          {templates.map((template, i) => (
            <CardExemple
              key={i}
              title={template.title}
              board={template.value}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
