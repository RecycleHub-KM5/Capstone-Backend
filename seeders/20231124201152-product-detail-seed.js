"use strict";

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
    queryInterface.bulkInsert('product_details', [{
      name: 'Bunga putih',
      description:"Cocok ditempatkan di tembok sebagai pajangan",
      image: "https://cdn.discordapp.com/attachments/1153638653332029440/1164823607092969503/bunga1.png",
      id_product:1,
      createdAt: new Date(),
      updatedAt: new Date()  
    },{
      name: 'Bunga Oren',
      description:"Cocok ditempatkan di tembok sebagai pajangan",
      image: "https://cdn.discordapp.com/attachments/1153638653332029440/1164823606862303292/bunga2.png",
      id_product:1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Bunga Kuning',
      description:"Cocok ditempatkan di tembok sebagai pajangan",
      image: "https://cdn.discordapp.com/attachments/1153638653332029440/1164823606614823022/bunga3.png",
      id_product:1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Kura-Kura Ijo',
      description:"Cocok ditempatkan di rak sebagai pajangan",
      image: "https://cdn.discordapp.com/attachments/1153638653332029440/1163650328407834715/produk1.png",
      id_product:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Kura-Kura Hitam',
      description:"Cocok ditempatkan di rak sebagai pajangan",
      image: "https://cdn.discordapp.com/attachments/1153638653332029440/1164822363267923999/00F95BAC-B90F-486C-BEDE-F1DD5F550086.jpg",
      id_product:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Kura-Kura Ungu',
      description:"Cocok ditempatkan di rak sebagai pajangan",
      image: "https://cdn.discordapp.com/attachments/1153638653332029440/1164822362999496794/CEB4F83F-BC32-457A-9512-083149969B16.jpg",
      id_product:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Babi Pink',
      description:"Celengan hewan yang terbuat dari plastik",
      image: "https://cdn.discordapp.com/attachments/1153638653332029440/1163650556410220604/produk3.png",
      id_product:3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Babi Abu-Abu',
      description:"Celengan hewan yang terbuat dari plastik",
      image: "https://cdn.discordapp.com/attachments/1153638653332029440/1164822362512949329/1DB32A45-D7D9-46D3-BE89-032F7614C09E.jpg",
      id_product:3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Babi Hijau',
      description:"Celengan hewan yang terbuat dari plastik",
      image: "https://cdn.discordapp.com/attachments/1153638653332029440/1164822362756239400/07ECAB21-7A46-4E51-A158-BB5ABC4E0D9E.jpg",
      id_product:3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Pelangi Full Color',
      description:"Cocok ditempatkan di tembok sebagai pajangan",
      image: "https://cdn.discordapp.com/attachments/1153638653332029440/1163651683931390025/produk4.png",
      id_product:4,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Pelangi Monokrom',
      description:"Cocok ditempatkan di tembok sebagai pajangan",
      image: "https://cdn.discordapp.com/attachments/1153638653332029440/1164822363775443014/EEDE1712-BDF2-4D0F-87A1-3EC24EA187D6.jpg",
      id_product:4,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Pelangi Pastel',
      description:"Cocok ditempatkan di tembok sebagai pajangan",
      image: "https://cdn.discordapp.com/attachments/1153638653332029440/1164822363527991296/135B6C08-E8F0-4D46-A2FA-74B09D5D39E1.jpg",
      id_product:4,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Burung Oren',
      description:"Hiasan rak atau meja yang berbahan kertas daur ulang",
      image: "https://cdn.discordapp.com/attachments/1153638653332029440/1163700505063731270/produk5.png",
      id_product:5,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Burung Hijau',
      description:"Hiasan rak atau meja yang berbahan kertas daur ulang",
      image: "https://cdn.discordapp.com/attachments/1153638653332029440/1164822411686985769/F1FBD65B-A500-4352-9F49-CB5F2C1838CF.jpg",
      id_product:5,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Burung Biru',
      description:"Hiasan rak atau meja yang berbahan kertas daur ulang",
      image: "https://cdn.discordapp.com/attachments/1153638653332029440/1164822411078815755/29C25A8C-1206-44C9-B584-285C466CE7B2.jpg",
      id_product:5,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Perahu Putih',
      description:"Cocok ditempatkan di tembok sebagai pajangan",
      image: "https://cdn.discordapp.com/attachments/1153638653332029440/1164822408914550825/277DAD79-47A4-4219-9B50-E07CD6F6B28B.jpg",
      id_product:6,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Perahu Baby Pink',
      description:"Cocok ditempatkan di tembok sebagai pajangan",
      image: "https://cdn.discordapp.com/attachments/1153638653332029440/1164822409765986334/0BEB253D-A287-433A-8A30-3BCC7D2CAE3E.jpg",
      id_product:6,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Perahu Hitam',
      description:"Cocok ditempatkan di tembok sebagai pajangan",
      image: "https://cdn.discordapp.com/attachments/1153638653332029440/1164822410462249010/A77A2C28-EF4D-416A-B558-53B9D1EF810B.jpg",
      id_product:6,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Frame Putih',
      description:"Frame yang terbuat dari kertas daur ulang",
      image: "https://cdn.discordapp.com/attachments/1153638653332029440/1163700504614944788/produk7.png",
      id_product:7,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Frame Abu-Abu',
      description:"Frame yang terbuat dari kertas daur ulang",
      image: "https://cdn.discordapp.com/attachments/1153638653332029440/1164822364517847122/5C6C000B-489B-442E-B6F2-D9A171504FB6.jpg",
      id_product:7,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Frame Hijau',
      description:"Frame yang terbuat dari kertas daur ulang",
      image: "https://cdn.discordapp.com/attachments/1153638653332029440/1164822364824010762/CEDF12E2-805B-426B-A9B8-99BEF9100C26.jpg",
      id_product:7,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Pistol Putih',
      description:"barang daur ulang cocok menjadi teman bermain",
      image: "https://cdn.discordapp.com/attachments/1153638653332029440/1163700504359088189/produk8.png",
      id_product:8,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Pistol Merah',
      description:"barang daur ulang cocok menjadi teman bermain",
      image: "https://cdn.discordapp.com/attachments/1153638653332029440/1164822364094201856/D0BEB57D-A80E-4EF0-B988-E277029C0DE1.jpg",
      id_product:8,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Pistol Oren',
      description:"barang daur ulang cocok menjadi teman bermain",
      image: "https://cdn.discordapp.com/attachments/1153638653332029440/1164822365126021151/5DA69309-6024-4721-90C8-052EE4D5349B.jpg",
      id_product:8,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Kipas Putih',
      description:"Kipas yang terbuat dari kertas daur ulang cocok untuk menyejukkan hari-hari anda",
      image: "https://cdn.discordapp.com/attachments/1153638653332029440/1163701467216085052/produk9.png",
      id_product:9,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Kipas Kuning',
      description:"Kipas yang terbuat dari kertas daur ulang cocok untuk menyejukkan hari-hari anda",
      image: "https://cdn.discordapp.com/attachments/1153638653332029440/1163701467216085052/produk9.png",
      id_product:9,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Kipas Biru',
      description:"Kipas yang terbuat dari kertas daur ulang cocok untuk menyejukkan hari-hari anda",
      image: "https://cdn.discordapp.com/attachments/1153638653332029440/1163701467216085052/produk9.png",
      id_product:9,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Lampion Biru',
      description:"Lampion cantik yang terbuat dari kertas daur ulang. COcok ditempatkan di ruangan rumah anda",
      image: "https://cdn.discordapp.com/attachments/1153638653332029440/1163701466939265075/produk10.png",
      id_product:10,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Lampion Kuning',
      description:"Lampion cantik yang terbuat dari kertas daur ulang. COcok ditempatkan di ruangan rumah anda",
      image: "https://cdn.discordapp.com/attachments/1153638653332029440/1163701466939265075/produk10.png",
      id_product:10,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Lampion oren',
      description:"Lampion cantik yang terbuat dari kertas daur ulang. COcok ditempatkan di ruangan rumah anda",
      image: "https://cdn.discordapp.com/attachments/1153638653332029440/1163701466939265075/produk10.png",
      id_product:10,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Lampion Coklat',
      description:"Tempat tisu dari kardus daur ulang ramah lingkungan",
      image: "https://cdn.discordapp.com/attachments/1153638653332029440/1163701466595348480/produk11.png",
      id_product:11,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Tempat Tisu Hijau',
      description:"Tempat tisu dari kardus daur ulang ramah lingkungan",
      image: "https://cdn.discordapp.com/attachments/1153638653332029440/1164822412689428572/E8E2B1F4-E932-4D0B-ADF5-F4520BA47397.jpg",
      id_product:11,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Tempat Tisu Ungu',
      description:"Tempat tisu dari kardus daur ulang ramah lingkungan",
      image: "https://cdn.discordapp.com/attachments/1153638653332029440/1164822412098019378/E224BB57-9D7C-4A06-90D4-ACFA62954A54.jpg",
      id_product:11,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Tempat Tisu Coklat',
      description:"Rumah kucing yang terbuat dari kardus daur ulang. Cocok bagi anda yang ingin menghemat biaya",
      image: "https://cdn.discordapp.com/attachments/1153638653332029440/1163701466347864094/produk12.png",
      id_product:12,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Rumah Kucing Ungu',
      description:"Rumah kucing yang terbuat dari kardus daur ulang. Cocok bagi anda yang ingin menghemat biaya",
      image: "https://cdn.discordapp.com/attachments/1153638653332029440/1164822413779935333/EBBB913B-C018-47B1-8E46-8A417655A83F.jpg",
      id_product:12,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Rumah Kucing Hijau',
      description:"Rumah kucing yang terbuat dari kardus daur ulang. Cocok bagi anda yang ingin menghemat biaya",
      image: "https://cdn.discordapp.com/attachments/1153638653332029440/1164822413075300393/20250061-770B-40CF-8CA8-B5968EBFED8A.jpg",
      id_product:12,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};
