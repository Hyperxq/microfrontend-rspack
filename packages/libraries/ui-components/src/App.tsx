import ReactDOM from "react-dom/client";

import "./index.css";
import Button from "./atoms/Button";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Button />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);