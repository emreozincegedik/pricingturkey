import React from "react";

export function EkipCard(props) {
  return (
    <div /* class="col-lg-4" */>
      <img
        src={props.img || "https://via.placeholder.com/300x300"}
        className="rounded-circle"
        style={{ width: "90%" }}
        alt={props.title || "Heading"}
      />
      <h2>{props.title || "Heading"}</h2>
      <p /* style={{ width: "200px" }} */>
        {props.detail ||
          `Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.
          Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo
          risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo
          cursus magna.`}
      </p>
      {/* <p>
          <a class="btn btn-outline-secondary" href="#" role="button">
            View details &raquo;
          </a>
        </p> */}
    </div>
  );
}

// export class EkipCard extends Component {
//   render() {
//     return (
//       <div /* class="col-lg-4" */>
//         <img
//           src={this.props.img || "https://via.placeholder.com/300x300"}
//           className="rounded-circle"
//           style={{ width: "90%" }}
//         />
//         <h2>{this.props.title || "Heading"}</h2>
//         <p /* style={{ width: "200px" }} */>
//           {this.props.detail ||
//             `Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.
//           Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo
//           risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo
//           cursus magna.`}
//         </p>
//         {/* <p>
//           <a class="btn btn-outline-secondary" href="#" role="button">
//             View details &raquo;
//           </a>
//         </p> */}
//       </div>
//     );
//   }
// }
