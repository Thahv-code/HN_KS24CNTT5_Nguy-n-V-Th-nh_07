import { Flex } from "antd";
import "./App.css";
import Inputform from "./compoment/input";
import OpenModal from "./compoment/modal";

function App() {
  return (
    <div class="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 ...">
      <div class="top">

      </div>
      <div class="middle">
        <p>Lọc theo</p>
        <select class="...">
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <OpenModal>
          <Inputform />
        </OpenModal>
      </div>
      <div class="bottom">
        
  </div>

    </div>
  );
}

export default App;
