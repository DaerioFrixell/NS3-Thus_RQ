import "./content.css";
import { ContentZustand_T } from "../types/types";
import { FC } from "react";


export const ContentZustand: FC<ContentZustand_T> = ({ founder }) => {
  return (
    <section className="content">
      from store: {founder}
    </section>
  );
};