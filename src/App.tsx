import { Header } from "./components/header";
import { Main } from "./components/main";
import { Projects } from "./components/projects";
import { GlobalStyles } from "./styles/global";

export function App() {

  return (
    <div>
      <Header />
      <Main />
      <Projects />
      <GlobalStyles />
    </div>
  )
}
