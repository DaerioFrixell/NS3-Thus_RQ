import "./content.css";
import { FC } from "react";
import { ContentRQ_T } from "../types/types";


export const ContentRQ: FC<ContentRQ_T> = ({ data }) => {
  return (
    <section className="content">
      from store: {data.name}
    </section>
  );
};