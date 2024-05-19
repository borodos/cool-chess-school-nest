type TSendMailOptions = {
  to: string;
  from: string;
  subject: string;
  template?: string;
};

const sendMailOptions: TSendMailOptions = {
  to: 'micke.brown@yandex.ru',
  from: 'jojofan22819@mail.ru',
  subject: 'Test',
};

export default sendMailOptions;
