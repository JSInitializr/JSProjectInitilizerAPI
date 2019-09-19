import { Router } from 'express';
import UserRouter from './Users';
import ProjectRouter from './Project';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/users', UserRouter);
router.use('/project', ProjectRouter);

// Export the base-router
export default router;
