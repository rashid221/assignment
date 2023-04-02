import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function App() {
  return (
    <div className="rotate-div">
      <div className="rotate-upper">
        <div className="upper-1">
          <h5>Assignment Branch</h5>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley
          </p>
        </div>
        <div className="upper-2"></div>
      </div>
      <div className="rotate-inner">
        <div className="inner-1">
          <h5>Lorem Ipsum</h5>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley
          </p>
          <button type="button" class="btn btn-danger rounded-0">
            Learn More
          </button>
        </div>
        <div className="inner-2">
          <div className="inner-icon">
            <FaAngleLeft className="icon-1" />
            <FaAngleRight className="icon-1" />
          </div>
          <h5>Lorem ipsum</h5>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <button type="button" class="btn btn-danger rounded-0">
            Learn More
          </button>
        </div>
        <div className="inner-3"></div>
      </div>
     <div className="rotate-lower">
      <div className="line-1">
      </div>
      <div className="line-2">
         </div>
         <div className="line-3">
         </div>
         <div className="line-4">
         </div>
      <div className="box-1">
             <h5>Box 1</h5>
      </div>
      <div className="box-2">
        <h5>Box 2</h5>
      </div>
     </div>
    </div>
  );
}

export default App;
