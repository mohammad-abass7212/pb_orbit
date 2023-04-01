import { Grid } from "@chakra-ui/react";
import CommonUserCard from "./CommonUserCard";
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
  return (
    <Grid
      templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
      gap={6}
      justifyContent="center"
      alignItems="center"
      p={6}
    >
      {cards.map((card) => (
        <CommonUserCard key={card.id} cards={cards} />
      ))}
    </Grid>
  );
}
export default ViewAllCommunity;
