import React from "react";
import "./VideoMetaData.css";
import {
  BiLike,
  BiDislike,
  BiShare,
  BiDotsHorizontalRounded,
} from "react-icons/bi";
import { RiDownloadLine } from "react-icons/ri";
import { FaDonate } from "react-icons/fa";
import ShowMoreText from "react-show-more-text";

const VideoMetaData = () => {
  return (
    <div className="VideoMetaData">
      <div className="VideoMetaData__top">
        <p>Title</p>
        <div className="top__channel-details">
          <div className="channel-details__channel-info">
            <div className="channel-info__channel-data">
              <img
                src="https://yt3.ggpht.com/ytc/AL5GRJVTUFvK5cXVwvZcR27YDzHd-655HRXTSmE7n07CTg=s48-c-k-c0x00ffffff-no-rj"
                alt=""
                className="channel-data__logo"
              />
              <div>
                <span className="channel-data__name">channel name</span>
                <span className="channel_data__subscribers">
                  378,000 suscriptores
                </span>
              </div>
            </div>
            <div className="channel-info__buttons">
              <div className="buttons_join">Join</div>
              <div className="buttons_suscribe">Suscribe</div>
            </div>
          </div>
          <div className="channel-details__stuff">
            <div className="stuff__likes">
              <div className="likes__like">
                <BiLike className="stuff__icon" />
                <span>2,514</span>
              </div>
              <BiDislike className="stuff__icon" />
            </div>
            <div className="stuff__share">
              <BiShare className="stuff__icon" />
              <span>Share</span>
            </div>
            <div className="stuff__download">
              <RiDownloadLine className="stuff__icon" />
              <span>Download</span>
            </div>
            <div className="stuff__thanks">
              <FaDonate className="stuff__icon" />
              <span>Thanks</span>
            </div>
            <div className="stuff__more">
              <BiDotsHorizontalRounded className="stuff__icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="VideoMetaData__description">
        <p className="description__time">50,000 vistas haves 2 años</p>
        <div className="description__data">
          <ShowMoreText
            lines={2}
            more="SHOW MORE"
            less="SHOW LESS"
            anchorClass="description__ShowMoreText"
            expanded={false}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic
            consectetur magnam esse autem sit beatae ab expedita ducimus debitis
            cum, accusantium vero minus vitae laudantium libero non aspernatur
            veritatis velit. Maxime temporibus laborum quis corrupti non
            repellendus? Nisi natus temporibus ut corporis, tenetur pariatur,
            totam asperiores harum, quo voluptatibus assumenda exercitationem
            possimus neque tempore suscipit? Delectus culpa at temporibus vero.
            Ab sapiente nihil libero, laborum facilis officiis tempore dicta cum
            animi saepe officia similique voluptatibus hic harum ratione?
            Sapiente, laborum sunt. Laudantium aliquam molestiae iure. Dolorem
            amet expedita quisquam. Recusandae. Aperiam eos, velit quod quia
            numquam at magnam illo consequuntur nulla tempore laudantium
            repellat? Assumenda voluptatem, ratione alias quia error unde,
            quibusdam, esse minus voluptatum voluptates a numquam debitis ex.
            Laborum odit sit enim ab placeat ipsa harum iure maxime, eum rem qui
            deserunt voluptatibus modi perferendis, dignissimos repudiandae
            deleniti magnam voluptatem veritatis aut quod tempora cumque fugit
            aspernatur? Libero.
          </ShowMoreText>
        </div>
      </div>
    </div>
  );
};

export { VideoMetaData };
