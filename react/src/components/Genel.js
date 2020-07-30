import React, { Component } from "react";
import Cookie from "js-cookie";

export const Context = React.createContext();

export class Genel extends Component {
  state = {
    diller: ["tr", "en"],
    secili_dil: Cookie.get("dil") != null ? Cookie.get("dil") : "tr",
    dil_degistir: (dil) => {
      this.setState({ secili_dil: dil });
      Cookie.set("dil", dil);
      // console.log(dil);
    },
    dil_degisken: (tr, en) => {
      const { secili_dil, diller } = this.state;
      if (secili_dil === diller[0]) {
        return tr;
      }
      if (secili_dil === diller[1]) {
        return en;
      }
    },
    scroll: "",
    scrollSetup: (name) => {
      this.setState({ scroll: name });
    },
  };
  render() {
    return (
      <Context.Provider value={{ state: this.state, a: 5 }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
