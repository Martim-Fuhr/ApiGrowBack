import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import CommentsMe from '../app/models/CommentsMe';
import CommentsGrow from '../app/models/CommentsGrow';

const models = [CommentsMe, CommentsGrow];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
