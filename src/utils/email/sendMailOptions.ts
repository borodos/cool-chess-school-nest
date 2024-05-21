type TSendMailOptions = {
  to: string;
  from: string;
  subject: string;
  template?: string;
};

const sendMailOptions: TSendMailOptions = {
  to: 'elmar_2005@mail.ru',
  from: 'coolchess_online@mail.ru',
  subject: 'Test',
};

export default sendMailOptions;
