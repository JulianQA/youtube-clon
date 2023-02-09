import React from "react";
import { AiFillHome, AiOutlineHistory } from "react-icons/ai";
import {
  MdOutlineLocalFireDepartment,
  MdOutlineVideoLibrary,
  MdOndemandVideo,
  MdOutlineWatchLater,
  MdOutlineFavoriteBorder,
  MdTv,
} from "react-icons/md";
import {
  IoMusicalNoteOutline,
  IoGameControllerOutline,
  IoNewspaperOutline,
  IoTrophyOutline,
  IoPeopleOutline,
} from "react-icons/io5";
import { RiLiveLine } from "react-icons/ri";
import { BsLightbulb, BsGear, BsFlag, BsYoutube } from "react-icons/bs";
import { TfiHelpAlt, TfiShortcode } from "react-icons/tfi";
import { BiCommentError, BiLike } from "react-icons/bi";
import { SiYoutubestudio, SiYoutubemusic } from "react-icons/si";
import { SlSocialYoutube } from "react-icons/sl";
import { IconsAsideBar } from "../IconsAsideBar/IconsAsideBar";
import "./AsideBar.css";

const AsideBar = ({ toggleAsideBar }) => {
  return (
    <aside className={toggleAsideBar ? "AsideBar" : "AsideBar close"}>
      <ul>
        <IconsAsideBar icon={<AiFillHome />} name="Principal" />
        <IconsAsideBar icon={<TfiShortcode />} name="Shorts" />
        <IconsAsideBar icon={<IoPeopleOutline />} name="Suscripciones" />
      </ul>
      <ul>
        <IconsAsideBar icon={<MdOutlineVideoLibrary />} name="Biblioteca" />
        <IconsAsideBar icon={<AiOutlineHistory />} name="Historial" />
        <IconsAsideBar icon={<MdOndemandVideo />} name="Tus Videos" />
        <IconsAsideBar icon={<MdOutlineWatchLater />} name="Ver más tarde" />
        <IconsAsideBar icon={<BiLike />} name="Videos que me gustan" />
        <IconsAsideBar icon={<MdOutlineFavoriteBorder />} name="Favoritos" />
      </ul>
      <ul>
        <span style={{ fontSize: "1.6rem", color: "#f1f1f1" }}>
          Suscripciones
        </span>
      </ul>
      <ul>
        <span style={{ fontSize: "1.6rem", color: "#f1f1f1" }}>Explorar</span>
        <IconsAsideBar
          icon={<MdOutlineLocalFireDepartment />}
          name="Tendencias"
        />
        <IconsAsideBar icon={<IoMusicalNoteOutline />} name="Música" />
        <IconsAsideBar icon={<RiLiveLine />} name="En vivo" />
        <IconsAsideBar icon={<IoGameControllerOutline />} name="Videojuegos" />
        <IconsAsideBar icon={<IoNewspaperOutline />} name="Noticias" />
        <IconsAsideBar icon={<IoTrophyOutline />} name="Deportes" />
        <IconsAsideBar icon={<BsLightbulb />} name="Aprendizaje" />
      </ul>
      <ul className="AsideBar--red">
        <span style={{ fontSize: "1.6rem", color: "#f1f1f1" }}>
          Más de YouTube
        </span>
        <IconsAsideBar
          icon={<BsYoutube className="icon--red" />}
          name="Youtube Premium"
        />
        <IconsAsideBar
          icon={<SiYoutubestudio className="icon--red" />}
          name="Creator Studio"
        />
        <IconsAsideBar
          icon={<SiYoutubemusic className="icon--red" />}
          name="YouTube Music"
        />
        <IconsAsideBar
          icon={
            <SlSocialYoutube
              className="icon--red"
              style={{ transform: "rotate(-8deg)" }}
            />
          }
          name="YouTube Kids"
        />
        <IconsAsideBar
          icon={<MdTv className="icon--red" />}
          name="YouTube TV"
        />
      </ul>
      <ul>
        <IconsAsideBar icon={<BsGear />} name="Configuración" />
        <IconsAsideBar icon={<BsFlag />} name="Historial de denuncias" />
        <IconsAsideBar icon={<TfiHelpAlt />} name="Ayuda" />
        <IconsAsideBar icon={<BiCommentError />} name="Enviar Comentarios" />
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
