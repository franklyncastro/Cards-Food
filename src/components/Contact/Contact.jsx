import React from "react";
import "../Contact/Contact.css";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
  });

  const handleChangeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setForm({
      nombre: "",
      apellido: "",
      email: "",
      telefono: "",
    });
    alert('Los datos se enviaron correctamente')
  };

  return (
    <div className="allContainer">
      <form onSubmit={onSubmit}>
        <h1>Formulario de contacto</h1>
        <div className="divsContainer">
          <div className="inputContainer">
            <div className="inputsLabel">
              <label htmlFor="nombre" className="labels">
                ¿Cuál es tu nombre?
              </label>
              <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                className="input"
                onChange={handleChangeInput}
                value={form.nombre}
              />
            </div>
            <div className="inputsLabel">
              <label htmlFor="apellido" className="labels">
                ¿Cuál es tu apellido?
              </label>
              <input
                type="text"
                name="apellido"
                placeholder="Apellido"
                className="input"
                onChange={handleChangeInput}
                value={form.apellido}
              />
            </div>
            <div className="inputsLabel">
              <label htmlFor="email" className="labels">
                ¿Cuál es tu dirección de correo electrónico?
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input"
                onChange={handleChangeInput}
                value={form.email}
              />
            </div>
            <div className="inputsLabel">
              <label htmlFor="telefono" className="labels">
                ¿Cuál es tu número de teléfono?
              </label>
              <input
                type="tel"
                name="telefono"
                placeholder="Teléfono"
                className="input"
                onChange={handleChangeInput}
                value={form.telefono}
              />
            </div>
            <div className="inputsLabel">
              <button className="link btnForm">Enviar</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
