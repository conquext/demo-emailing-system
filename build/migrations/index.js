module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.createTable('staffs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
        onDelete: 'CASCADE',
        type: Sequelize.INTEGER
      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      inviteSent: {
        type: Sequelize.ENUM,
        defaultValue: 'Yes',
        allowNull: false,
        values: ['No', 'Yes']
      },
      testSent: {
        type: Sequelize.ENUM,
        defaultValue: 'No',
        allowNull: false,
        values: ['No', 'Yes']
      },
      testStatus: {
        type: Sequelize.ENUM,
        defaultValue: 'Pending',
        allowNull: false,
        values: ['Pending', 'Received', 'NA']
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    });
  },
  down: function down(queryInterface) {
    return queryInterface.dropTable('staffs');
  }
};