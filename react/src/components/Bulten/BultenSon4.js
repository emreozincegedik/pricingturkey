import React, { useContext } from "react";
import { BultenCard } from "./index";
import { useQuery } from "react-query";
import { Context } from "../index";
import { Error } from "../../sayfalar";

const fetchBultenX = async (key, lastX, bilgiCesit, page) => {
  var postBody = page
    ? JSON.stringify({ page: page })
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

export function BultenSon4(props) {
  const { data, status } = useQuery(
    ["bulten", props.lastX, props.bilgiCesit, props.page],
    fetchBultenX
  );
  // console.log(data);
  // console.log(props.bilgiCesit);
  // const cards = [1, 2, 3, 4];
  const context = useContext(Context);
  const { dateConverter } = context.state;
  return (
    <div className="col-md-9 d-flex flex-row flex-wrap justify-content-around">
      {status === "success" &&
        data.map((item, i) => (
          // console.log(toType(item.eklenmeTarihi)),
          <BultenCard
            key={item.id}
            id={item.id}
            img={item.resim}
            date={dateConverter(item.eklenmeTarihi)}
            baslikTR={item.baslikTR}
            baslikEN={item.baslikEN}
            yaziTR={item.yaziTR}
            yaziEN={item.yaziEN}
            bilgiCesit={props.bilgiCesit}
          />
        ))}
      {status === "success" && data.length === 0 && <Error />}
      {status === "error" && <Error />}
    </div>
  );
}

/*export  class BultenSon4 extends Component {
  render() {
    fetchBultenX("lastX: ", this.props.lastX);
    const cards = [1, 2, 3, 4];
    const testCards = {
      img: "",
      ariaLabel: "",
      title: "",
      text: "",
      btnText: "",
      date: "",
    };
    return (
      <div className="col-md-9 d-flex flex-row flex-wrap justify-content-around">
        {cards.map((item, i) => (
          <BultenCard key={i} />
        ))}
      </div>
    );
  }
}
 */
