import React, { useState, useEffect, useContext } from "react";
import { Error } from "./index";
import { useQuery } from "react-query";
import { BultenTest } from "../components/Bulten";
import { Context } from "../components";

const fetchBulten = async (key, cesit, id) => {
  // console.log(id);
  var response = await fetch(`/${cesit}/select`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ id: id }),
    // body: JSON.stringify(user),
  });
  return response.json();
  // return response.json();
};

const fetchBultenLast = async (key, bilgiCesit) => {
  var postBody = JSON.stringify({ lastX: 1 });
  var path =
    bilgiCesit === undefined || bilgiCesit === null
      ? "/bulten/select"
      : `/${bilgiCesit}/select`;
  // console.log(path);
  // console.log(path);
  // console.log(path);
  // console.log(bilgiCesit);
  const response = await fetch(path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: postBody,
    // body: JSON.stringify(user),
  });
  // var body = await response.json();
  // console.log(body);
  return response.json();
  // return response.json();
};

export function BultenTek(props) {
  const { dil_degisken } = useContext(Context).state;
  const [test, setTest] = useState([]);
  const [error, setError] = useState(false);
  const { data, status } = useQuery(
    ["bultenOwn", props.match.params.bilgiCesit, props.match.params.id],
    fetchBulten
  );
  const { data: dataLast, status: statusLast } = useQuery(
    ["bultenLast", props.match.params.bilgiCesit],
    fetchBultenLast
  );
  // console.log(data);
  // console.log(dataLast);
  if (error) return <Error />;
  return (
    status === "success" &&
    statusLast === "success" && (
      <BultenTest
        dataLast={dataLast[0]}
        featuredEquals={dataLast[0].id === data[0].id}
        baslik={dil_degisken(data[0].baslikTR, data[0].baslikEN)}
        yazi={(data[0].yaziTR, data[0].yaziEN)}
        bilgiCesit={props.match.params.bilgiCesit}
        resim={data[0].resim}
      />
    )
  );
}
