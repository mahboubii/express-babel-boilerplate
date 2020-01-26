import express from 'express';
import health from './health';

const router = express.Router();
health(router);

export default router;
