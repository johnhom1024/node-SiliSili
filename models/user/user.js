import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    user_name: String,
    password: String,
    status: Number
  },
  {
    timestamps: true
  }

)



const User = mongoose.model('User', userSchema);

export default User;