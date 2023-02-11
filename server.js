const express = require('express');
const app = express();
const port = 5555;

app.get('/data', (req, res) => {
  let bpm = req.query.bpm;
  let spo2 = req.query.spo2;
  
  console.log(`Received data: BPM = ${bpm}bpm, SPO2 = ${spo2}%`);

  res.send('Data received!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
