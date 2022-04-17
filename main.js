const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')

const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

function getRandomInt() {
  const d = new Date()
  let t = d.getTime();
  return Math.floor(Math.random() * t);
}

app.get('/:filename', (req, res) =>{
  const readData = fs.readFileSync(`files${req.url}.txt`,{encoding:'utf8', flag:'r'});
  res.send(readData);
  res.setHeader('Content-Type', 'application/json')
  res.write(req.body+'\n');
  res.end(JSON.stringify(req.body, null, 2));
  res.send('Got a GET request')
})

app.post('/', (req, res) => {
  let filename = getRandomInt();
  fs.writeFile(`files/${filename}.txt`, JSON.stringify(req.body), (err) => {
    if (err)
      console.log(err);
    else {
      console.log("File written successfully\n");
      console.log("The written has the following contents:");
      console.log(fs.readFileSync(`files/${filename}.txt`, "utf8"));
      console.log(`The filename is: ${filename}.txt`)
    }
  });
  res.setHeader('Content-Type', 'application/json')
  res.write(req.body+'\n');
  res.write(`The filename is: ${filename}`);
  res.end(JSON.stringify(req.body, null, 2));
  res.send('Got a GET request')
})

app.put('/:filename', (req, res) => {
  fs.writeFile(`files/${req.url}.txt`, JSON.stringify(req.body), (err) => {
    if (err)
      console.log(err);
    else {
      console.log("File written successfully\n");
      console.log("The written has the following contents:");
      console.log(fs.readFileSync(`files/${req.url}.txt`, "utf8"));
      console.log(`The filename is: ${req.url}.txt`);
    }
  });
  res.setHeader('Content-Type', 'application/json')
  res.write(req.body+'\n');
  res.end(JSON.stringify(req.body, null, 2));
  res.send('Got a PUT request')
})

app.delete('/:filename', (req, res) => {
  const path = `files${req.url}.txt`

  fs.unlink(path, (err) => {
    if (err) {
      console.error(err)
      return
    }
})
  res.send('Got a DELETE request')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
