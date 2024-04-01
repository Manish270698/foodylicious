import { useState } from "react";

const ItemDesription = ({ item }) => {
  const [showExtra, setShowExtra] = useState(true);
  const [extraText, setExtraText] = useState("");

  const handleExtra = () => {
    setShowExtra(!showExtra);
    setExtraText("...less");
  };
  return (
    <div>
      {item.card.info.description.length < 45 ? (
        <div className="lg:hidden">{item.card.info.description}</div>
      ) : (
        <div className="cursor-pointer lg:hidden " onClick={handleExtra}>
          {showExtra && item.card.info.description.length > 45 ? (
            <>
              {item.card.info.description.slice(0, 45)}
              <span className="font-bold">...more</span>
            </>
          ) : (
            <>
              {item.card.info.description}
              <span className="font-bold">{extraText}</span>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ItemDesription;
