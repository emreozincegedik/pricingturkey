import React, { useContext } from "react";
import { BultenTarih, BultenFeatured } from "./index";
import { Context } from "../index";

export function BultenTest(props) {
  const { dil_degisken } = useContext(Context).state;
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
            resim={props.dataLast.resim}
          />
        </>
      )}

      <div class="row">
        <div class="col-md-8 blog-main">
          <div class="blog-post">
            <h2 class="blog-post-title">
              {props.baslik || "Sample blog post"}
            </h2>
            <p class="blog-post-meta">{props.date || "22/12/2020"}</p>
            <img
              className="img-fluid"
              src={props.resim || "https://via.placeholder.com/1640x640"}
              alt={dil_degisken("öne çıkan resim", "featured img")}
            />
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
