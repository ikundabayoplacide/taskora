import { Router } from 'express';
import { SkillsAndEducationEducationController } from '../controllers/skillsAndEducation';

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     SkillsAndEducation:
 *       type: object
 *       required:
 *         - userId
 *         - educationLevel
 *         - experienceLevel
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           description: Skills and Education ID
 *         userId:
 *           type: string
 *           format: uuid
 *           description: User ID
 *           example: "123e4567-e89b-12d3-a456-426614174000"
 *         skills:
 *           type: array
 *           items:
 *             type: string
 *           description: List of skills
 *           example: ["JavaScript", "Python", "React"]
 *         skillsUrl:
 *           type: array
 *           items:
 *             type: string
 *           description: URLs for skill certificates
 *           example: ["https://example.com/js-cert.pdf"]
 *         skillsLevel:
 *           type: array
 *           items:
 *             type: string
 *           description: Skill levels
 *           example: ["Expert", "Intermediate", "Advanced"]
 *         skillsExperience:
 *           type: array
 *           items:
 *             type: string
 *           description: Years of experience per skill
 *           example: ["5 years", "3 years", "4 years"]
 *         educationYear:
 *           type: array
 *           items:
 *             type: string
 *           description: Education years
 *           example: ["2018-2022", "2016-2018"]
 *         education:
 *           type: array
 *           items:
 *             type: string
 *           description: Education institutions/degrees
 *           example: ["Bachelor of Computer Science", "High School Diploma"]
 *         educationLevel:
 *           type: string
 *           description: Highest education level
 *           example: "Bachelor's Degree"
 *         experienceLevel:
 *           type: string
 *           description: Overall experience level
 *           example: "Senior Level"
 *         educationUrl:
 *           type: array
 *           items:
 *             type: string
 *           description: URLs for education certificates
 *           example: ["https://example.com/degree.pdf"]
 *         experienceYears:
 *           type: array
 *           items:
 *             type: string
 *           description: Years of experience
 *           example: ["5 years", "2 years"]
 *         certifications:
 *           type: array
 *           items:
 *             type: string
 *           description: Professional certifications
 *           example: ["AWS Certified", "Google Cloud Certified"]
 *         certificationsUrl:
 *           type: array
 *           items:
 *             type: string
 *           description: URLs for certification documents
 *           example: ["https://example.com/aws-cert.pdf"]
 *         status:
 *           type: string
 *           description: Status of the record
 *           example: "Active"
 */

/**
 * @swagger
 * /api/skills-education:
 *   post:
 *     summary: Create skills and education record
 *     tags: [Skills & Education]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SkillsAndEducation'
 *           example:
 *             userId: "123e4567-e89b-12d3-a456-426614174000"
 *             skills: ["JavaScript", "Python", "React"]
 *             skillsLevel: ["Expert", "Intermediate", "Advanced"]
 *             skillsExperience: ["5 years", "3 years", "4 years"]
 *             educationYear: ["2018-2022"]
 *             education: ["Bachelor of Computer Science"]
 *             educationLevel: "Bachelor's Degree"
 *             experienceLevel: "Senior Level"
 *             certifications: ["AWS Certified"]
 *     responses:
 *       201:
 *         description: Skills and education created successfully
 *       500:
 *         description: Server error
 */
router.post('/', SkillsAndEducationEducationController.createSkillsAndEducation);

/**
 * @swagger
 * /api/skills-education:
 *   get:
 *     summary: Get all skills and education records
 *     tags: [Skills & Education]
 *     responses:
 *       200:
 *         description: Records retrieved successfully
 *       500:
 *         description: Server error
 */
router.get('/', SkillsAndEducationEducationController.getAllSkillsAndEducation);

/**
 * @swagger
 * /api/skills-education/{userId}:
 *   get:
 *     summary: Get skills and education by userId
 *     tags: [Skills & Education]
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
router.get('/:userId', SkillsAndEducationEducationController.getSkillsAndEducationByUserId);

/**
 * @swagger
 * /api/skills-education/{userId}:
 *   put:
 *     summary: Update skills and education
 *     tags: [Skills & Education]
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
 *               skills:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["JavaScript", "Python", "React", "Node.js"]
 *               educationLevel:
 *                 type: string
 *                 example: "Master's Degree"
 *               experienceLevel:
 *                 type: string
 *                 example: "Expert Level"
 *     responses:
 *       200:
 *         description: Record updated successfully
 *       404:
 *         description: Record not found
 *       500:
 *         description: Server error
 */
router.put('/:userId', SkillsAndEducationEducationController.updateSkillsAndEducation);

/**
 * @swagger
 * /api/skills-education/{userId}:
 *   delete:
 *     summary: Delete skills and education record
 *     tags: [Skills & Education]
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
router.delete('/:userId', SkillsAndEducationEducationController.deleteSkillsAndEducation);

export default router;