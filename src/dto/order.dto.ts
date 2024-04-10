export type OrderDTO = {
  order: {
    id: string;
    amount: number;
    items: Array<ItemT>;
  };
};

type ItemT = {
  name: string;
  quantity: number;
  price: number;
};
