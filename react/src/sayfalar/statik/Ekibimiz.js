import React, { useContext } from "react";
import { useQuery } from "react-query";
import { EkipCard, Context } from "../../components";
const fetchEkip = async () => {
  const response = await fetch("/ekip/select", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    // body: JSON.stringify({ username: email, pwd: pwdHash }),
    // body: JSON.stringify(user),
  });
  return response.json();
};

export function Ekibimiz() {
  const { dil_degisken } = useContext(Context).state;
  const { data, status } = useQuery("ekip", fetchEkip);
  return (
    <main>
      <div class="container-fluid">
        <div class="lead display-4 text-center py-5">
          {dil_degisken("Ekibimiz", "Our Team")}
        </div>
        <div class="container">
          <div class="row">
            {status === "success" &&
              data.map((item) => (
                <div class="col-md-4">
                  <EkipCard
                    key={item.id}
                    img={item.resim}
                    title={item.isim + " " + item.soyisim}
                    detail={dil_degisken(item.aciklamaTR, item.aciklamaEN)}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}
