import React from "react";
import { Alert } from "./index";

export function DashboardIstek() {
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
            <tr>
              <th scope="row">1</th>
              <td>Emre</td>
              <td>Özincegedik</td>
              <td>emreozincegedik@gmail.com</td>
              <td>Danışmanlık</td>
              <td class="col-xs-2">
                Lorem ipsum dolor sit, <button>hepsini göster</button>
              </td>
              <td>
                <button class="btn btn-danger">sil</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Alert />
    </>
  );
}
