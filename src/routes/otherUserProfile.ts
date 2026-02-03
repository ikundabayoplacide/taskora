import { Router } from 'express';
import { OtherUserProfileController } from '../controllers/OtherUserProfile';

const router = Router();
const otherUserProfileController = new OtherUserProfileController();

/**
 * @swagger
 * components:
 *   schemas:
 *     OtherUserProfile:
 *       type: object
 *       required:
 *         - userId
 *         - otherPersonalName
 *         - otherPersonalId
 *         - otherPersonalPhone
 *         - otherPersonalEmail
 *         - otherPersonalNationality
 *         - otherPersonalRelation
 *         - otherPersonalPhoto
 *         - otherPersonalAge
 *         - otherPersonalGender
 *         - otherPersonalOccupation
 *         - otherPersonalEmergency
 *         - otherPersonalNotes
 *         - otherPersonalIdPhoto
 *       properties:
 *         userId:
 *           type: string
 *           format: uuid
 *           description: User ID
 *           example: "123e4567-e89b-12d3-a456-426614174000"
 *         otherPersonalName:
 *           type: string
 *           description: Full name of the other person
 *           example: "Jane Smith"
 *         otherPersonalId:
 *           type: string
 *           description: ID number of the other person
 *           example: "987654321"
 *         otherPersonalPhone:
 *           type: string
 *           description: Phone number
 *           example: "+1987654321"
 *         otherPersonalEmail:
 *           type: string
 *           format: email
 *           description: Email address
 *           example: "jane.smith@example.com"
 *         otherPersonalNationality:
 *           type: string
 *           description: Nationality
 *           example: "Canadian"
 *         otherPersonalRelation:
 *           type: string
 *           description: Relationship to the user
 *           example: "Emergency Contact"
 *         otherPersonalPhoto:
 *           type: string
 *           description: Photo URL
 *           example: "https://example.com/jane-photo.jpg"
 *         otherPersonalAge:
 *           type: integer
 *           minimum: 1
 *           maximum: 120
 *           description: Age in years
 *           example: 28
 *         otherPersonalGender:
 *           type: string
 *           enum: ["Male", "Female", "Other"]
 *           description: Gender
 *           example: "Female"
 *         otherPersonalOccupation:
 *           type: string
 *           description: Occupation
 *           example: "Doctor"
 *         otherPersonalEmergency:
 *           type: boolean
 *           description: Is this an emergency contact
 *           example: true
 *         otherPersonalNotes:
 *           type: string
 *           description: Additional notes
 *           example: "Available 24/7 for emergencies"
 *         otherPersonalIdPhoto:
 *           type: string
 *           description: ID photo URL
 *           example: "https://example.com/jane-id.jpg"
 */

/**
 * @swagger
 * /api/other-profile:
 *   post:
 *     summary: Create other user profile
 *     tags: [Other User Profile]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/OtherUserProfile'
 *           example:
 *             userId: "123e4567-e89b-12d3-a456-426614174000"
 *             otherPersonalName: "Jane Smith"
 *             otherPersonalId: "987654321"
 *             otherPersonalPhone: "+1987654321"
 *             otherPersonalEmail: "jane.smith@example.com"
 *             otherPersonalNationality: "Canadian"
 *             otherPersonalRelation: "Emergency Contact"
 *             otherPersonalPhoto: "https://example.com/jane-photo.jpg"
 *             otherPersonalAge: 28
 *             otherPersonalGender: "Female"
 *             otherPersonalOccupation: "Doctor"
 *             otherPersonalEmergency: true
 *             otherPersonalNotes: "Available 24/7 for emergencies"
 *             otherPersonalIdPhoto: "https://example.com/jane-id.jpg"
 *     responses:
 *       201:
 *         description: Profile created successfully
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
 *                   $ref: '#/components/schemas/OtherUserProfile'
 *       500:
 *         description: Server error
 */
router.post('/', otherUserProfileController.createOtherUserProfile);

/**
 * @swagger
 * /api/other-profile:
 *   get:
 *     summary: Get all other user profiles
 *     tags: [Other User Profile]
 *     responses:
 *       200:
 *         description: Profiles retrieved successfully
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
 *                     $ref: '#/components/schemas/OtherUserProfile'
 *       500:
 *         description: Server error
 */
router.get('/', otherUserProfileController.getAllOtherUserProfiles);

/**
 * @swagger
 * /api/other-profile/{userId}:
 *   get:
 *     summary: Get other user profile by userId
 *     tags: [Other User Profile]
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
 *         description: Profile retrieved successfully
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
 *                   $ref: '#/components/schemas/OtherUserProfile'
 *       404:
 *         description: Profile not found
 *       500:
 *         description: Server error
 */
router.get('/:userId', otherUserProfileController.getOtherUserProfileByUserId);

/**
 * @swagger
 * /api/other-profile/{userId}:
 *   put:
 *     summary: Update other user profile
 *     tags: [Other User Profile]
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
 *               otherPersonalName:
 *                 type: string
 *                 example: "Jane Smith Updated"
 *               otherPersonalPhone:
 *                 type: string
 *                 example: "+1987654321"
 *               otherPersonalEmail:
 *                 type: string
 *                 format: email
 *                 example: "jane.updated@example.com"
 *               otherPersonalOccupation:
 *                 type: string
 *                 example: "Senior Doctor"
 *               otherPersonalNotes:
 *                 type: string
 *                 example: "Updated emergency contact info"
 *     responses:
 *       200:
 *         description: Profile updated successfully
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
 *                   $ref: '#/components/schemas/OtherUserProfile'
 *       404:
 *         description: Profile not found
 *       500:
 *         description: Server error
 */
router.put('/:userId', otherUserProfileController.updateOtherUserProfile);

/**
 * @swagger
 * /api/other-profile/{userId}:
 *   delete:
 *     summary: Delete other user profile
 *     tags: [Other User Profile]
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
 *         description: Profile deleted successfully
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
 *                   type: null
 *       404:
 *         description: Profile not found
 *       500:
 *         description: Server error
 */
router.delete('/:userId', otherUserProfileController.deleteOtherUserProfile);

export default router;