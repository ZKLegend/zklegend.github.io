import React from "react";
import { Link, useParams } from "react-router-dom";
import { Popover, Card, Image } from "antd";
import { PlayCircleFilled } from "@ant-design/icons";

import AnimeInfo from "../AnimeInfo";

const AnimeCategoryList = ({ animeTitle, animeImg, animeId, params }) => {
  return (
    <Popover
      content={<AnimeInfo animeId={animeId} params={params} />}
      title={animeTitle}
      placement="right"
      arrowPointAtCenter
    >
      <Card
        bordered={false}
        style={{
          position: "relative",
          margin: "20px",
          width: "calc(100%/5)",
        }}
      >
        <Image src={animeImg} preview={false} style={{ width: "100%" }} />
        <Link
          to={`/${animeId}/1`}
          className="link-container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            width: "100%",
            height: "100%",
            top: "0",
            left: "0",
          }}
        >
          <PlayCircleFilled style={{ fontSize: "60px" }} className="play-btn" />
        </Link>
      </Card>
    </Popover>
  );
};

export default AnimeCategoryList;
