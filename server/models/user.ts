import { Schema, model } from 'mongoose';
import DB from "../common/database";

const UserSchema = {
  email: {
    type: String,
    default: 'default'
  }
};


export default new DB().model('User', UserSchema);