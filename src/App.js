import "./App.css";
import Board from "./components/Board/board.tsx";

function App() {
  return (
    <div className="App">
      <Board />
      <div className="footer">
        <span>👋 Hi I'm Antoine software engineer</span>
        <a href="https://github.com/antoineTsinga"> Follow me on GitHub</a>
      </div>
    </div>
  );
}

export default App;
