import React from "react";

const Formulario = () => {
  return (
    <div className="container mx-auto w-full">
      <div className="max-w-md mx-auto mt-4 p-4 rounded-md">
        <h1 className="uppercase text-white font-bold mb-6 text-left md:text-3xl text-xl ">
          receba{" "}
          <span className="text-custom-yellow">
            novidades do maior lançamento da Fiat
          </span>{" "}
          nos últimos 10 anos.
        </h1>
        <p className="text-white mb-6">
          Preencha o formulário abaixo e fique por dentro.
        </p>
        <form action="#">
          <div className="mb-6 flex items-center border-2 border-white p-2">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-semibold mr-2 uppercase text-white"
            >
              Nome:
            </label>
            <div className="flex-1 p-2">
              <input
                type="text"
                id="name"
                name="name"
                className="w-full focus:outline-none text-white bg-custom-low"
              />
            </div>
          </div>

          <div className="mb-6 flex items-center border-2 border-white p-2">
            <label
              htmlFor="tel"
              className="block text-gray-700 text-sm font-semibold mr-2 uppercase text-white"
            >
              Tel:
            </label>
            <div className="flex-1 p-2">
              <input
                type="tel"
                id="tel"
                name="tel"
                className="w-full focus:outline-none text-white bg-custom-low"
              />
            </div>
          </div>

          <div className="mb-6 flex items-center border-2 border-white p-2 uppercase text-white">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-semibold mr-2"
            >
              E-mail:
            </label>
            <div className="flex-1 p-2">
              <input
                type="mail"
                id="mail"
                name="mail"
                className="w-full focus:outline-none text-white bg-custom-low"
              />
            </div>
          </div>

          <div className="mb-6 flex items-center border-2 border-white p-2">
            <label
              htmlFor="cpf"
              className="block text-gray-700 text-sm font-semibold mr-2 uppercase text-white"
            >
              CPF:
            </label>
            <div className="flex-1 p-2">
              <input
                type="text"
                id="cpf"
                name="cpf"
                className="w-full focus:outline-none text-white bg-custom-low"
              />
            </div>
          </div>
          <div className="mb-6 text-sm">
            <p className="text-white mb-6 uppercase">
              Quero receber contato por:
            </p>
            <div className="flex items-center justify-between align-middle w-full">
              <input
                type="checkbox"
                name="whatsapp"
                id="whatsapp"
                value="whatsapp"
              />
              <label
                htmlFor="whatsapp"
                className="text-white uppercase font-bold ml-1"
              >
                whatsapp
              </label>
              <input
                type="checkbox"
                name="email"
                id="email"
                value="email"
                className="ml-1"
              />
              <label
                htmlFor="email"
                className="text-white uppercase font-bold ml-1"
              >
                email
              </label>
              <input
                type="checkbox"
                name="telefone"
                id="telefone"
                value="telefone"
                className="ml-1"
              />
              <label
                htmlFor="telefone"
                className="text-white uppercase font-bold ml-1"
              >
                telefone
              </label>
            </div>
          </div>
        </form>
        <p className="text-white text-sm">
          Estamos comprometidos em resguardar suas informações. Conheça nossa{" "}
          <a href="#" className="underline font-bold">
            Política de privacidade.
          </a>
        </p>
      </div>
    </div>
  );
};

export default Formulario;
