import { Router } from 'express';
import { UserProfileController } from '../controllers/UserProfile';

const router = Router();
const userProfileController = new UserProfileController();

/**
 * @swagger
 * components:
 *   schemas:
 *     UserProfile:
 *       type: object
 *       required:
 *         - userId
 *         - fullName
 *         - phoneNumber
 *         - email
 *         - nationality
 *         - nationalId
 *         - gender
 *         - age
 *         - photo
 *         - occupation
 *         - nationalIdPhoto
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           description: Profile ID
 *         userId:
 *           type: string
 *           format: uuid
 *           description: User ID
 *         fullName:
 *           type: string
 *           description: Full name of the user
 *           example: "John Doe"
 *         phoneNumber:
 *           type: string
 *           description: Phone number
 *           example: "+1234567890"
 *         email:
 *           type: string
 *           format: email
 *           description: Email address
 *           example: "john.doe@example.com"
 *         nationality:
 *           type: string
 *           description: Nationality
 *           example: "American"
 *         nationalId:
 *           type: string
 *           description: National ID number
 *           example: "123456789"
 *         gender:
 *           type: string
 *           enum: ["Male", "Female", "Other"]
 *           description: Gender
 *         age:
 *           type: integer
 *           minimum: 1
 *           maximum: 120
 *           description: Age in years
 *           example: 30
 *         photo:
 *           type: string
 *           description: Profile photo URL
 *           example: "https://example.com/photo.jpg"
 *         occupation:
 *           type: string
 *           description: Occupation
 *           example: "Software Engineer"
 *         nationalIdPhoto:
 *           type: string
 *           description: National ID photo URL
 *           example: "https://example.com/id-photo.jpg"
 *         otherPersonUserId:
 *           type: integer
 *           description: Other person user ID (optional)
 */

/**
 * @swagger
 * /api/profile:
 *   post:
 *     summary: Create user profile
 *     tags: [User Profile]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserProfile'
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
 *                   $ref: '#/components/schemas/UserProfile'
 *       500:
 *         description: Server error
 */
router.post('/', userProfileController.createProfile);

/**
 * @swagger
 * /api/profile:
 *   get:
 *     summary: Get all user profiles
 *     tags: [User Profile]
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
 *                     $ref: '#/components/schemas/UserProfile'
 *       500:
 *         description: Server error
 */
router.get('/', userProfileController.getAllProfiles);

/**
 * @swagger
 * /api/profile/{userId}:
 *   get:
 *     summary: Get user profile by userId
 *     tags: [User Profile]
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
 *                   $ref: '#/components/schemas/UserProfile'
 *       404:
 *         description: Profile not found
 *       500:
 *         description: Server error
 */
router.get('/:userId', userProfileController.getProfileByUserId);

/**
 * @swagger
 * /api/profile/{userId}:
 *   put:
 *     summary: Update user profile
 *     tags: [User Profile]
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
 *               fullName:
 *                 type: string
 *                 example: "John Doe Updated"
 *               phoneNumber:
 *                 type: string
 *                 example: "+1234567890"
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "john.updated@example.com"
 *               occupation:
 *                 type: string
 *                 example: "Senior Software Engineer"
 *     responses:
 *       200:
 *         description: Profile updated successfully
 *       404:
 *         description: Profile not found
 *       500:
 *         description: Server error
 */
router.put('/:userId', userProfileController.updateProfile);

/**
 * @swagger
 * /api/profile/{userId}:
 *   delete:
 *     summary: Delete user profile
 *     tags: [User Profile]
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
 *       404:
 *         description: Profile not found
 *       500:
 *         description: Server error
 */
router.delete('/:userId', userProfileController.deleteProfile);

export default router;