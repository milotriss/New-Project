import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'
import bodyParser, { urlencoded } from 'body-parser';
import controller from './controllers/controllers';

dotenv.config();
const server = express();
const port = process.env.PORT;
server.use(express.static('public'));
server.use(urlencoded);
server.use(bodyParser.json());
server.use(cors());

controller(server)

server.listen(port, () => console.log(`http://localhost:${port} SERVER OKK FEN`));

