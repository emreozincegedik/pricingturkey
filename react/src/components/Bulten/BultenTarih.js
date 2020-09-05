import React, { Component } from "react";
import { Context } from "../index";
import { NavLink } from "react-router-dom";

export class BultenTarih extends Component {
  static contextType = Context;
  render() {
    const { dil_degisken } = this.context.state;
    const months = [
      ["Aralık", "December"],
      ["Kasım", "November"],
      ["Ekim", "October"],
      ["Ağustos", "August"],
      ["Temmuz", "July"],
      ["Haziran", "June"],
      ["Mayıs", "May"],
      ["Nisan", "April"],
      ["Mart", "March"],
      ["Eylül", "September"],
      ["Şubat", "February"],
      ["Ocak", "January"],
    ];
    const years = ["2020", "2019"];
    return (
      <aside className="col-md-3 justify-content-end">
        <div className="p-4 mb-3 bg-vahitcan">
          <h4 className="font-italic">About</h4>
          <p className="mb-0">
            Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis
            consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla
            sed consectetur.
          </p>
        </div>

        <div className="p-4">
          <h4 className="font-italic">Archives</h4>
          <ol className="list-unstyled mb-0">
            {years.map((year) =>
              months.map((month) => (
                <li key={year + "/" + month}>
                  <NavLink to={"/bultenler/" + year + "/" + month[0]}>
                    {year + " " + dil_degisken(month[0], month[1])}
                  </NavLink>
                </li>
              ))
            )}
          </ol>
        </div>
      </aside>
    );
  }
}
