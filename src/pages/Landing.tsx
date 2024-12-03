/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/anchor-has-content */
import { Button } from "primereact/button";
//import enterpriseSVG from "../images/enterprise.svg";
//import freeSVG from "../images/free.svg";
//import startuSVG from "../images/startup.svg";
import { Carousel } from "primereact/carousel";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Sidebar } from "primereact/sidebar";
import { useState } from "react";
import useLandingHook from "./hook/useLandingHook";

export const LandingPage: React.FC = () => {
  useLandingHook();
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Tênis Esportivo",
      price: 299.99,
      image: "product1.jpg",
      inventoryStatus: "INSTOCK",
    },
    {
      id: 2,
      name: "Camisa de Time",
      price: 199.99,
      image: "product2.jpg",
      inventoryStatus: "LOWSTOCK",
    },
    {
      id: 3,
      name: "Bola de Futebol",
      price: 99.99,
      image: "product3.jpg",
      inventoryStatus: "OUTOFSTOCK",
    },
  ]);

  const productTemplate = (product: any) => {
    return (
      <div
        className="flex items-center justify-center"
        style={{ height: "20rem", width: "100%" }}
      >
        <div className="mb-3">
          <img
            src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
            alt={product.name}
            className="w-6 shadow-2"
          />
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-start w-full min-h-screen bg-slate-100 relative overflow-x-hidden">
      <div className="py-3 px-4 lg:px-14 flex items-center justify-between w-full fixed top-0 left-0 bg-slate-100 z-10">
        <h1
          data-scroll-target="#home"
          className="flex items-center cursor-pointer text-sm"
        >
          <img src={""} alt="logo" style={{ width: 40, height: 40 }} />
          <span
            className="ml-2 text-900 font-medium text-3xl line-height-3 mr-8"
            style={{ color: "#3B82F6" }}
          >
            OkSport
          </span>
        </h1>
        <div
          className="items-center flex-grow-1 justify-between hidden lg:flex absolute lg:static w-full left-0 px-6 lg:px-0 z-2"
          style={{ top: "100%" }}
        >
          <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row cursor-pointer ml-10 gap-4">
            <li>
              <Button
                label="Inicio"
                text
                rounded
                size="small"
                className="h-8"
                data-scroll-target="#home"
              />
            </li>
            <li>
              <Button
                label="Funcionalidades"
                text
                rounded
                size="small"
                className="h-8"
                data-scroll-target="#features"
              />
            </li>
            <li>
              <Button
                label="Destaques"
                text
                rounded
                size="small"
                className="h-8"
                data-scroll-target="#highlights"
              />
            </li>
            <li>
              <Button
                label="Nossos Planos"
                text
                rounded
                size="small"
                className="h-8"
                data-scroll-target="#pricing"
              />
            </li>
          </ul>
          <div className="flex justify-between py-3 mt-3 lg:mt-0 absolute right-12">
            <div className="flex">
              <InputText placeholder="Buscar" className="h-8 mr-2" />
              <Button
                icon="pi pi-search"
                rounded
                size="small"
                className="mr-16 h-8 font-normal p-2 rounded-3xl px-5 transition-all duration-700 ease-out hover:bg-slate-200 text-sm  border-2 border-transparent "
              />
            </div>
            <Button
              icon="pi pi-shopping-cart"
              rounded
              severity="secondary"
              size="small"
              onClick={() => setVisible(!visible)}
              className="h-8 font-normal p-2 rounded-3xl px-5 transition-all duration-700 ease-out hover:bg-slate-200 text-sm  border-2 border-transparent mr-4"
            ></Button>
            <Button
              icon="pi pi-user"
              rounded
              size="small"
              onClick={() => setOpen(!open)}
              className="h-8 font-normal p-2 rounded-3xl px-5 transition-all duration-700 ease-out hover:bg-slate-200 text-sm  border-2 border-transparent "
            ></Button>
            <Sidebar
              header={
                <h5 className="font-medium text-2xl text-slate-700 h-0 p-0 m-0">
                  Meu Carrinho
                </h5>
              }
              visible={visible}
              onHide={() => setVisible(false)}
              //icons={customIcons}
              position="right"
              style={{ width: "25%" }}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </Sidebar>
            <Dialog
              header="Entrar na Minha Conta"
              visible={open}
              position={"center"}
              style={{ width: "30vw", height: "80vh"}}
              onHide={() => {
                if (!open) return;
                setOpen(false);
              }}
              draggable={false}
              resizable={false}
            >
              
            </Dialog>
          </div>
        </div>
      </div>

      <div className="mt-24 w-full overflow-y-visible overflow-x-hidden">
        <div
          id="home"
          className="flex items-center justify-center pt-4 px-4 lg:px-6 overflow-hidden w-full"
          style={{
            height: "450px",
            border: "1px solid black",
          }}
        >
          <Carousel
            value={products}
            numVisible={1}
            numScroll={1}
            className="justify-center w-full h-full border"
            circular
            autoplayInterval={3000}
            itemTemplate={productTemplate}
          />
        </div>

        <div id="features" className="overflow-x-hidden">
          <div className="flex flex-col items-start justify-center text-center mt-8 mb-12 px-14">
            <h2
              className="text-900 w-96 text-2xl p-4 text-white mb-4 font-bold flex items-center justify-center gap-2 rounded-md"
              style={{ backgroundColor: "#3B82F6" }}
            >
              <i
                className="pi pi-th-large mt-1"
                style={{ fontSize: "1.5rem" }}
              ></i>
              Recursos maravilhosos
            </h2>
            <span className="text-600">
              Descubra funcionalidades criadas para simplificar sua vida,
              proporcionando uma experiência única e eficiente em cada
              interação.
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center p-14">
            <div className="mt-4 lg:mt-0">
              <div
                style={{
                  height: "160px",
                  padding: "2px",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(90deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2))",
                }}
              >
                <div className="p-3 h-full" style={{ borderRadius: "8px" }}>
                  <div
                    className="flex items-center justify-center bg-yellow-200 mb-3"
                    style={{
                      width: "3.5rem",
                      height: "3.5rem",
                      borderRadius: "10px",
                    }}
                  >
                    <i className="pi pi-fw pi-users text-2xl text-yellow-700"></i>
                  </div>
                  <h5 className="mb-2 text-900">Easy to Use</h5>
                  <span className="text-600">
                    Posuere morbi leo urna molestie.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 lg:mt-0">
              <div
                style={{
                  height: "160px",
                  padding: "2px",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(90deg, rgba(145,226,237,0.2),rgba(251, 199, 145, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(172, 180, 223, 0.2))",
                }}
              >
                <div
                  className="p-3 surface-card h-full"
                  style={{ borderRadius: "8px" }}
                >
                  <div
                    className="flex items-center justify-center bg-cyan-200 mb-3"
                    style={{
                      width: "3.5rem",
                      height: "3.5rem",
                      borderRadius: "10px",
                    }}
                  >
                    <i className="pi pi-fw pi-palette text-2xl text-cyan-700"></i>
                  </div>
                  <h5 className="mb-2 text-900">Fresh Design</h5>
                  <span className="text-600">Semper risus in hendrerit.</span>
                </div>
              </div>
            </div>

            <div className="mt-4 lg:mt-0">
              <div
                style={{
                  height: "160px",
                  padding: "2px",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(90deg, rgba(145, 226, 237, 0.2), rgba(172, 180, 223, 0.2)), linear-gradient(180deg, rgba(172, 180, 223, 0.2), rgba(246, 158, 188, 0.2))",
                }}
              >
                <div
                  className="p-3 surface-card h-full"
                  style={{ borderRadius: "8px" }}
                >
                  <div
                    className="flex items-center justify-center bg-indigo-200"
                    style={{
                      width: "3.5rem",
                      height: "3.5rem",
                      borderRadius: "10px",
                    }}
                  >
                    <i className="pi pi-fw pi-map text-2xl text-indigo-700"></i>
                  </div>
                  <h5 className="mb-2 text-900">Well Documented</h5>
                  <span className="text-600">
                    Non arcu risus quis varius quam quisque.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 lg:mt-0">
              <div
                style={{
                  height: "160px",
                  padding: "2px",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(90deg, rgba(187, 199, 205, 0.2),rgba(251, 199, 145, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2),rgba(145, 210, 204, 0.2))",
                }}
              >
                <div
                  className="p-3 surface-card h-full"
                  style={{ borderRadius: "8px" }}
                >
                  <div
                    className="flex items-center justify-center bg-blue-200 mb-3"
                    style={{
                      width: "3.5rem",
                      height: "3.5rem",
                      borderRadius: "10px",
                    }}
                  >
                    <i className="pi pi-fw pi-id-card text-2xl text-blue-500"></i>
                  </div>
                  <h5 className="mb-2 text-900">Responsive Layout</h5>
                  <span className="text-600">
                    Nulla malesuada pellentesque elit.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 lg:mt-0">
              <div
                style={{
                  height: "160px",
                  padding: "2px",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(90deg, rgba(187, 199, 205, 0.2),rgba(246, 158, 188, 0.2)), linear-gradient(180deg, rgba(145, 226, 237, 0.2),rgba(160, 210, 250, 0.2))",
                }}
              >
                <div
                  className="p-3 surface-card h-full"
                  style={{ borderRadius: "8px" }}
                >
                  <div
                    className="flex items-center justify-center bg-orange-200 mb-3"
                    style={{
                      width: "3.5rem",
                      height: "3.5rem",
                      borderRadius: "10px",
                    }}
                  >
                    <i className="pi pi-fw pi-star text-2xl text-orange-700"></i>
                  </div>
                  <h5 className="mb-2 text-900">Clean Code</h5>
                  <span className="text-600">
                    Condimentum lacinia quis vel eros.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 lg:mt-0">
              <div
                style={{
                  height: "160px",
                  padding: "2px",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(90deg, rgba(251, 199, 145, 0.2), rgba(246, 158, 188, 0.2)), linear-gradient(180deg, rgba(172, 180, 223, 0.2), rgba(212, 162, 221, 0.2))",
                }}
              >
                <div
                  className="p-3 surface-card h-full"
                  style={{ borderRadius: "8px" }}
                >
                  <div
                    className="flex items-center justify-center bg-pink-200 mb-3"
                    style={{
                      width: "3.5rem",
                      height: "3.5rem",
                      borderRadius: "10px",
                    }}
                  >
                    <i className="pi pi-fw pi-moon text-2xl text-pink-700"></i>
                  </div>
                  <h5 className="mb-2 text-900">Dark Mode</h5>
                  <span className="text-600">
                    Convallis tellus id interdum velit laoreet.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 lg:mt-0">
              <div
                style={{
                  height: "160px",
                  padding: "2px",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(90deg, rgba(145, 210, 204, 0.2), rgba(160, 210, 250, 0.2)), linear-gradient(180deg, rgba(187, 199, 205, 0.2), rgba(145, 210, 204, 0.2))",
                }}
              >
                <div
                  className="p-3 surface-card h-full"
                  style={{ borderRadius: "8px" }}
                >
                  <div
                    className="flex items-center justify-center bg-teal-200 mb-3"
                    style={{
                      width: "3.5rem",
                      height: "3.5rem",
                      borderRadius: "10px",
                    }}
                  >
                    <i className="pi pi-fw pi-shopping-cart text-2xl text-teal-700"></i>
                  </div>
                  <h5 className="mb-2 text-900">Ready to Use</h5>
                  <span className="text-600">Mauris sit amet massa vitae.</span>
                </div>
              </div>
            </div>

            <div className="mt-4 lg:mt-0">
              <div
                style={{
                  height: "160px",
                  padding: "2px",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(90deg, rgba(145, 210, 204, 0.2), rgba(212, 162, 221, 0.2)), linear-gradient(180deg, rgba(251, 199, 145, 0.2), rgba(160, 210, 250, 0.2))",
                }}
              >
                <div
                  className="p-3 surface-card h-full"
                  style={{ borderRadius: "8px" }}
                >
                  <div
                    className="flex items-center justify-center bg-blue-200 mb-3"
                    style={{
                      width: "3.5rem",
                      height: "3.5rem",
                      borderRadius: "10px",
                    }}
                  >
                    <i className="pi pi-fw pi-globe text-2xl text-blue-700"></i>
                  </div>
                  <h5 className="mb-2 text-900">Modern Practices</h5>
                  <span className="text-600">
                    Elementum nibh tellus molestie nunc non.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 lg:mt-0">
              <div
                style={{
                  height: "160px",
                  padding: "2px",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(90deg, rgba(160, 210, 250, 0.2), rgba(212, 162, 221, 0.2)), linear-gradient(180deg, rgba(246, 158, 188, 0.2), rgba(212, 162, 221, 0.2))",
                }}
              >
                <div
                  className="p-3 surface-card h-full"
                  style={{ borderRadius: "8px" }}
                >
                  <div
                    className="flex items-center justify-center bg-purple-200 mb-3"
                    style={{
                      width: "3.5rem",
                      height: "3.5rem",
                      borderRadius: "10px",
                    }}
                  >
                    <i className="pi pi-fw pi-eye text-2xl text-purple-700"></i>
                  </div>
                  <h5 className="mb-2 text-900">Privacy</h5>
                  <span className="text-600">
                    Neque egestas congue quisque.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="highlights" className="py-4 px-4 lg:px-8 mx-0 my-6 lg:mx-8">
          B
        </div>

        <div id="pricing" className="py-4 px-4 lg:px-8 my-2 md:my-4">
          C
        </div>

        <div className="py-4 px-4 mx-0 mt-8 lg:mx-8">
          <div className="grid grid-cols-2 gap-8">
            <div
              className="col-span-12 lg:col-span-2"
              style={{ marginTop: "-1rem" }}
            >
              <a href="#home" className="flex items-center">
                <img
                  src={""}
                  alt="Sakai Logo"
                  width="50"
                  className="mr-0 lg:mr-2"
                />
                <span className="text-900 font-medium text-3xl line-height-3 text-slate-900">
                  OutNest
                </span>
              </a>
            </div>

            <div className="col-span-12 lg:col-span-8 lg:col-start-3 -mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
                <div className="col-span-1">
                  <h4 className="font-medium text-xl line-height-3 mb-3 text-900">
                    Company
                  </h4>
                  <a className="line-height-3 text-sm block cursor-pointer mb-2 text-700">
                    About Us
                  </a>
                  <a className="line-height-3 text-sm block cursor-pointer mb-2 text-700">
                    News
                  </a>
                  <a className="line-height-3 text-sm block cursor-pointer mb-2 text-700">
                    Investor Relations
                  </a>
                  <a className="line-height-3 text-sm block cursor-pointer mb-2 text-700">
                    Careers
                  </a>
                  <a className="line-height-3 text-sm block cursor-pointer text-700">
                    Media Kit
                  </a>
                </div>

                <div className="col-span-1 mt-4 md:mt-0">
                  <h4 className="font-medium text-xl line-height-3 mb-3 text-900">
                    Resources
                  </h4>
                  <a className="line-height-3 text-sm block cursor-pointer mb-2 text-700">
                    Get Started
                  </a>
                  <a className="line-height-3 text-sm block cursor-pointer mb-2 text-700">
                    Learn
                  </a>
                  <a className="line-height-3 text-sm block cursor-pointer text-700">
                    Case Studies
                  </a>
                </div>

                <div className="col-span-1 mt-4 md:mt-0">
                  <h4 className="font-medium text-xl line-height-3 mb-3 text-900">
                    Community
                  </h4>
                  <a className="line-height-3 text-sm block cursor-pointer mb-2 text-700">
                    Discord
                  </a>
                  <a className="line-height-3 text-sm block cursor-pointer mb-2 text-700">
                    Events
                  </a>
                  <a className="line-height-3 text-sm block cursor-pointer mb-2 text-700">
                    FAQ
                  </a>
                  <a className="line-height-3 text-sm block cursor-pointer text-700">
                    Blog
                  </a>
                </div>

                <div className="col-span-1 mt-4 md:mt-0">
                  <h4 className="font-medium text-xl line-height-3 mb-3 text-900">
                    Legal
                  </h4>
                  <a className="line-height-3 text-sm block cursor-pointer mb-2 text-700">
                    Brand Policy
                  </a>
                  <a className="line-height-3 text-sm block cursor-pointer mb-2 text-700">
                    Privacy Policy
                  </a>
                  <a className="line-height-3 text-sm block cursor-pointer text-700">
                    Terms of Service
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
