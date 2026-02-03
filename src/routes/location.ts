import { Router } from 'express';
import { PersonalLocationController } from '../controllers/Location';

const router = Router();
const locationController = new PersonalLocationController();

/**
 * @swagger
 * components:
 *   schemas:
 *     Location:
 *       type: object
 *       required:
 *         - userId
 *         - country
 *         - province
 *         - district
 *         - sector
 *         - cell
 *         - village
 *         - latitude
 *         - longitude
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           description: Location ID
 *         userId:
 *           type: string
 *           format: uuid
 *           description: User ID
 *           example: "123e4567-e89b-12d3-a456-426614174000"
 *         country:
 *           type: string
 *           description: Country name
 *           example: "Rwanda"
 *         province:
 *           type: string
 *           description: Province name
 *           example: "Kigali"
 *         district:
 *           type: string
 *           description: District name
 *           example: "Gasabo"
 *         sector:
 *           type: string
 *           description: Sector name
 *           example: "Remera"
 *         cell:
 *           type: string
 *           description: Cell name
 *           example: "Rukiri I"
 *         village:
 *           type: string
 *           description: Village name
 *           example: "Kabuga"
 *         latitude:
 *           type: number
 *           format: float
 *           description: Latitude coordinate
 *           example: -1.9441
 *         longitude:
 *           type: number
 *           format: float
 *           description: Longitude coordinate
 *           example: 30.0619
 */

/**
 * @swagger
 * /api/location:
 *   post:
 *     summary: Create location
 *     tags: [Location]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Location'
 *           example:
 *             userId: "123e4567-e89b-12d3-a456-426614174000"
 *             country: "Rwanda"
 *             province: "Kigali"
 *             district: "Gasabo"
 *             sector: "Remera"
 *             cell: "Rukiri I"
 *             village: "Kabuga"
 *             latitude: -1.9441
 *             longitude: 30.0619
 *     responses:
 *       201:
 *         description: Location created successfully
 *       500:
 *         description: Server error
 */
router.post('/', locationController.createLocation);

/**
 * @swagger
 * /api/location:
 *   get:
 *     summary: Get all locations
 *     tags: [Location]
 *     responses:
 *       200:
 *         description: Locations retrieved successfully
 *       500:
 *         description: Server error
 */
router.get('/', locationController.getAllLocations);

/**
 * @swagger
 * /api/location/{userId}:
 *   get:
 *     summary: Get location by userId
 *     tags: [Location]
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
 *         description: Location retrieved successfully
 *       404:
 *         description: Location not found
 *       500:
 *         description: Server error
 */
router.get('/:userId', locationController.getLocationByUserId);

/**
 * @swagger
 * /api/location/{userId}:
 *   put:
 *     summary: Update location
 *     tags: [Location]
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
 *               country:
 *                 type: string
 *                 example: "Rwanda"
 *               province:
 *                 type: string
 *                 example: "Kigali"
 *               district:
 *                 type: string
 *                 example: "Nyarugenge"
 *               sector:
 *                 type: string
 *                 example: "Nyamirambo"
 *     responses:
 *       200:
 *         description: Location updated successfully
 *       404:
 *         description: Location not found
 *       500:
 *         description: Server error
 */
router.put('/:userId', locationController.updateLocation);

/**
 * @swagger
 * /api/location/{userId}:
 *   delete:
 *     summary: Delete location
 *     tags: [Location]
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
 *         description: Location deleted successfully
 *       404:
 *         description: Location not found
 *       500:
 *         description: Server error
 */
router.delete('/:userId', locationController.deleteLocation);

export default router;