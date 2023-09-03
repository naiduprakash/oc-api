import { Router } from 'express';
import { getOptionChainData, root } from '../apis/index.js';
var router = Router();

/* GET home page. */
router.get('/', async function (req, res, next) {
  await root()
  const result = await getOptionChainData({ symbol: "NIFTY" })
  res.send(result?.data || {});
});

export default router;
