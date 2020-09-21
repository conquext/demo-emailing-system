// const userSeed = require("../helpers/seed").userSeed;
import faker from 'faker'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let staffs = []
    staffs.push(newPerson())

    return queryInterface.bulkInsert('staffs', staffs)
  },
  down: (queryInterface) => queryInterface.bulkDelete('staffs', null, {}),
}

function newPerson() {
  const statusChance = Math.random()
  const firstName = faker.name.firstName() || ''
  const lastName = faker.name.firstName() || ''
  return {
    firstName,
    lastName,
    email: faker.internet.email(firstName, lastName),
    inviteSent: Math.floor(Math.random() * 100) % 2 ? 'Yes' : 'No',
    testSent: Math.floor(Math.random() * 30) % 2 ? 'Yes' : 'No',
    testStatus:
      statusChance > 0.66
        ? 'Pending'
        : statusChance > 0.33
        ? 'Sent'
        : 'Received',
  }
}
