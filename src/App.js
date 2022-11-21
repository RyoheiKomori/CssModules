import { CssModules } from "./compornents/CssModules";
import { InlinStyle } from "./compornents/inlineStyle";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InlinStyle />
      <CssModules />
    </div>
  );
}
