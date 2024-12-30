import express from "express";
import send_reservation, {
  get_reservations,
} from "../controller/reservation.js";

const router = express.Router();

router.post("/send", send_reservation);
router.get("/get", get_reservations);

export default router;
