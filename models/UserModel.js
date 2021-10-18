const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    fullName:{
        type:String,
        required:[true,'فیلد نام  را پر کنید!!!'],
        trim:true,
        maxlength:[40, 'نام شما حداکثر 40 کارکتر میتواند باشد'],
    },
    email:{
        type:String,
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
    age:{
        type:String,
    },
});

// const User = mongoose.model('user', UserSchema);
// module.exports = User;
// module.exports = mongoose.model('user', UserSchema);
module.exports = mongoose.models.user || mongoose.model('user', UserSchema);