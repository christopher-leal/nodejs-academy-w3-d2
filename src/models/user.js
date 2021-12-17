import { Schema, model } from 'mongoose'
import roles from '../constants/roles'
const uniqueValidator = require('mongoose-unique-validator')

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: roles,
    default: roles.USER
  },
  todos: [{ type: Schema.Types.ObjectId, ref: 'todo' }]

}, { timestamps: true })
UserSchema.plugin(uniqueValidator)

const UserModel = model('user', UserSchema)

export default UserModel
