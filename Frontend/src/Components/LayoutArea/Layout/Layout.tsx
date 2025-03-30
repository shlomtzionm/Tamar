import { Login } from "../../LoginArea/Login";
import { Header } from "../Header/Header";
import "./Layout.css";

export function Layout(): JSX.Element {
  return (
    <div className="Layout">
      <header>
        <Header />
      </header>
      <main>
    <Login/>
      </main>
    </div>
  );
}
