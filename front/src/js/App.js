import React, { Component } from "react";
import { Grommet, Box, Heading } from "grommet";
import wretch from "wretch";

const theme = {
  global: {
    colors: {
      brand: "#228BE6"
    },
    font: {
      family: "Roboto",
      size: "14px",
      height: "20px"
    }
  }
};

const AppBar = props => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    style={{ zIndex: "1" }}
    {...props}
  />
);

class App extends Component {
  state = {
    message: ""
  };

  componentDidMount() {
    wretch("/api/")
      .get()
      .json()
      .then(({ message }) => this.setState({ message }));
  }

  render() {
    const { message } = this.state;
    return (
      <Grommet theme={theme} full>
        <Box fill>
          <AppBar>
            <Heading level={3} margin="none">
              My App
            </Heading>
          </AppBar>
          <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
            <Box flex align="center" justify="center">
              {`this is the app with: ${message}`}
            </Box>
            <Box
              width="medium"
              background="light-2"
              elevation="small"
              align="center"
              justify="center"
            >
              sidebar
            </Box>
          </Box>
        </Box>
      </Grommet>
    );
  }
}

export default App;
