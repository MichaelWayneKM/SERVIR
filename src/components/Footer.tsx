import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export const Footer = () => {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="twitter" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="google" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="instagram" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            {/* <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="globe" className="me-3" />
                SERVIR EAST & SOUTHERN AFRICA
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol> */}
            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Quick Links</h6>
              <p>
                <a href="#!" className="text-reset">
                  About SERVIR
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Applied Sciences Team
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Our Team
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Contact Us with Email
                </a>
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                OUR COLLABORATIONS
              </h6>
              <p>
                <a href="#!" className="text-reset">
                  GLOBE
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  4H-Kenya
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  TAHMO
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Space Challenges
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">SERVIR HUBS</h6>
              <p>
                <a href="https://servir.adpc.net/" className="text-reset">
                  SERVIR Mekong
                </a>
              </p>
              <p>
                <a
                  href="http://www.icimod.org/servir-himalaya"
                  className="text-reset"
                >
                  SERVIR Hindu-Kush Himalaya
                </a>
              </p>
              <p>
                <a
                  href="http://www.tetratech.com/en/projects/servir-west-africa"
                  className="text-reset"
                >
                  SERVIR West Africa
                </a>
              </p>
              <p>
                <a href="https://servir.ciat.cgiar.org/" className="text-reset">
                  SERVIR Amazonia
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">USEFUL LINKS</h6>
              <p>
                <a href="https://www.servirglobal.net/" className="text-reset">
                  SERVIR Global
                </a>
              </p>
              <p>
                <a
                  href="http://catalogue.servirglobal.net/"
                  className="text-reset"
                >
                  Product Catalog
                </a>
              </p>
              <p>
                <a
                  href="https://www.servirglobal.net/Global/Maps-Data/Data-Catalog/"
                  className="text-reset"
                >
                  Data Catalog
                </a>
              </p>
              <p>
                <a
                  href="https://www.servirglobal.net/Global/Maps-Data/Interactive-Mapper"
                  className="text-reset"
                >
                  Geoportal
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        Built Open Source:{" "}
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          SERVIR EAST AND SOUTHERN AFRICA PROJECT
        </a>
      </div>
    </MDBFooter>
  );
};
