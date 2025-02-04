interface Database {
  connect(): void;
  query(query: string): void;
  close(): void;
}

class PostgreSQl implements Database {
  connect(): void {
    console.log(`PostgreSQl connected`);
  }
  query(query: string): void {
    console.log(`Executing query: ${query} on PostgreSQl`);
  }
  close(): void {
    console.log(`PostgreSQl connection closed`);
  }
}

class MongoDB implements Database {
  connect(): void {
    console.log(`MongoDB connected`);
  }
  query(query: string): void {
    console.log(`Executing query: ${query} on MongoDB`);
  }
  close(): void {
    console.log(`MongoDB connection closed`);
  }
}

abstract class DatabaseService {
  constructor(protected database: Database) {}
  abstract fetchData(query: string): void;
}

class ClientDatabaseService extends DatabaseService {
  fetchData(query: string): void {
    this.database.connect();
    this.database.query(query);
    this.database.close();
  }
}

// Client code

const postgresSQL = new ClientDatabaseService(new PostgreSQl()).fetchData(
  "Select * from pg_database where pg equals 0",
);

const mongoDb = new ClientDatabaseService(new MongoDB()).fetchData(
  "Select * from pg_database where pg equals 0",
);
