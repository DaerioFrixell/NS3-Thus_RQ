import { FC } from "react";
import { useQuery } from "react-query";
import { ContentRQ } from "../shared/components/ContentRQ";
import { getSomething_Req } from "../shared/api/someApi";


export const OneDataWidget: FC = () => {
  const { data, isError, isLoading, error } = useQuery('req', getSomething_Req);

  if (isLoading) return <h1>loading</h1>

  if (isError) {
    console.warn(`ХУЯСЕ! ${error}`);

    return <h1>some error, чекни консоль крч</h1>
  }

  if (!data) return <h1>data пустая чот, хз</h1>

  return <ContentRQ data={data} />
}