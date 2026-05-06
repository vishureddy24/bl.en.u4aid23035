const express = express();
const cors = require("cors");
const scheduleRoutes = require("./routes/scheduleRoutes");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", scheduleRoutes);
app.get("/", (req, res) => {
    res.send("Vehicle Scheduling API is running!")
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});