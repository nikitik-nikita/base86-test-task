import React from "react";
import Card from "./components/Card/Card";
import {
  fishingRegulations,
  IFishingRegulations,
} from "./constants/fishingRegulations";
import { generateRandValue } from "./helpers/generateRandValue";
import { handeConvertToInches } from "./helpers/inchesConverter";

const handleUpdateData = (
  data: IFishingRegulations[]
): IFishingRegulations[] => {
  let updatedData: IFishingRegulations[] = data;

  updatedData.forEach((el) => {
    el.id = generateRandValue();

    if (el.nicknames === null) {
      el.nicknames = "None";
    }

    if (Array.isArray(el.nicknames)) {
      el.nicknames = el.nicknames.join(" ");
    }

    el.seasons.forEach((item) => {
      item.id = generateRandValue();

      if (item.opening === null) {
        item.opening = "Open Season";
      }

      if (item.close === null) {
        item.close = "Open Season";
      }

      if (item.minimumSize === null) {
        item.minimumSize = "No size limit";
      }

      if (item.maximumSize === null) {
        item.maximumSize = "No size limit";
      }

      if (item.bagLimit === null) {
        item.maximumSize = "No bag limit";
      }

      if (typeof item.maximumSize === "number") {
        item.maximumSize = handeConvertToInches(item.maximumSize);
      }

      if (typeof item.minimumSize === "number") {
        item.minimumSize = handeConvertToInches(item.minimumSize);
      }
    });
  });

  return updatedData;
};

const data = handleUpdateData(fishingRegulations);

const App = () => {
  return (
    <>
      {data.map((elem) => (
        <Card
          key={elem.id}
          title={elem.species}
          subtitle={elem.nicknames as string}
          content={elem.seasons}
        />
      ))}
    </>
  );
};

export default App;
