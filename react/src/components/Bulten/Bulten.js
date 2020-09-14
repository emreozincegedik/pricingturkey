import React, { useContext } from "react";
import { BultenSon4, BultenTarih } from "./index";
import { Context } from "../index";
import { NavLink } from "react-router-dom";
import { useQuery } from "react-query";

const fetchBultenX = async (key, lastX, bilgiCesit, page, year) => {
  // console.log(year);
  var postBody = page
    ? year !== undefined && year !== null
      ? JSON.stringify({ year: year, pages: page })
      : JSON.stringify({ page: page })
    : JSON.stringify({ lastX: lastX });
  var path =
    bilgiCesit === undefined || bilgiCesit === null
      ? "/bulten/select"
      : `/${bilgiCesit}/select`;
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
  return response.json();
};

export function Bulten(props) {
  const context = useContext(Context);
  const { dil_degisken } = context.state;
  const basliklar = {
    bulten: ["Bülten", "Bulletin"],
    duyuru: ["Duyuru", "Announcement"],
    haber: ["Haberler", "News"],
  };
  const { data, status } = useQuery(
    [
      "bultenNext",
      props.lastX,
      props.bilgiCesit,
      parseInt(props.page) + 1,
      props.yil,
    ],
    fetchBultenX
  );
  // console.log(props.bilgiCesit);
  return (
    <>
      <div className="container py-5" style={{ marginTop: "90px" }}>
        {props.bilgiCesit !== undefined && props.bilgiCesit !== null && (
          <h1>
            {dil_degisken(
              basliklar[props.bilgiCesit][0],
              basliklar[props.bilgiCesit][1]
            )}
          </h1>
        )}
        <div className="row">
          {props.ordered ? (
            <>
              <BultenTarih bilgiCesit={props.bilgiCesit} />
              <BultenSon4
                yil={props.yil}
                lastX={props.lastX || 4}
                bilgiCesit={props.bilgiCesit}
                page={props.page}
              />
            </>
          ) : (
            <>
              <BultenSon4
                yil={props.yil}
                lastX={props.lastX || 4}
                bilgiCesit={props.bilgiCesit}
                page={props.page}
              />
              <BultenTarih />
            </>
          )}
        </div>
      </div>
      {props.bilgiCesit !== undefined && props.bilgiCesit !== null && (
        <div className="container">
          <div aria-label="Page navigation example">
            <ul class="nav-justified pagination">
              {props.page > 1 && (
                <li class="page-item">
                  <NavLink
                    class="page-link disabled"
                    to={`/bilgi/${props.bilgiCesit}/sayfa/${props.page - 1}`}
                  >
                    {dil_degisken("Önceki sayfa", "Previous page")}
                  </NavLink>
                </li>
              )}
              <li class="page-item">
                {!isNaN(parseInt(props.page)) &&
                  status === "success" &&
                  data.length !== 0 && (
                    <NavLink
                      class="page-link"
                      to={`/bilgi/${props.bilgiCesit}/sayfa/${
                        parseInt(props.page) + 1
                      }`}
                    >
                      {dil_degisken("Sonraki sayfa", "Next page")}
                    </NavLink>
                  )}
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
