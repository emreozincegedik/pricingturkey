import React from "react";
import { Bulten } from "../components";

export function BultenMain(props) {
  // console.log(props);
  return (
    <div>
      <Bulten
        lastX={6}
        ordered={true}
        bilgiCesit={props.match.params.bilgiCesit}
        page={props.match.params.id}
      />
    </div>
  );
}
