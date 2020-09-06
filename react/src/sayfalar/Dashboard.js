import React from "react";
import { Helmet } from "react-helmet";
import "./Dashboard.css";

export function Dashboard() {
  return (
    <div>
      <div class="navbar navbar-dark fixed-top bg-dashboardkoyumavi flex-md-nowrap p-0">
        <a class="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">
          Logo
        </a>
        <button
          class="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ marginLeft: "%80" }}
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <ul class="navbar-nav px-3"></ul>
      </div>

      <div class="container-fluid">
        <div class="row">
          <nav
            id="sidebarMenu"
            class="navbar col-md-3 col-lg-2 d-md-block bg-dashboardparliment sidebar collapse"
          >
            <div class="sidebar-sticky pt-3">
              <ul class="nav flex-column">
                <li class="nav-item text-nowrap">
                  <a class="nav-link" href="#">
                    Sign out
                  </a>
                </li>
                <li class="nav-item border-bottom border-top">
                  <a class="nav-link active" href="#">
                    <span data-feather="bulten"></span>
                    Bülten <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item border-bottom">
                  <a class="nav-link" href="#">
                    <span data-feather="Haber"></span>
                    Haber
                  </a>
                </li>
                <li class="nav-item border-bottom">
                  <a class="nav-link" href="#">
                    <span data-feather="Duyurular"></span>
                    Duyurular
                  </a>
                </li>
                <li class="nav-item border-bottom">
                  <a class="nav-link" href="#">
                    <span data-feather="users"></span>
                    Lorem.
                  </a>
                </li>
                <li class="nav-item border-bottom">
                  <a class="nav-link" href="#">
                    <span data-feather="bar-chart-2"></span>
                    Lorem.
                  </a>
                </li>
                <li class="nav-item border-bottom">
                  <a class="nav-link" href="#">
                    <span data-feather="layers"></span>
                    Lorem.
                  </a>
                </li>
              </ul>

              <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                <span>Lorem, ipsum.</span>
                <a
                  class="d-flex align-items-center text-muted"
                  href="#"
                  aria-label="Add a new report"
                >
                  <span data-feather="plus-circle"></span>
                </a>
              </h6>
              <ul class="nav flex-column mb-2">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="file-text"></span>
                    Lorem.
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="file-text"></span>
                    Lorem.
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="file-text"></span>
                    lorem
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="file-text"></span>
                    lorem
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 class="h2">Dashboard</h1>
              <div class="btn-toolbar mb-2 mb-md-0">
                <div class="btn-group mr-auto">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    Ekle
                  </button>
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    Çıkar
                  </button>
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    Sil
                  </button>
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    Güncelle
                  </button>
                </div>

                <div class="dropdown mx-3">
                  <button
                    class="btn btn-vahitcan dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    xx seçin
                  </button>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </div>

                <input
                  type="date"
                  class="btn btn-sm border-secondary dropdown-toggle"
                />
              </div>
            </div>

            <div class="container">
              <form>
                <div class="row">
                  <div class="col">
                    <div class="form-label-group py-2">
                      <label htmlFor="baslikTR">Türkçe başlık</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Başlık Türkçe"
                        id="baslikTR"
                      />
                    </div>
                  </div>
                  <div class="col">
                    <div
                      class="form-label-group py-2
                            "
                    >
                      <label htmlFor="baslikEN">İngilizce başlık</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="İngilizce başlık"
                        id="baslikEN"
                      />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col">
                    <div class="form-group py-3">
                      <textarea
                        class="form-control"
                        id="yaziTR"
                        rows="10"
                        placeholder="Türkçe metni girin."
                      ></textarea>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-group py-3">
                      <textarea
                        class="form-control"
                        id="yaziEN"
                        rows="10"
                        placeholder="İngilizce metni girin."
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div class="input-group">
                  <div class="custom-file">
                    <input
                      type="file"
                      class="custom-file-input"
                      id="resim"
                      aria-describedby="inputresim"
                      accept=".jpg, .jpeg, .png"
                    />
                    <label class="custom-file-label" htmlFor="resim">
                      Resim dosyasını yükleyin. (.jpg, .jpeg, .png)
                    </label>
                  </div>
                </div>

                <div class="row">
                  <button class="btn btn-outline-emre btn-block mt-3">
                    Gönder
                  </button>
                </div>
              </form>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
