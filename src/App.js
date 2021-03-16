import logo from "./logo.png";
import { theme } from "./theme.js";
import { Grommet, Box } from "grommet";
import "./App.css";

const AppBar = (props) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="blue!"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1" }}
    {...props}
  />
);
export const ColorStory = () => {
  return (
    <Grommet theme={theme}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
      <AppBar>
        <div height="4rem"></div>
      </AppBar>
    </Grommet>
  );
};

export default ColorStory;
