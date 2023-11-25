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
    queryInterface.bulkInsert('products', [{
        name: 'Bunga Plastik',
        price: 15000,
        decription: "Cocok ditempatkan di tembok sebagai pajangan",
        createdAt: new Date(),
        updatedAt: new Date()  
      },{
        name: 'Kura-Kura plastik',
        price: 30000,
        decription: "Cocok ditempatkan di rak sebagai pajangan",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Celengan Plastik',
        price: 30000,
        decription: "Celengan hewan yang terbuat dari plastik",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Pajangan Pelangi Plastik',
        price: 25000,
        decription: "Cocok ditempatkan di tembok sebagai pajangan",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Premium Origami',
        price: 30000,
        decription: "Hiasan rak atau meja yang berbahan kertas daur ulang",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Origami',
        price: 5000,
        decription: "Cocok ditempatkan di tembok sebagai pajangan",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Frame Foto Kertas',
        price: 5000,
        decription: "Frame yang terbuat dari kertas daur ulang",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Pistol Air',
        price: 50000,
        decription: "barang daur ulang cocok menjadi teman bermain",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Kipas Kertas',
        price: 10000,
        decription: "Kipas yang terbuat dari kertas daur ulang cocok untuk menyejukkan hari-hari anda",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'lampion Kertas',
        price: 25000,
        decription: "Lampion cantik yang terbuat dari kertas daur ulang. COcok ditempatkan di ruangan rumah anda",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Tempat Tisu Kardus',
        price: 5000,
        decription: "Tempat tisu dari kardus daur ulang ramah lingkungan",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Rumah Kucing',
        price: 100000,
        decription: "Rumah kucing yang terbuat dari kardus daur ulang. Cocok bagi anda yang ingin menghemat biaya",
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
