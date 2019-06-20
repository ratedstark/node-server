const mongoose = require('mongoose');
const uniquevalidator = require('mongoose-unique-validator');

let Schema  = mongoose.Schema;

let userValid = {
    values:['USER_ROLE','ADMIN_ROLE'],
    message:'{VALUE} no es un rol valido'
};

let userSchema = new Schema({
    nombre:{
        type:String,
        required: [true, 'El nombre es necesario'],
    },
    email:{
        type:String,
        unique:true,
        required:[true,'El correo es necesario']
    },
    password:{
        type:String,
        required:[true,'La contraseña es obligatoria']
    },

    img:{
        type:String,
        required:false
    },
    role:{
        type:String,
        default:'USER_ROLE',
        enum:userValid
    },
    estado:{
        type:Boolean,
        default:true
    },
    google:{
        type:Boolean,
        default:false
    }
});

userSchema.plugin(uniquevalidator,{message:'{PATH} debe de ser unico'});

module.exports = mongoose.model('usuario',userSchema);