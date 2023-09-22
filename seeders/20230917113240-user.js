"use strict";
const bcrypt = require("bcrypt");

const userSeedData = [
  {
    id: "77739dea-1090-4445-bf61-4e0139ca9f32",
    username: "mujeeb",
    user_type: "Admin user",
    email: "mujeeb@example.com",
    password: "mujeeb12345",
  },
  {
    id: "324d7156-c10d-4f27-a921-1b2bfe1bf5df",
    username: "joseph",
    user_type: "Regular user",
    email: "joe@example.com",
    password: "joe12345",
  },
];

const hashedUserData = userSeedData.map((user) => ({
  ...user,
  password: bcrypt.hashSync(user.password, 10),
}));

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert("users", hashedUserData);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("users", {
      email: "mujeeb@example.com",
    });
  },
};
