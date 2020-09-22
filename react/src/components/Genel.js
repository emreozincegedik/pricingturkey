import React, { Component } from "react";
import Cookie from "js-cookie";

export const Context = React.createContext();

export class Genel extends Component {
  state = {
    diller: ["tr", "en"],
    secili_dil: Cookie.get("dil") != null ? Cookie.get("dil") : "tr",
    uyegirisi: Cookie.get("giris") != null ? Cookie.get("giris") : false,
    bultenCount: 6,
    girisHandler: (bool, expires) => {
      // Cookie.set("giris", bool);
      this.setState({ uyegirisi: bool });
      bool
        ? Cookie.set("giris", bool, { expires: expires })
        : Cookie.remove("giris");
    },
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
    dateConverter: (date) => {
      // console.log(date);
      var dateObj = new Date(date);
      var month = dateObj.getUTCMonth() + 1; //months from 1-12
      var day = dateObj.getUTCDate();
      var year = dateObj.getUTCFullYear();
      var newdate = day + "/" + month + "/" + year;
      return newdate;
    },
    bultenPageCount: (count) => {
      this.setState({ bultenCount: count });
    },
    anasayfa: true,
  };
  render() {
    return (
      <Context.Provider value={{ state: this.state, a: 5 }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
