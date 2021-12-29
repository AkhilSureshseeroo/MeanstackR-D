var express = require('express');
var router = express.Router();

const {getusers,getuserbyId,createuser,updateuser,deleteuser} =require('../controller/crudController');
/* GET users listing. */
router.get('/',getusers);
router.get('/:id',getuserbyId);
router.post('/createuser',createuser);
router.patch('/update/:id',updateuser);
router.delete('/delete/:id',deleteuser);

module.exports = router;
