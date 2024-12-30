import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const ReservationsList = () => {
  const [reservations, setReservations] = useState([]);

  // Fetch reservations from the backend
  const fetchReservations = async () => {
    try {
      const { data } = await axios.get("http://localhost:4000/reservation/get", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setReservations(data.reservations); // Assuming your backend returns { reservations: [] }
      toast.success("Reservations fetched successfully!");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to fetch reservations."
      );
    }
  };

  // Load reservations on component mount
  useEffect(() => {
    fetchReservations();
  }, []);

  return (
    <section className="reservation" id="reservation">
      <div className="container">
        <div className="banner">
          <div className="reservations_list">
            <h1>BOOKED RESERVATIONS</h1>
            <p>For Further Questions, Please Call</p>
            <p>
              <strong>0331-9373868</strong>
            </p>
            <div className="reservation_list">
              <table className="reservation_table">
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Email</th>
                    <th>Phone</th>
                  </tr>
                </thead>
                <tbody>
                  {reservations.length > 0 ? (
                    reservations.map((res) => (
                      <tr key={res._id}>
                        <td>{res.firstName}</td>
                        <td>{res.lastName}</td>
                        <td>{res.date}</td>
                        <td>{res.time}</td>
                        <td>{res.email}</td>
                        <td>{res.phone}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6">No reservations found.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="banner">
          <img src="/reservation.png" alt="res" />
        </div>
      </div>
    </section>
  );
};

export default ReservationsList;
