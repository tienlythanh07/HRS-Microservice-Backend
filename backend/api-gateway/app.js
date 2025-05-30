require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT;

const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

const userRoute = require("./routes/user.route");
const bookingRoute = require("./routes/booking.route");
const ssaRoute = require("./routes/selfStudyArea.route");
const roomRoute = require("./routes/room.route");
const logger = require("./middlewares/logging.middleware");

app.use(logger.initCorrelationId);
app.use(logger.publishLog);

app.use("/auth", userRoute);
app.use("/booking", bookingRoute);
app.use("/self-study-area", ssaRoute);
app.use("/room", roomRoute);

app.listen(PORT, () => {
  console.log(`Api gateway's listening on port ${PORT}`);
});
