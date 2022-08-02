import { Player, Type} from "./players";
import {Router} from 'express'
import { createPlayer, deleteData, readAllPlayer, readSpecPlayer, updateAllData, updateSpecData } from "./players.service";

// Router를 위한 비즈니스 패턴

const router= Router()

router.get('/players', readAllPlayer)

router.get('/players/:id',readSpecPlayer)
 
router.post('/players',createPlayer)

router.put('/players/:id', updateAllData)

router.patch('/players/:id', updateSpecData)

router.delete('/players/:id', deleteData)

export default router;


