import React, { useContext } from "react";
import { useQuery } from "react-query";
import { Context } from "../components/Genel";
import { Error } from "./index";
// import {Redirect} from 'react-router-dom'

const fetchBulten = async (key, cesit, id) => {
  // console.log(id);
  const response = await fetch(`/${cesit}/select`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ id: id }),
    // body: JSON.stringify(user),
  });
  return response.json();
};
//props.match.params.id
export function BultenTek(props) {
  console.log("params: ", props.match.params);
  const { data, status } = useQuery(
    ["ekip", props.match.params.bilgiCesit, props.match.params.id],
    fetchBulten
  );
  const { dil_degisken, dateConverter } = useContext(Context).state;
  console.log(props);

  return (
    <div>
      {status === "success" && data.length > 0 && (
        <div class="col-md-8 blog-main">
          <h1 class="pb-4 mb-4 lead border-bottom">
            {dil_degisken(data[0].baslikTR, data[0].baslikEN)}
          </h1>
          <p>{dateConverter(data[0].eklenmeTarihi)}</p>
          <div
            dangerouslySetInnerHTML={{
              __html: dil_degisken(data[0].yaziTR, data[0].yaziEN),
            }}
          ></div>
        </div>
      )}
      {status === "success" && data.length === 0 && <Error />}
      {status === "error" && <Error />}
    </div>
  );
}
