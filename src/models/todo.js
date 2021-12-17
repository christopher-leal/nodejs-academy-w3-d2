import { Schema, model } from 'mongoose'

const TodoSchema = new Schema({
  desc: {
    type: String,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'user'
  },
  status: {
    type: Boolean,
    default: true
  }
}, { timestamps: true })

const TodoModel = model('user', TodoSchema)

export default TodoModel
