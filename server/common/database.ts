import * as mongoose from 'mongoose';



export default class DB {

  private static _connection;
  private _MONGO_URI: string = 'mongodb://localhost:27017/testDB';


  constructor() {
    if (typeof DB._connection === 'undefined') {
      DB._connection = this._getDB();
    }

    DB._connection.on("connected", () => {
      console.log("MongoDB connection success.");
    });

    DB._connection.on("error", () => {
      console.log("MongoDB connection error. Please make sure MongoDB is running.");
      process.exit();
    });
  }


  model(name, schema): mongoose.Model<any> {
    return DB._connection.model(name, schema);
  }


  private _getDB() {
    // (<any>mongoose).Promise = Promise;
    return mongoose.createConnection(this._MONGO_URI, { useMongoClient: true });
  }

}
