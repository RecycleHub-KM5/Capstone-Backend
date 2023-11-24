'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    queryInterface.bulkInsert('categories', [{
      name: 'Bunga putih',
      id_product:1,
      createdAt: new Date(),
      updatedAt: new Date()  
    },{
      name: 'Bunga Oren',
      id_product:1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Bunga Kuning',
      id_product:1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Kura-Kura Ijo',
      id_product:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Kura-Kura Hitam',
      id_product:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Babi Pink',
      id_product:3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Babi Abu-Abu',
      id_product:3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Babi Hijau',
      id_product:3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Full Color',
      id_product:4,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Monokrom',
      id_product:4,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Pastel',
      id_product:4,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Oren',
      id_product:5,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Hijau',
      id_product:5,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Biru',
      id_product:5,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Putih',
      id_product:6,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Baby Pink',
      id_product:6,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Hitam',
      id_product:6,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Putih',
      id_product:7,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Abu-Abu',
      id_product:7,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Hijau',
      id_product:7,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Putih',
      id_product:8,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Merah',
      id_product:8,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Oren',
      id_product:8,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Putih',
      id_product:9,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Kuning',
      id_product:9,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Biru',
      id_product:9,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Biru',
      id_product:10,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Kuning',
      id_product:10,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'oren',
      id_product:10,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Coklat',
      id_product:11,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Hijau',
      id_product:11,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Ungu',
      id_product:11,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Coklat',
      id_product:12,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Ungu',
      id_product:12,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Hijau',
      id_product:12,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
