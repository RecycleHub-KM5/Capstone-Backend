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
        queryInterface.bulkInsert(
            "products",
            [
                {
                    name: "Bunga Plastik",
                    price: 15000,
                    description: "Cocok ditempatkan di tembok sebagai pajangan",
                    thumbnail:
                        "https://cdn.discordapp.com/attachments/1164510335114428526/1178978685009797170/image.png?ex=65781c76&is=6565a776&hm=eabe49efd24f813d552aa4eebfaa8489c0b179d19d9eae9bb2c0ef9dd91922d4&",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Kura-Kura plastik",
                    price: 30000,
                    description: "Cocok ditempatkan di rak sebagai pajangan",
                    thumbnail:
                        "https://cdn.discordapp.com/attachments/1164510335114428526/1178978685278236722/image.png?ex=65781c76&is=6565a776&hm=9e52c5c154b737772c707ffe8f8cbd0fee64e47461f0f72ff99d50b91216cd3b&",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Celengan Plastik",
                    price: 30000,
                    description: "Celengan hewan yang terbuat dari plastik",
                    thumbnail:
                        "https://cdn.discordapp.com/attachments/1164510335114428526/1178978685529886780/image.png?ex=65781c76&is=6565a776&hm=5d1313ee69155f81bbfc5b577509d7f8d12fed56e5e0fc26567a2d533cc6d9b5&",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Pajangan Pelangi Plastik",
                    price: 25000,
                    description: "Cocok ditempatkan di tembok sebagai pajangan",
                    thumbnail:
                        "https://cdn.discordapp.com/attachments/1164510335114428526/1178978685760577597/image.png?ex=65781c77&is=6565a777&hm=3acaebc1f521ed168a203d31413d12150c68b96e1a367ed0a0c15a5925ab96b5&",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Premium Origami",
                    price: 30000,
                    description:
                        "Hiasan rak atau meja yang berbahan kertas daur ulang",
                    thumbnail:
                        "https://cdn.discordapp.com/attachments/1164510335114428526/1178978686326804520/image.png?ex=65781c77&is=6565a777&hm=c1b2ff1068fbd0bb67b916fba2548f9f7a507fe329e25b779d276495029b297b&",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Origami",
                    price: 5000,
                    description: "Cocok ditempatkan di tembok sebagai pajangan",
                    thumbnail:
                        "https://cdn.discordapp.com/attachments/1164510335114428526/1178978686725267546/image.png?ex=65781c77&is=6565a777&hm=23f363568583b6ada6a715cfd9649da9dd9ffa2ec26301b686266773b9f6a685&",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Frame Foto Kertas",
                    price: 5000,
                    description: "Frame yang terbuat dari kertas daur ulang",
                    thumbnail:
                        "https://cdn.discordapp.com/attachments/1164510335114428526/1178978686981124197/image.png?ex=65781c77&is=6565a777&hm=56a3af8d6014b83351026ab9961366fcf1284f389080e66585147b9e894ddeb0&",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Pistol Air",
                    price: 50000,
                    description:
                        "barang daur ulang cocok menjadi teman bermain",
                    thumbnail:
                        "https://cdn.discordapp.com/attachments/1164510335114428526/1178978687182442566/image.png?ex=65781c77&is=6565a777&hm=6567a34b00570bd781d43c7c580c26c22ffedbbfadee1853c623130026958fa3&",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Kipas Kertas",
                    price: 10000,
                    description:
                        "Kipas yang terbuat dari kertas daur ulang cocok untuk menyejukkan hari-hari anda",
                    thumbnail:
                        "https://cdn.discordapp.com/attachments/1164510335114428526/1178978687497023498/image.png?ex=65781c77&is=6565a777&hm=953c263f58f3720fc01237e57b79701b01d07591ddbfb1fa3bca497260e99c43&",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "lampion Kertas",
                    price: 25000,
                    description:
                        "Lampion cantik yang terbuat dari kertas daur ulang. COcok ditempatkan di ruangan rumah anda",
                    thumbnail:
                        "https://cdn.discordapp.com/attachments/1164510335114428526/1178978687765450772/image.png?ex=65781c77&is=6565a777&hm=4538a15fb850272f6f22ea63bdbb68099d1a80ad50cbe1536b6c06f57d7e0127&",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Tempat Tisu Kardus",
                    price: 5000,
                    description:
                        "Tempat tisu dari kardus daur ulang ramah lingkungan",
                    thumbnail:
                        "https://cdn.discordapp.com/attachments/1164510335114428526/1178978746951270480/image.png?ex=65781c85&is=6565a785&hm=1cf53dad7b1992ebbf408f42da99fa57720c31576abe1c813cb310ff0be9a092&",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Rumah Kucing",
                    price: 100000,
                    description:
                        "Rumah kucing yang terbuat dari kardus daur ulang. Cocok bagi anda yang ingin menghemat biaya",
                    thumbnail:
                        "https://cdn.discordapp.com/attachments/1164510335114428526/1178978747169378324/image.png?ex=65781c85&is=6565a785&hm=10bbaa91aab913cf9dde35e66debeaea043e437eac79fa28333dbbec0061786a&",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );
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
