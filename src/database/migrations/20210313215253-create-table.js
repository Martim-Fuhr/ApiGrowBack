module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'comments_me',
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        comment: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DataTypes.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DataTypes.DATE,
          allowNull: false,
        },
      },
      {
        schema: 'api_growdev',
      }
    );
  },

  down: async queryInterface => {
    await queryInterface.dropTable({
      tableName: 'comments_me',
      schema: 'api_growdev',
    });
  },
};
