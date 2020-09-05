import React, { useContext } from "react";
import { Context } from "../components/Genel";

export function Hizmetlerimiz() {
  const state = useContext(Context).state;
  return <div style={{}}>{state.dil_degisken("türkçe", "eng")}</div>;
}
