import { Router } from 'express';
import userProfileRoutes from './userProfile';
import otherUserProfileRoutes from './otherUserProfile';
import availabilityRoutes from './availability';
import locationRoutes from './location';
import skillsAndEducationRoutes from './skillsAndEducation';
import healthAndDrivingRoutes from './healthAndDriving';

const routers = Router();

routers.use('/api/profile', userProfileRoutes);
routers.use('/api/other-profile', otherUserProfileRoutes);
routers.use('/api/availability', availabilityRoutes);
routers.use('/api/location', locationRoutes);
routers.use('/api/skills-education', skillsAndEducationRoutes);
routers.use('/api/health-driving', healthAndDrivingRoutes);

export default routers;