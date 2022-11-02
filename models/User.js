import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },

  password: {
    type: String,
    required: [true, 'Password is required'],
  },

  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const UserSchema = mongoose.model('Users', userSchema);

export default UserSchema;
