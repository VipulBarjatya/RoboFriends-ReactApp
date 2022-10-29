import Card from "../components/Card";

const CardList = ({ robots }) => {
  const CardsArray = robots.map((user, i) => {
    return (
      <Card
        key={i}
        id={robots[i].id}
        name={robots[i].name}
        username={robots[i].username}
      />
    );
  });
  return <>{CardsArray}</>;
};

export default CardList;
