import mongoose from 'mongoose';

const Schema = mongose.Schema;

const adminSchema = new Schema({
	user_name: String,
	password: String,

})



const Admin = mongoose.model('Admin', adminSchema);


export default Admin