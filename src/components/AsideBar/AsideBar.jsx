import React from "react";
import { IconsAsideBar } from "../IconsAsideBar/IconsAsideBar";
import "./AsideBar.css";

const AsideBar = ({ toggleAsideBar }) => {
  return (
    <aside className={toggleAsideBar ? "AsideBar" : "AsideBar close"}>
      <ul>
        <IconsAsideBar icon="" name="Principal" />
        <IconsAsideBar icon="" name="Shorts" />
        <IconsAsideBar icon="" name="Suscripciones" />
      </ul>
      <ul>
        <IconsAsideBar icon="" name="Biblioteca" />
        <IconsAsideBar icon="" name="Historial" />
        <IconsAsideBar icon="" name="Tus Videos" />
        <IconsAsideBar icon="" name="Ver más tarde" />
        <IconsAsideBar icon="" name="Videos que me gustan" />
        <IconsAsideBar icon="" name="Favoritos" />
      </ul>
      <ul>
        <span style={{ fontSize: "1.6rem", color: "#f1f1f1" }}>
          Suscripciones
        </span>
      </ul>
      <ul>
        <span style={{ fontSize: "1.6rem", color: "#f1f1f1" }}>Explorar</span>
        <IconsAsideBar icon="" name="Tendencias" />
        <IconsAsideBar icon="" name="Música" />
        <IconsAsideBar icon="" name="En vivo" />
        <IconsAsideBar icon="" name="Videojuegos" />
        <IconsAsideBar icon="" name="Noticias" />
        <IconsAsideBar icon="" name="Deportes" />
        <IconsAsideBar icon="" name="Aprendizaje" />
      </ul>
      <ul>
        <span style={{ fontSize: "1.6rem", color: "#f1f1f1" }}>
          Más de YouTube
        </span>
        <IconsAsideBar icon="" name="Youtube Premium" />
        <IconsAsideBar icon="" name="Creator Studio" />
        <IconsAsideBar icon="" name="YouTube Music" />
        <IconsAsideBar icon="" name="YouTube Kids" />
        <IconsAsideBar icon="" name="YouTube TV" />
      </ul>
      <ul>
        <IconsAsideBar icon="" name="Configuración" />
        <IconsAsideBar icon="" name="Historial de denuncias" />
        <IconsAsideBar icon="" name="Ayuda" />
        <IconsAsideBar icon="" name="Enviar Comentarios" />
      </ul>
      <ul className="AsideBar__footer">
        <p>Acerca de Prensa</p>
        <p>Derechos de autor</p>
        <p>Comunicarte con nosotros</p>
        <p>Creadores Anunciar</p>
        <p style={{ marginBottom: "12px" }}>Desarroladores</p>
        <p>Condiciones Privacidad</p>
        <p>Políticas y seguridad</p>
        <p>Cómo funciona YouTube</p>
        <p style={{ marginBottom: "12px" }}>Prueba funciones nuevas</p>
        <p>© 2023 Google LLC</p>
      </ul>
    </aside>
  );
};

export { AsideBar };
