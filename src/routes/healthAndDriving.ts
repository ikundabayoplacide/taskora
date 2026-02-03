import { Router } from 'express';
import { healthyAndDrivingController } from '../controllers/healthyAndDrivingLicense';

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     HealthAndDrivingLicense:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           description: Health and Driving License ID
 *         userId:
 *           type: string
 *           format: uuid
 *           description: User ID
 *           example: "123e4567-e89b-12d3-a456-426614174000"
 *         healthStatus:
 *           type: string
 *           description: Overall health status
 *           example: "Good"
 *         healthConditions:
 *           type: array
 *           items:
 *             type: string
 *           description: List of health conditions
 *           example: ["None", "Allergies"]
 *         healthNotes:
 *           type: string
 *           description: Additional health notes
 *           example: "Regular checkups recommended"
 *         drivingLicense:
 *           type: boolean
 *           description: Has driving license
 *           example: true
 *         drivingLicenseType:
 *           type: array
 *           items:
 *             type: string
 *           description: Types of driving licenses
 *           example: ["Class B", "Motorcycle"]
 *         drivingLicenseUrl:
 *           type: array
 *           items:
 *             type: string
 *           description: URLs for license documents
 *           example: ["https://example.com/license.pdf"]
 *         drivingExperienceYears:
 *           type: string
 *           description: Years of driving experience
 *           example: "10 years"
 *         drivingNotes:
 *           type: string
 *           description: Additional driving notes
 *           example: "Clean driving record"
 */

/**
 * @swagger
 * /api/health-driving:
 *   post:
 *     summary: Create health and driving license record
 *     tags: [Health & Driving License]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/HealthAndDrivingLicense'
 *           example:
 *             userId: "123e4567-e89b-12d3-a456-426614174000"
 *             healthStatus: "Good"
 *             healthConditions: ["None"]
 *             healthNotes: "Regular checkups recommended"
 *             drivingLicense: true
 *             drivingLicenseType: ["Class B"]
 *             drivingExperienceYears: "10 years"
 *             drivingNotes: "Clean driving record"
 *     responses:
 *       201:
 *         description: Record created successfully
 *       500:
 *         description: Server error
 */
router.post('/', healthyAndDrivingController.createHealthyAndDriving);

/**
 * @swagger
 * /api/health-driving:
 *   get:
 *     summary: Get all health and driving license records
 *     tags: [Health & Driving License]
 *     responses:
 *       200:
 *         description: Records retrieved successfully
 *       500:
 *         description: Server error
 */
router.get('/', healthyAndDrivingController.getAllHealthyAndDriving);

/**
 * @swagger
 * /api/health-driving/{userId}:
 *   get:
 *     summary: Get health and driving license by userId
 *     tags: [Health & Driving License]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: User ID
 *         example: "123e4567-e89b-12d3-a456-426614174000"
 *     responses:
 *       200:
 *         description: Record retrieved successfully
 *       404:
 *         description: Record not found
 *       500:
 *         description: Server error
 */
router.get('/:userId', healthyAndDrivingController.getHealthyAndDrivingByUserId);

/**
 * @swagger
 * /api/health-driving/{userId}:
 *   put:
 *     summary: Update health and driving license
 *     tags: [Health & Driving License]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: User ID
 *         example: "123e4567-e89b-12d3-a456-426614174000"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               healthStatus:
 *                 type: string
 *                 example: "Excellent"
 *               drivingLicense:
 *                 type: boolean
 *                 example: true
 *               drivingLicenseType:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["Class B", "Class A"]
 *               drivingExperienceYears:
 *                 type: string
 *                 example: "15 years"
 *     responses:
 *       200:
 *         description: Record updated successfully
 *       404:
 *         description: Record not found
 *       500:
 *         description: Server error
 */
router.put('/:userId', healthyAndDrivingController.updateHealthyAndDriving);

/**
 * @swagger
 * /api/health-driving/{userId}:
 *   delete:
 *     summary: Delete health and driving license record
 *     tags: [Health & Driving License]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: User ID
 *         example: "123e4567-e89b-12d3-a456-426614174000"
 *     responses:
 *       200:
 *         description: Record deleted successfully
 *       404:
 *         description: Record not found
 *       500:
 *         description: Server error
 */
router.delete('/:userId', healthyAndDrivingController.deleteHealthyAndDriving);

export default router;