class MySqlDatabase {
  connectToMySql(uri: string) {
    console.log(`Connected to MySQL Database ${uri}`);
  }

  executeMySqlQuery(query: string) {
    console.log(`Executing MySQL Query: ${query}`);
  }
}
class PostgreSqlDatabase {
  connectToPostgreSql(uri: string) {
    console.log(`Connected to PostgreSQL Database ${uri}`);
  }
  executePostgreSqlQuery(query: string) {
    console.log(`Executing PostgreSQL Query: ${query}`);
  }
}

class DatabaseAdapter {
  constructor(private postgreSQl: PostgreSqlDatabase) {}
  connectToMySql(uri: string) {
    this.postgreSQl.connectToPostgreSql(uri);
  }

  executeMySqlQuery(query: string) {
    this.postgreSQl.executePostgreSqlQuery(query);
  }
}

// Client Code
let database = new DatabaseAdapter(new PostgreSqlDatabase());
database.connectToMySql("mysql://localhost:3000/my-test");
database.executeMySqlQuery("SELECT * FROM users");
