const mongoose = require('mongoose');
// import { isEmail } from 'validator';

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const UserSchema = mongoose.Schema({
    // fullName:{
    //     type:String,
    //     required:[true,'فیلد نام  را پر کنید!!!'],
    //     trim:true,
    //     maxlength:[40, 'نام شما حداکثر 40 کارکتر میتواند باشد'],
    // },
    photographer:{
        type:String,
        required:[true,'فیلد نام  را پر کنید!!!'],
        trim:true,
        maxlength:[40, 'نام شما حداکثر 40 کارکتر میتواند باشد'],
    },
    photographerPicture:{
        type:String,
    },
    email:{
        type:String,
        required:[true,'فیلد ایمیل  را پر کنید!!!'],
        lowercase: true,
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        // validate: [ isEmail, 'ایمیل درست را وارد کنید' ],

        // validate:{
        //     validator:(email)=> validateEmail(email),
        //     message:"ایمیل درست را وارد کنید"
        // },
        // validate: [validateEmail, 'ایمیل درست را وارد کنید'],
    },
    username:{
        type:String,
        // minlength: 5,
        minlength:[5, 'نام کاربری حداقل 5 کارکتر میتواند باشد'],
        unique: true,
        required:[true,'نام کاربری باید وارد شود'],
    },
    password:{
        type:String,
        // validate:{
        //     validator:(password)=> password.length > 2,
        //     message:"پسورد باید بیشتر از 2 حرف باشد!!!"
        // },
        required:[true,'پسورد باید وارد شود'],
    },
    location:{
        type:String,
    },
    // files:[{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:'file'
    // }]
});

// const User = mongoose.model('user', UserSchema);
// module.exports = User;
// module.exports = mongoose.model('user', UserSchema);
module.exports = mongoose.models.user || mongoose.model('user', UserSchema);