import React, { useContext } from "react";
import { Context } from "../../components";
import "./Iletisim.css";
import contact from "../../resimler/contact.svg";

export function Iletisim() {
  const { dil_degisken } = useContext(Context).state;
  return (
    <>
      <section id="boşluk">
        <div class="container-fluid">
          <div class="jumbotron">
            <img src={contact} alt="iletişim giriş resmi" srcset="" />
          </div>
        </div>
      </section>
      <main>
        <section id="iletişim">
          <div class="container">
            <h3 class="text-center text-uppercase">Bize ulaşın</h3>
            <p class="text-center w-75 m-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              interdum purus at sem ornare sodales. Morbi leo nulla, pharetra
              vel felis nec, ullamcorper condimentum quam.
            </p>
            <div class="row d-flex justify-content-around">
              <div class="col-sm-12 col-md-6 col-lg-2 my-5">
                <div class="card border-0">
                  <div class="card-body text-center">
                    <i class="fa fa-phone fa-5x mb-3" aria-hidden="true"></i>
                    <h4 class="text-uppercase mb-5">
                      {dil_degisken("Bizi arayın", "Call us")}
                    </h4>
                    <p>+8801683615582,+8801750603409</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-6 col-lg-3 my-5">
                <div class="card border-0">
                  <div class="card-body text-center">
                    <i
                      class="fa fa-map-marker fa-5x mb-3"
                      aria-hidden="true"
                    ></i>
                    <h4 class="text-uppercase mb-5">
                      {dil_degisken("Adresimiz", "Address")}
                    </h4>
                    <address>
                      Suite 02, Level 12, Sahera Tropical Center{" "}
                    </address>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-6 col-lg-2 my-5">
                <div class="card border-0">
                  <div class="card-body text-center">
                    <i
                      class="fa fa-address-card fa-5x mb-3"
                      aria-hidden="true"
                    ></i>
                    <h4 class="text-uppercase mb-5">Mersis no:</h4>
                    <address>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Inventore, ea.{" "}
                    </address>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-6 col-lg-2 my-5">
                <div class="card border-0">
                  <div class="card-body text-center">
                    <i class="fa fa-envelope fa-5x mb-3" aria-hidden="true"></i>
                    <h4 class="text-uppercase mb-5">Email</h4>
                    <p>dfsdgdfgdf@gmail.com</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-6 col-lg-2 my-5">
                <div class="card border-0">
                  <div class="card-body text-center">
                    <i class="fa fa-building fa-5x mb-3" aria-hidden="true"></i>
                    <h4 class="text-uppercase mb-5">
                      {("Şirket Ünvanı", "Company Title")}
                    </h4>
                    <address>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Inventore, ea.{" "}
                    </address>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="maps">
          <div class="container py-5">
            <div class="embed-responsive embed-responsive-16by9">
              <iframe
                class="embed-responsive-item"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3186.364881496609!2d35.318129316107324!3d37.00109066406369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15288f348f56470f%3A0x1d2a05c195a044f5!2zw4dhxJ9kYcWfIFBzaWtvbG9qaQ!5e0!3m2!1str!2str!4v1600247181461!5m2!1str!2str"
                width="600"
                height="450"
                frameborder="0"
                style={{ border: "0" }}
                allowfullscreen="false"
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
