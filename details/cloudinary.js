const cloudinary = require('cloudinary').v2;
const router = require('./router');

cloudinary.config({ 
  cloud_name: 'userapi', 
  api_key: '951792771124655', 
  api_secret: 'ed4hz_jlb_DktA1oYf2dmN_X3AQ' 
});

module.exports = cloudinary


router.post("/", middleware, async(req, res)=>{
  
})