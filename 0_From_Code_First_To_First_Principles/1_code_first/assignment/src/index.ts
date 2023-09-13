import express from 'express';
import { router } from './user/router'

const app = express();

app.use(express.json());

app.use('/users', router)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App up and running in PORT ${PORT}`)
});
