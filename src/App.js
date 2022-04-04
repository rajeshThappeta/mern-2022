import "./App.css";
import { FcApproval } from "react-icons/fc";
import { MdBookmarks } from "react-icons/md";

function App() {
  return (
    <div>
      <h1 className="text-center text-info">
        <MdBookmarks className="text-warning" /> Welcome to React <FcApproval />
        <p className="lead">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi
          consectetur, velit perspiciatis doloremque omnis quae obcaecati dolore
          expedita, natus corporis quibusdam officiis reiciendis soluta numquam
          ipsum dolor, debitis quidem pariatur voluptas. Hic, debitis neque
          eaque recusandae quae illo corrupti repellat quo, alias tenetur
          corporis omnis veniam nemo facere voluptatum?
        </p>
      </h1>
    </div>
  );
}

export default App;
