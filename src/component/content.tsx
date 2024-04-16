import "./content.css";
import axios from "axios";
import { FC } from "react";

import { useQuery } from "react-query";
import { useStore } from "./store";

const getSomethingRequest = async () => {
  const baseUrl = 'https://api.spacexdata.com/v3'
  const endpoint = '/info';

  const response = await axios.get(baseUrl + endpoint);

  return response;
}

export const Content: FC = () => {
  const { data, isError, isLoading, error } = useQuery('req', getSomethingRequest);

  const myStore = useStore(state => state.data);
  const incr = useStore(state => state.getData);
  const clear = useStore(state => state.removeData);



  if (isLoading) return <h1>loading</h1>

  if (isError) {
    console.warn(`ХУЯСЕ! ${error}`);

    return <h1>some error, чекни консоль крч</h1>
  }

  if (!data) return <h1>data пустая чот, хз</h1>

  return (
    <section className="content">
      some content

      <div>
        <h2>Zustand</h2>

        from store: {myStore}
        <button onClick={incr}>increm</button>
        <button onClick={clear}>clear</button>
      </div>
    </section>
  )
}
