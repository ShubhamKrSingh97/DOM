const express=require('express');
const app=express();
const sequelize=require('./util/database');
const path=require('path');
const bodyParser=require('body-parser');
const cors=require('cors');
const fs=require('fs');
app.use(cors());

const addUserRoute=require('./routes/add-user');
const deleteRoute=require('./routes/delete');
const getAllDataRoute=require('./routes/get-all-data');

app.use(bodyParser.json({extended:false}));

app.use(express.static(path.join(__dirname,'public'))); //sending the static folders in public folder

app.use(addUserRoute);

app.use(getAllDataRoute);

app.use(deleteRoute);

app.get('/', (req, res) => {
    const html = fs.readFileSync(path.join(__dirname, 'views', 'index.html'), { encoding: 'utf8' });  //base URL that renders the HTML
    res.send(html);
  });
  

sequelize.sync().then(()=>{
    app.listen(4000);
});
