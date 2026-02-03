import { Router } from 'express';
import { UserAvailabilityController } from '../controllers/availability';

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Availability:
 *       type: object
 *       required:
 *         - userId
 *         - availabilityStatus
 *         - availabilityDate
 *         - availabilityTime
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           description: Availability ID
 *         userId:
 *           type: string
 *           format: uuid
 *           description: User ID
 *           example: "123e4567-e89b-12d3-a456-426614174000"
 *         availabilityStatus:
 *           type: string
 *           enum: ["Available", "Busy", "Unavailable"]
 *           description: Availability status
 *           example: "Available"
 *         availabilityDetails:
 *           type: string
 *           description: Additional availability details
 *           example: "Available for remote work"
 *         availabilityNotes:
 *           type: string
 *           description: Additional notes
 *           example: "Prefer morning hours"
 *         availabilityDate:
 *           type: string
 *           format: date
 *           description: Date of availability
 *           example: "2024-01-15"
 *         availabilityTime:
 *           type: string
 *           description: Time of availability
 *           example: "09:00-17:00"
 *         noticePeriod:
 *           type: string
 *           description: Notice period required
 *           example: "2 weeks"
 */

/**
 * @swagger
 * /api/availability:
 *   post:
 *     summary: Create user availability
 *     tags: [Availability]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Availability'
 *           example:
 *             userId: "123e4567-e89b-12d3-a456-426614174000"
 *             availabilityStatus: "Available"
 *             availabilityDate: "2024-01-15"
 *             availabilityTime: "09:00-17:00"
 *             availabilityNotes: "Available for remote work"
 *             noticePeriod: "1 week"
 *     responses:
 *       201:
 *         description: Availability created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   $ref: '#/components/schemas/Availability'
 *       500:
 *         description: Server error
 */
router.post('/', UserAvailabilityController.createAvailability);

/**
 * @swagger
 * /api/availability:
 *   get:
 *     summary: Get all availabilities
 *     tags: [Availability]
 *     responses:
 *       200:
 *         description: Availabilities retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Availability'
 *       500:
 *         description: Server error
 */
router.get('/', UserAvailabilityController.getAllAvailabilities);

/**
 * @swagger
 * /api/availability/{userId}:
 *   get:
 *     summary: Get availability by userId
 *     tags: [Availability]
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
 *         description: Availability retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Availability'
 *       404:
 *         description: Availability not found
 *       500:
 *         description: Server error
 */
router.get('/:userId', UserAvailabilityController.getAvailabilityByUserId);

/**
 * @swagger
 * /api/availability/{userId}:
 *   put:
 *     summary: Update availability
 *     tags: [Availability]
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
 *               availabilityStatus:
 *                 type: string
 *                 enum: ["Available", "Busy", "Unavailable"]
 *                 example: "Busy"
 *               availabilityDate:
 *                 type: string
 *                 format: date
 *                 example: "2024-01-20"
 *               availabilityTime:
 *                 type: string
 *                 example: "10:00-16:00"
 *               availabilityNotes:
 *                 type: string
 *                 example: "Updated availability"
 *     responses:
 *       200:
 *         description: Availability updated successfully
 *       404:
 *         description: Availability not found
 *       500:
 *         description: Server error
 */
router.put('/:userId', UserAvailabilityController.updateAvailability);

/**
 * @swagger
 * /api/availability/{userId}:
 *   delete:
 *     summary: Delete availability
 *     tags: [Availability]
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
 *         description: Availability deleted successfully
 *       404:
 *         description: Availability not found
 *       500:
 *         description: Server error
 */
router.delete('/:userId', UserAvailabilityController.deleteAvailability);

export default router;