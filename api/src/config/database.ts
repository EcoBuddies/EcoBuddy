import { Connection, createConnection } from "typeorm";

export class DatabaseConnection {
  private static connection: Connection;

  static async connect() {
    if (!this.connection) {
      this.connection = await createConnection();
    }
  }

  static getConnection() {
    if (!this.connection) {
      throw new Error("Connection not established");
    }

    return this.connection;
  }
}

export default DatabaseConnection;
