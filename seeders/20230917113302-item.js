"use strict";

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
    await queryInterface.bulkInsert("items", [
      {
        id: "2c764486-1621-4fbb-808c-f6817dc79287",
        name: "Gucci Suit",
        price: 550,
        size: "Small",
        category: "Clothing",
      },
      {
        id: "32861455-6b19-4b48-8352-9ae648ada442",
        name: "Gucci Belt",
        price: 800,
        size: "Medium",
        category: "Accessories",
      },
      {
        id: "1d1b9a7b-f024-4dd2-86c3-194b60499913",
        name: "Patek watch",
        price: 2000,
        size: "Large",
        category: "Accessories",
      },
      {
        id: "0e068e9d-14ac-4df1-8725-1fbcf58dbb33",
        name: "Rayban shades",
        price: 500,
        size: "Small",
        category: "Accessories",
      },
      {
        id: "1af789bd-eb41-45af-9aca-e4548ee2bf60",
        name: "Prada shoes",
        price: 5500,
        size: "Medium",
        category: "Shoes",
      },
      {
        id: "07716540-122a-46b5-8812-24eaa748cfe1",
        name: "Ralph Lauren shirt",
        price: 800,
        size: "Large",
        category: "Clothing",
      },
      {
        id: "9127262d-9664-4db5-9e09-88cd6ff02a8e",
        name: "Versace slides",
        price: 1000,
        size: "Small",
        category: "Shoes",
      },
      {
        id: "b846707b-1b64-4d5c-9441-d2bde5fb9fa9",
        name: "Adrien Cap",
        price: 300,
        size: "Medium",
        category: "Accessories",
      },
      {
        id: "2444c59f-4b35-41c4-ad2f-b6e9361fdf22",
        name: "Converse sneakers",
        price: 250,
        size: "Large",
        category: "Shoes",
      },
      {
        id: "f02eaa8a-6f20-45fd-b66e-85d5bb74ac0b",
        name: "Gucci Durag",
        price: 700,
        size: "Medium",
        category: "Accessories",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("items", [
      { size: "Small" },
      { size: "Medium" },
      { size: "Large" },
    ]);
  },
};
