import * as fs from 'fs';
import * as https from 'https';
const configHeadersDolyami = {
  headers: {
    'X-Correlation-ID': '694290a7-a5ab-45ad-848f-5ff7c703ca32',
    Authorization: 'Basic dGVzdC1jb29sY2hlc3M6R25VdUp3dEc1RzEzMjNlMzQ2Mw==',
  },
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
    key: fs.readFileSync('./src/certs/private-5.key'),
    cert: fs.readFileSync('./src/certs/05certificate-2024-03-04-bnpl.pem'),
  }),
};

export default configHeadersDolyami;
