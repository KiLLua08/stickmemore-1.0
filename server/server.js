import express from 'express';
const app = express();
const port = process.env.PORT || 3000;
const mongoUrl = process.env.MONGOURL

app.get('/', (req, res) => {
  res.send('Rayen Yakoubi');
});

app.use(express.json())
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
