interface IDatabase {
  save(data: string): void;
}

class MySQLDatabase implements IDatabase {
  save(data: string): void {
    console.log(`${data} is being saved`);
  }
}

class MongoDbDatabase implements IDatabase {
  save(data: string): void {
    console.log(`${data} is being saved MongoVersion`);
  }
}

class HighLevelModule {
  constructor(private database: IDatabase) {}
  execute(data: string) {
    this.database.save(data);
  }
}

let mysql = new MySQLDatabase();
let mongoDb = new MongoDbDatabase();

let user = new HighLevelModule(mysql);
user.execute("Mohamed");

let post = new HighLevelModule(mongoDb);
post.execute("New Post");
