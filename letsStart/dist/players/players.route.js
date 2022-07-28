"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var players_service_1 = require("./players.service");
var router = express_1.Router();
router.get('/players', players_service_1.readAllPlayer);
router.get('/players/:id', players_service_1.readSpecPlayer);
router.post('/players', players_service_1.createPlayer);
router.put('/players/:id', players_service_1.updateAllData);
router.patch('/players/:id', players_service_1.updateSpecData);
router.delete('/players/:id', players_service_1.deleteData);
exports.default = router;
//# sourceMappingURL=players.route.js.map