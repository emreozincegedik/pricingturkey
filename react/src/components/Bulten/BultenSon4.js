import React, { useContext } from "react";
import { BultenCard } from "./index";
import { useQuery } from "react-query";
import { Context } from "../Genel";

const fetchBultenX = async (key, lastX) => {
  const response = await fetch("/bulten/select", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ lastX: lastX }),
    // body: JSON.stringify(user),
  });
  return response.json();
};

export function BultenSon4(props) {
  const { data, status } = useQuery(["bulten", props.lastX], fetchBultenX);
  // console.log(data);
  // console.log(props);
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
          />
        ))}
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
