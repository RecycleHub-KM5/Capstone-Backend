// seeders/20230102000001-seed-carts.js

'use strict';

const { fakerDE: faker } = require('@faker-js/faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const cartsData = [];

    // Ganti jumlah produk dan detail produk sesuai kebutuhan
    const numProducts = 3;
    const numDetailsPerProduct = 2;

    // Seed Cart dengan menggunakan loop
    for (let i = 1; i <= numProducts; i++) {
      for (let j = 1; j <= numDetailsPerProduct; j++) {
        cartsData.push({
          name: faker.string.uuid(),
          user_id: Math.floor((Math.random() * 3) + 1), // Ganti dengan logika sesuai kebutuhan
          product_id: i, // ID produk
          product_detail: j, // ID detail produk
          total: Math.floor((Math.random() * 5) + 1),
          note: 'random',
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      }
    }

    // Insert data carts ke database
    return queryInterface.bulkInsert('carts', cartsData, {});
  },

  down: async (queryInterface, Sequelize) => {
    // Hapus semua data carts
    return queryInterface.bulkDelete('carts', null, {});
  },
};
