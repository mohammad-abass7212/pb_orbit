import { Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CommonUserCard from "./CommonUserCard";
import { api } from "../../pages/api/Base_ur";
const cards = [
  {
    name: "Alaanice",
    id: 1,
    location: "New York",
    src: "https://example.com/alice.jpg",
  },
  {
    name: "Boaanb",
    id: 2,
    location: "Los Angeles",
    src: "https://example.com/bob.jpg",
  },
  {
    name: "Chaanarlie",
    id: 3,
    location: "Chicago",
    src: "https://example.com/charlie.jpg",
  },
  {
    name: "Daaanve",
    id: 4,
    location: "Houston",
    src: "https://example.com/dave.jpg",
  },
  {
    name: "Evaane",
    id: 5,
    location: "Miami",
    src: "https://example.com/eve.jpg",
  },
];

function ViewAllCommunity() {
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
  const fetchCommunity = async () => {
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
    fetchCommunity();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid
      templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
      gap={6}
      justifyContent="center"
      alignItems="center"
      p={6}
    >


      {card.map((card) => (
        <CommonUserCard key={card.id} cards={card} />
      ))}
    </Grid>
  );
}
export default ViewAllCommunity;
