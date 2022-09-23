import { Button } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ActionSheet from "actionsheet-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import GlobeDispAdminComponents from "../components/wip/GlobeDispAdminComponents";
import NewsAdminComponents from "../components/wip/NewsAdminComponents";

const ActionSheetView = ({
  propPage,
  open,
  title,
  closeActionsheet,
}: {
  propPage: JSX.Element;
  open: boolean;
  title: string;
  closeActionsheet: () => void;
}) => {
  const ref = useRef<any>();

  useEffect(() => {
    if (open) {
      ref.current.open();
    } else {
      ref.current.close();
    }
  }, [open]);

  return (
    <ActionSheet
      ref={ref}
      sheetStyle={{ height: 100 + "%", padding: 10}}
      onClose={() => closeActionsheet()}
    >
      <div
        className="actionsheet-head"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: 40,
          paddingBottom: 5,

        }}
      >

        <h4>{title}</h4>

        <Button onClick={() => closeActionsheet()}>
          <FontAwesomeIcon icon={faXmark} size={"2x"} />
        </Button>
      </div>
      <hr />

      {propPage}
    </ActionSheet>
  );
};

function CardBoss({
  bgUri,
  title,
  children,
}: {
  bgUri: string;
  title: string;
  children: JSX.Element;
}) {
  const [open, setOpen] = useState(false);

  function closeActionsheet() {
    setOpen(false);
  }

  return (
    <Card>
      <img
        src={bgUri}
        alt={title}
        style={{
          width: 100 + "%",
          height: 100 + "%",
          position: "absolute",
          top: 0,
          left: 0,
          objectFit: "cover",
        }}
      />
      <Button
        style={{
          width: 100 + "%",
          height: 100 + "%",
          position: "absolute",
          top: 0,
          left: 0,
          backgroundColor: "#00000010",
        }}
        onClick={() => setOpen(true)}
      ></Button>

      <h5
        style={{
          color: "#FFFFFF",
          padding: 20,
          position: "relative",
          zIndex: 2,
        }}
      >
        {title}
      </h5>

      <ActionSheetView
        propPage={children}
        open={open}
        closeActionsheet={closeActionsheet}
        title={title}
      />
    </Card>
  );
}

function Administration() {
  return (
    <Container>
      <h1 style={{ marginTop: 20 }}>Administration</h1>
      <hr />

      <h2
        className="section-title"
        style={{
          marginBottom: 30,
          marginTop: 60,
          display: "flex",
          alignItems: "center",
        }}
      >
        <span style={{ color: "#000066", marginRight: 8 }}>Your Apps</span>
        <svg
          width="30px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="lightblue"
            d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80z"
          />
        </svg>
      </h2>

      <Boss>
        <CardBoss
          bgUri={"https://cdn.mos.cms.futurecdn.net/xcLR5HMU2kxskdAy3ZVuTf.jpg"}
          title={"Globe Display"}
        >
          <GlobeDispAdminComponents />
        </CardBoss>
        <CardBoss
          bgUri={
            "https://blog.iiasa.ac.at/wp-content/uploads/sites/5/dreamstime_m_39687173-980x592.jpg"
          }
          title={"News & Events"}
        >
          <NewsAdminComponents />
        </CardBoss>
      </Boss>
    </Container>
  );
}

export default Administration;

const Container = styled.div`
  padding: 20px;
`;

const Boss = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 350px;
  height: 250px;
  border-radius: 20px;
  background-color: black;
  position: relative;
  overflow: hidden;
  margin-right: 50px;
  margin-bottom: 50px;
`;
