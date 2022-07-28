"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var players_1 = require("./players");
var express_1 = require("express");
var router = express_1.Router();
router.get('/players', function (req, res) {
    try {
        var players = players_1.Player;
        res.status(200).send({
            success: true,
            data: {
                players: players,
            }
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
});
router.get('/players/:id', function (req, res) {
    try {
        var id_1 = req.params.id;
        var player = players_1.Player.find(function (player) {
            return player.id === id_1;
        });
        res.status(200).send({
            success: true,
            data: {
                player: player
            }
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
});
router.post('/players', function (req, res) {
    try {
        var data = req.body;
        players_1.Player.push(data);
        res.status(200).send({
            success: true,
            data: { Player: players_1.Player },
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
});
router.put('/players/:id', function (req, res) {
    try {
        var id_2 = req.params.id;
        var body_1 = req.body;
        var result_1;
        players_1.Player.forEach(function (player) {
            if (player.id === id_2) {
                player = body_1;
                result_1 = player;
            }
        });
        res.status(200).send({
            success: true,
            data: {
                player: result_1
            }
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
});
router.patch('/players/:id', function (req, res) {
    try {
        var id_3 = req.params.id;
        var body_2 = req.body;
        var result_2;
        players_1.Player.forEach(function (player) {
            if (player.id === id_3) {
                player = __assign(__assign({}, player), body_2);
                result_2 = player;
            }
        });
        res.status(200).send({
            success: true,
            data: {
                player: result_2
            }
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
});
router.delete('/players/:id', function (req, res) {
    try {
        var id_4 = req.params.id;
        var newPlayer = players_1.Player.filter(function (player) {
            return (player.id !== id_4);
        });
        res.status(200).send({
            success: true,
            data: {
                player: newPlayer
            }
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
});
exports.default = router;
//# sourceMappingURL=players.route.js.map