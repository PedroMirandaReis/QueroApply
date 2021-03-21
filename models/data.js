import mongoose from 'mongoose'
import crypto from 'crypto'

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

  },
  {
    timestamps: true,
    toJSON: { virtuals: true, getters: true },
    toObject: { virtuals: true, getters: true },
  }
)
export const queroModel = mongoose.model('queroModel', schema)
