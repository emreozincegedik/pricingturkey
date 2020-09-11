import React from "react";
import { NavLink } from "react-router-dom";

export function BultenFeatured(props) {
  return (
    <div
      class="jumbotron p-4 p-md-5 text-white rounded bg-dark"
      style={{ marginTop: "90px" }}
    >
      <div class="col-md-6 px-0">
        <h1 class="display-4 font-italic">
          {props.baslik || "Title of a longer featured blog post"}
        </h1>
        <p class="lead my-3">
          {props.yazi ||
            `Multiple lines of text that form the lede, informing new readers
          quickly and efficiently about what’s most interesting in this post’s
          contents.`}
        </p>
        <p class="lead mb-0">
          <NavLink
            to={`/bilgi/${props.bilgiCesit}/baslik/${props.id}`}
            class="text-white font-weight-bold"
          >
            Continue reading...
          </NavLink>
        </p>
      </div>
    </div>
  );
}
