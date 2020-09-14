import React, { useEffect, useState } from "react";
import { Alert } from "./index";
import { useQuery } from "react-query";

export function DashboardIstek() {
  // const { data, status } = useQuery(["mesaj"], fetchMesaj);
  const [show, setShow] = useState(false);
  const [idDelete, setIdDelete] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [seciliMesaj, setSeciliMesaj] = useState(0);
  const [mesajlar, setMesajlar] = useState([]);
  const beginDelete = () => {
    deleteMesaj(idDelete);
  };
  useEffect(() => {
    fetchMesaj();
  }, []);
  const deleteMesaj = async (id) => {
    const response = await fetch("/mesaj/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ id: id }),
    });
    var body = await response.json();
    const newMesajlar = mesajlar.filter((item) => item.id !== id);
    // console.log(newMesajlar);
    setMesajlar(newMesajlar);
    setShow(false);
    // console.log(body);
  };
  const fetchMesaj = async () => {
    const response = await fetch("/mesaj/select", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    });
    const body = await response.json();
    setMesajlar(body.reverse());
  };
  const updateMesajlar = (id) => {
    const newMesajlar = mesajlar.filter((item) => item.id !== id);
    console.log(newMesajlar);
    setMesajlar(newMesajlar);
  };
  // console.log(data);
  return (
    <>
      <div role="main" class="col-md-9 mk-sm-auto col-lg-10 px-md-4">
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 class="h2">Mesajlar</h1>
        </div>
        <table class="table table-responsive table-borderless">
          <thead>
            <tr>
              <th>#</th>
              <th>İsim</th>
              <th>Soyisim</th>
              <th>Email</th>
              <th>İstenen Servis</th>
              <th>Mesaj</th>
            </tr>
          </thead>
          <tbody>
            {
              /* status === "success" && */
              mesajlar.map((item, i) => (
                <tr key={item.id}>
                  <td>{i + 1}</td>
                  <td>{item.isim}</td>
                  <td>{item.soyisim}</td>
                  <td>{item.email}</td>
                  <td>{item.servis}</td>
                  <td>{item.mesaj}</td>
                  <td>
                    <button
                      class="btn btn-danger"
                      onClick={() => {
                        setSeciliMesaj(i + 1);
                        setIdDelete(item.id);
                        setShow(true);
                        // deleteMesaj(item.id);
                        // updateMesajlar(item.id);
                      }}
                    >
                      sil
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      <Alert
        show={show}
        handleClose={handleClose}
        handleOk={beginDelete}
        title={`${seciliMesaj}. mesajı silmek istediğinize emin misiniz?`}
      />
    </>
  );
}
