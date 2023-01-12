import { Typography } from "@mui/material";
import { useState } from "react";

const BullyMessage = () => {
    const [bullyMsg, SetBullyMsg] = useState("Normal");
    let ws = new WebSocket("ws://localhost:4896");
    var isNotified = false;

    ws.onopen = function (e) {
      console.log("opened");
    };
    ws.onmessage = function (e) {
      console.log(e.data);
      if (e.data === "bully_detected" && !isNotified) {
        ws.send("receive_ok");
        console.log("[SERVER] BULLY DETECTED");
        // bullyStatus = "BULLY DETECTED";
        // console.log(bullyStatus);
        SetBullyMsg("Bully Detected");
        alert("Bully Detected in CCTV! \n Please Respond Immediately!");
        isNotified = true;
      } else {
        SetBullyMsg("Normal");
        isNotified = false;
      }
    };
    ws.onclose = function (e) {
      console.log("close");
    };

    return (
      <Typography
        variant="h3"
        fontWeight="bold"
        color={colors.greenAccent[500]}
      >
        {/* Put the status (bully or neutral) according to websocket here */}
        STATUS: {bullyMsg}
      </Typography>
    );
}

export default BullyMessage;