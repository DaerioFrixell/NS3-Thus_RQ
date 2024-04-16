import { FC, useEffect } from "react";
import { useStore } from "../entities/someEntity/store";
import { ContentZustand } from "../shared/components/ContentZustand";


export const ZustandData: FC = () => {
  const { myStore, isStoreLoading, error, getData } = useStore(state => ({
    myStore: state.data,
    isStoreLoading: state.isStoreLoading,
    error: state.error,
    getData: state.getData
  }));

  useEffect(() => {
    getData();
  }, [])

  if (isStoreLoading) return <h1>loading</h1>

  if (error) {
    console.warn(`ХУЯСЕ! ${error}`);

    return <h1>some error, чекни консоль крч</h1>
  }

  if (!myStore) return <h1>data пустая чот, хз</h1>

  return <ContentZustand founder={myStore.founder} />
}