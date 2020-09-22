import { Context } from "../index";
import { NavLink } from "react-router-dom";

import React, { useState, useContext, useEffect } from "react";

export function BultenTarih(props) {
  const fetchYears = async () => {
    var response = await fetch(`/${props.bilgiCesit || "bulten"}/select`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ years: "all" }),
      // body: JSON.stringify(user),
    });
    var body = await response.json();
    setYears(body);
  };
  const { dil_degisken } = useContext(Context).state;
  const [years, setYears] = useState([]);
  useEffect(() => {
    fetchYears();
  }, []);
  // const years = ["2020", "2019"];

  return (
    <aside className={`col-md-${props.col || "3"} justify-content-end`}>
      {props.anasayfa !== true && (
        <div className="p-4 mb-3 bg-vahitcan">
          <h4 className="font-italic">{dil_degisken("Hakkımızda", "About")}</h4>
          <p className="mb-0">
            Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis
            consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla
            sed consectetur.
          </p>
        </div>
      )}

      <div className="p-4">
        <h4 className="font-italic">{dil_degisken("Arşivler", "Archives")}</h4>
        <ol className="list-unstyled mb-0">
          {years.map((year, i) => (
            <li key={i}>
              <NavLink
                to={`/bilgi/${props.bilgiCesit || "bulten"}/${
                  year.eklenmeTarihi
                }/sayfa/1`}
              >
                {year.eklenmeTarihi}
              </NavLink>
            </li>
          ))}
        </ol>
      </div>
    </aside>
  );
}

// export class BultenTarih extends Component {
//   fetchYears = async () => {
//     var response = await fetch(`/${this.props.cesit || "bulten"}/select`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json;charset=utf-8",
//       },
//       body: JSON.stringify({ years: "all" }),
//       // body: JSON.stringify(user),
//     });
//     var body = await response.json();
//     this.setState({ years: body });
//   };
//   componentDidMount() {
//     this.fetchYears();
//     // console.log(id);
//     // return response.json();
//   }
//   state = {
//     years: [],
//   };
//   static contextType = Context;
//   render() {
//     const { dil_degisken } = this.context.state;
//     const years = ["2020", "2019"];
//     console.log(this.state.years);
//     return (
//       <aside className={`col-md-${this.props.col || "3"} justify-content-end`}>
//         <div className="p-4 mb-3 bg-vahitcan">
//           <h4 className="font-italic">About</h4>
//           <p className="mb-0">
//             Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis
//             consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla
//             sed consectetur.
//           </p>
//         </div>

//         <div className="p-4">
//           <h4 className="font-italic">Archives</h4>
//           <ol className="list-unstyled mb-0">
//             {this.state.years.map((year) => (
//               <li key={year}>
//                 <NavLink to={"bilgi/bulten/" + year + "/sayfa/1"}>
//                   {year}
//                 </NavLink>
//               </li>
//             ))}
//           </ol>
//         </div>
//       </aside>
//     );
//   }
// }
