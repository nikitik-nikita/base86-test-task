import React from "react";
import { ISeasons } from "../../constants/fishingRegulations";

export interface ICardContent<TValue> {
  content: Array<TValue>;
}

const CardContent: React.FC<ICardContent<ISeasons>> = ({ content }) => {
  return (
    <>
      {content.map((el) => (
        <React.Fragment key={el.id}>
          <p>Opening: {el.opening}</p>
          <p>Close: {el.close}</p>
          <p>{`Min size: ${el.minimumSize}\` Max size: ${el.maximumSize}\``}</p>
          <p>Bag Limit: {el.bagLimit}</p>
        </React.Fragment>
      ))}
    </>
  );
};

export default CardContent;
