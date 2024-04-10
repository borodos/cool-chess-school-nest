export class OrderDTO {
  order: {
    id: string;
    amount: number;
    items: [
      {
        name: string;
        quantity: number;
        price: number;
      },
    ];
  };
}

type ItemT = {
  name: string;
  quantity: number;
  price: number;
};
