export type SomeStore = {
  isStoreLoading: boolean
  data: any
  error: string | null
  getData: () => void
  removeData: () => void
};