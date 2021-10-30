const mongoose = require('mongoose');

const FileSchema = mongoose.Schema({
    title:{
        type:String,
        required:[true,'فیلد عنوان  را پر کنید!!!'],
        trim:true,
        maxlength:[40, 'نام شما حداکثر 40 کارکتر میتواند باشد'],
    },
    // photographer:{
    //     type:String,
    // },
    // photographerPicture:{
    //     type:String,
    // },
    sunTitle:{
        type:String,
    },
    src:{
        type:String,
    },
    properties:{
        type:String,
    },
    user:{
        type:String,
        // type:mongoose.Schema.Types.ObjectId,
        // ref:'user'
    }
});


// FileSchema.pre('remove',function(next){
//     const usermodel=mongoose.model('user');
//     usermodel.delete({_id:{$in:this.user}})
//     .then(()=>next());
// })

// const User = mongoose.model('user', UserSchema);
// module.exports = User;
// module.exports = mongoose.model('user', UserSchema);
module.exports = mongoose.models.file || mongoose.model('file', FileSchema);