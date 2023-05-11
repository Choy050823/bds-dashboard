import { Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { tokens } from "../theme.js";

const BullyMessage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [bullyMsg, SetBullyMsg] = useState("Normal");
  let ws = new WebSocket("ws://localhost:4896");
  var isNotified = false;
  var bullyCount = 0;

  ws.onopen = function (e) {
    console.log("opened");
  };
  ws.onmessage = function (e) {
    console.log(e.data);
    if (e.data === "bully_detected" && !isNotified && bullyCount == 20) {
      ws.send("receive_ok");
      console.log("[SERVER] BULLY DETECTED");
      // bullyStatus = "BULLY DETECTED";
      // console.log(bullyStatus);
      SetBullyMsg("Bully Detected");
      alert("Bully Detected in CCTV! \n Please Respond Immediately!");
      isNotified = true;
    } else {
      bullyCount++;
      SetBullyMsg("Normal");
      // isNotified = false;
    }
  };
  ws.onclose = function (e) {
    console.log("close");
  };

  return (
    <Typography variant="h3" fontWeight="bold" color={colors.greenAccent[500]}>
      {/* Put the status (bully or neutral) according to websocket here */}
      STATUS: {bullyMsg}
    </Typography>
  );
};

export default BullyMessage;
