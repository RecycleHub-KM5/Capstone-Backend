// const db = require("../models/index.js");
const { coreApi } = require("../config/midtrans.config.js");
const midtransClient = require("midtrans-client");
const Transaction = require("../models/transaction.js");
const jwt = require("jsonwebtoken");
const ProductDetail = require("../models/product_detail.js");
const User = require("../models/user.js");
const Product = require("../models/product.js");
require("dotenv").config();

exports.midtransSnapTransaction = async (req, res) => {
    if (Object.keys(req.body).length === 0) {
        return res.status(400).send({
            success: false,
            message: "Content can not be empty!",
        });
    }
    try {
        const snap = new midtransClient.Snap({
            isProduction: false,
            serverKey: process.env.SERVER_KEY,
            clientKey: process.env.CLIENT_KEY,
        });

        console.log("Server Key:", coreApi.serverKey);
        console.log("Client Key:", coreApi.clientKey);

        const decodedToken = jwt.verify(req.body.token, process.env.JWT_KEY);

        Transaction.create({
            product_detail_id: req.body.product_detail_id,
            quantity: req.body.quantity,
            // total_price: req.body.total_price,
            total_price: req.body.quantity * req.body.total_price,
            user_id: decodedToken.id,
            // status: createResponse.transaction_status,
        })
            .then((data) => {
                // return res.status(201).json({
                //     success: true,
                //     message: "Berhasil melakukan create id transaction!",
                //     data: { data },
                // });
                return data;
            })
            .catch((error) => {
                return error;
                // return res
                //     .status(400)
                //     .json({ success: false, message: error.message });
            });

        const parameter = {
            transaction_details: {
                order_id: new Date(),
                gross_amount: Number(req.body.quantity * req.body.total_price),
            },
            item_details: [
                {
                    id: String(req.body.product_detail_id),
                    name: "CustOrder-103",
                    quantity: Number(req.body.quantity || 1),
                    price: Number(req.body.total_price),
                },
            ],
        };

        // const parameter = {
        //     transaction_details: {
        //         order_id: "CustOrder-102",
        //         gross_amount: 7000,
        //     },
        //     item_details: [
        //         {
        //             name: "Apple",
        //             price: 7000,
        //             quantity: 1,
        //             id: "SKU-01",
        //         },
        //     ],
        // };

        snap.createTransaction(parameter).then((snapResponse) => {
            const dataPayment = {
                response: JSON.stringify(snapResponse),
            };
            const token = snapResponse.token;

            res.status(200).json({
                message: "Payment Success.",
                dataPayment,
                token: token,
            });
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

exports.getTransaction = async (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, process.env.JWT_KEY);
        const user_id = decodedToken.id;

        const transaction = await Transaction.findAll({
            where: { user_id: user_id },
            include: [
                {
                    model: ProductDetail,
                    include: [{ model: Product, attributes: ["id", "price"] }],
                },
                { model: User },
            ],
        });
        res.json(transaction);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
