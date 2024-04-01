import { useState } from "react";

const ItemDesription = ({ item }) => {
  const [showExtra, setShowExtra] = useState(true);

  const handleExtra = () => {
    setShowExtra(!showExtra);
  };
  return (
    <div className="lg:hidden cursor-pointer " onClick={handleExtra}>
      {showExtra ? (
        <>
          {item.card.info.description.slice(0, 45)}
          <span className="font-bold">...more</span>
        </>
      ) : (
        <>
          {item.card.info.description}
          <span className="font-bold">...less</span>
        </>
      )}
    </div>
  );
};

export default ItemDesription;
