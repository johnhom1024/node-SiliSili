import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  user_id: Number,
  user_name: String,
  password: String,
  status: Number,
  create_time: String
})

userSchema.index({user_id: 1});

const User = mongoose.model('User', userSchema);

export default User;