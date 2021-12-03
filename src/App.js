import { Route, Switch } from "react-router";
import GlobalStyle from "./globalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Theme";
import Main from "./components/Main";
import About from "./components/About";
import MySkills from "./components/MySkills";
import Work from "./components/Work";
function App() {
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={lightTheme}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={About} />
          <Route exact path="/skills" component={MySkills} />
          <Route exact path="/work" component={Work} />
        </Switch>
      </ThemeProvider>
    </>
  );
}

export default App;
