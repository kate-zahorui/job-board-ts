export interface IItem {
  id: string;
  address: string;
  benefits: string[];
  createdAt: string;
  description: string;
  email: string;
  employment_type: string[];
  location: {
    lat: number;
    long: number;
  };
  name: string;
  phone: string;
  pictures: string[];
  salary: string;
  title: string;
  updatedAt: string;
}

export interface IState {
  items: Array<IItem> | [];
  currentJob: IItem | null;
  isLoading: boolean;
  error: string;
  perPage: number;
}
