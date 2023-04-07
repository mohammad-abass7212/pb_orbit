import { Grid } from "@chakra-ui/react";
import React from "react";
import CardReservations from "../components/AdminFlow/CardReservations";
import { useEffect, useState } from "react";

const ViewEveryReservations = () => {
  const reservationCard = [
    {
      id: 1,
      phone: "4578124596",
      player: "Yes",
    },
    {
      id: 2,
      phone: "5478963215",
      player: "No",
    },
    {
      id: 3,
      phone: "4569321569",
      player: "Yes",
    },
    {
      id: 4,
      phone: "4568754963",
      player: "No",
    },
    {
      id: 5,
      phone: "8546772459",
      player: "No",
    },
  ];
  const [card, setCard] = useState([]);
  const [apiStatus, setApiStatus] = useState({
    inProgress: false,
    failed: false,
    failMessage: "",
  });
  const changeApiStatus = (inProgress, failMessage) => {
    setApiStatus({
      inProgress,
      failed: !!failMessage,
      failMessage,
    });
  };
  const fetchallReservations = async () => {
    try {
      changeApiStatus(true, "");
      const fetchedData = await api.get("/community/free");

      if (fetchedData.status === 200) {
        changeApiStatus(false, "");

        setCard(fetchedData?.data?.data);
      } else {
        throw new Error(fetchedData.error);
      }
    } catch (err) {
      changeApiStatus(false, err.response ? err.response.data.error : err);
    }
  };
  useEffect(() => {
    fetchallReservations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(reservationCard);
  return (
    <>
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gap={6}
        justifyContent="center"
        alignItems="center"
        p={6}
      >
        {reservationCard.map((i) => (
          <CardReservations i={i} key={i.id} />
        ))}
      </Grid>
    </>
  );
};

export default ViewEveryReservations;
