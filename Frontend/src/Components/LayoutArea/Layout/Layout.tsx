import { Generator } from "../../GeneratorArea/Generator/Generator";
import { Header } from "../Header/Header";
import "./Layout.css";

export function Layout(): JSX.Element {
  return (
    <div className="Layout">
      <header>
        <Header />
      </header>
      <main>
        <Generator/>
      </main>
    </div>
  );
}
