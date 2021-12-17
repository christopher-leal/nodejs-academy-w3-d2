import { Schema, model } from 'mongoose'

const TodoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
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

const TodoModel = model('todo', TodoSchema)

export default TodoModel
