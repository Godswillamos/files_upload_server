const express = require('express')
const app = express()
const multer  = require('multer')
const path = require('path');
const cors = require('cors')

app.use(cors())
// const upload = multer({ dest: 'uploads/' })
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/Users/ADMIN/Desktop')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname )
    }
  })
  const upload = multer({ storage: storage })

app.post('/files',upload.array('files'),(req,res)=>{
    console.log("hit",req.files);
    res.send('done')
})

app.listen(5000,()=>{console.log('server connected');})