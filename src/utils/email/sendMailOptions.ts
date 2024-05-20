type TSendMailOptions = {
  to: string;
  from: string;
  subject: string;
  template?: string;
};

const sendMailOptions: TSendMailOptions = {
  to: 'micke.brown@yandex.ru',
  from: 'elmar_2005@mail.ru',
  subject: 'Test',
};

export default sendMailOptions;
