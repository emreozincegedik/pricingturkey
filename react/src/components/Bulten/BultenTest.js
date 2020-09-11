import React, { useContext, useState } from "react";
import { BultenTarih, BultenRandomCards, BultenFeatured } from "./index";
import { Context } from "../index";
import { useQuery } from "react-query";

export function BultenTest(props) {
  const { dil_degisken } = useContext(Context).state;
  const [items, setItems] = useState([]);
  // const { data, status } = useQuery(
  //   ["bulten", props.bilgiCesit],
  //   fetchBultenLast
  // );

  // console.log(props.dataLast);
  return (
    <div class="container my-3">
      {!props.featuredEquals && (
        <>
          <BultenFeatured
            id={props.dataLast.id}
            baslik={dil_degisken(
              props.dataLast.baslikTR,
              props.dataLast.baslikEN
            )}
            yazi={dil_degisken(
              props.dataLast.yaziTR,
              props.dataLast.yaziEN
            ).substring(0, 200)}
            bilgiCesit={props.bilgiCesit}
          />
          <BultenRandomCards id={props.id} lastid={props.dataLast.id} />
        </>
      )}

      <div class="row">
        <div class="col-md-8 blog-main">
          <div class="blog-post">
            <h2 class="blog-post-title">
              {props.baslik || "Sample blog post"}
            </h2>
            <p class="blog-post-meta">{props.date || "22/12/2020"}</p>

            <p>
              {props.yazi ||
                `This blog post shows a few different types of content that’s
              supported and styled with Bootstrap. Basic typography, images, and
              code are all supported.`}
            </p>
          </div>
        </div>
        <BultenTarih col={4} />
      </div>
    </div>
  );
}
