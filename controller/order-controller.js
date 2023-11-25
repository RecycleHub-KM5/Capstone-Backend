const db = require("../models/index.js");
const Transaction = db.transaction;
const { coreApi } = require("../config/midtrans.config.js");

exports.midtransChargeTransaction = async (req, res) => {
    if (Object.keys(req.body).length === 0) {
        return res.status(400).send({
            success: false,
            message: "Content can not be empty!",
        });
    }
    try {
        coreApi
            .charge(req.body)
            .then((chargeResponse) => {
                // console.log(chargeResponse);
                Order.create({
                    order_id: chargeResponse.order_id,
                    name: req.body.name,
                    transaction_status: chargeResponse.transaction_status,
                    response_midtrans: JSON.stringify(chargeResponse),
                })
                    .then((data) => {
                        return res.status(201).json({
                            success: true,
                            message: "Berhasil melakukan charge transaction!",
                            data: { data },
                        });
                    })
                    .catch((error) => {
                        return res
                            .status(400)
                            .json({ success: false, message: error.message });
                    });
            })
            .catch((error) => {
                return res
                    .status(400)
                    .json({ success: false, message: error.message });
            });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};
