import React, { useContext, useState } from "react";
import { BultenCard2 } from "./index";
import { Context } from "../index";
import { useQuery } from "react-query";

export function BultenRandomCards(props) {
  const [items, setItems] = useState([]);
  const fetchBultenLast = async (bilgiCesit, id, lastid) => {
    var postBody = JSON.stringify({
      random: 2,
      ownid: id,
      lastid: lastid,
    });
    var path =
      bilgiCesit === undefined || bilgiCesit === null
        ? "/bulten/select"
        : `/${bilgiCesit}/select`;
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
    var body = await response.json();
    setItems(body);
    return body;
  };
  // const { data, status } = useQuery(
  //   ["ekip", props.bilgiCesit, props.id, props.lastid],
  //   fetchBultenLast
  // );
  // fetchBultenLast(props.bilgiCesit, props.id, props.lastid);
  const a = [1, 2];
  const columnLength = 2;
  const { dil_degisken } = useContext(Context).state;
  return (
    <div className="row mb-2">
      {/* {status === "success" && */}
      {items.map((item, i) => (
        <div className={`col-md-${12 / items.length}`}>
          <BultenCard2
            id={item.id}
            baslik={dil_degisken(item.baslikTR, item.baslikEN)}
            yazi={dil_degisken(item.yaziTR, item.baslikEN)}
            resim={item.resim}
            bilgiCesit={props.bilgiCesit}
          />
        </div>
      ))}
      {/* } */}
    </div>
  );
}
