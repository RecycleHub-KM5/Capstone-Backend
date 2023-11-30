"use strict";
const bcrypt = require("bcrypt");
const saltRounds = 10;
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
        const hashPassword = bcrypt.hashSync("1234recycle567", saltRounds);
        queryInterface.bulkInsert(
            "users",
            [
                {
                    name: "Septi",
                    email: "septi@recyclehub.com",
                    password: hashPassword,
                    role: "admin",
                    avatar: "./septi.jpg",
                    no_telp: "+62 857-0215-7267",
                    address: "ruang angasa",
                    saldo: 50000000,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                  name: "yusuf",
                  email: "yusuf@recyclehub.com",
                  password: hashPassword,
                  role: "admin",
                  avatar: "./yusuf.jpg",
                  no_telp: "+62 878-7717-4853",
                  address: "ruang angasa",
                  saldo: 5000000,
                  createdAt: new Date(),
                  updatedAt: new Date(),
              },
              {
                name: "user",
                email: "user@anywhare.com",
                password: hashPassword,
                role: "user",
                avatar: "./yusuf.jpg",
                no_telp: "+62 878-1234-5678",
                address: "antah berantah",
                saldo: 1000000,
                createdAt: new Date(),
                updatedAt: new Date(),
            }
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
