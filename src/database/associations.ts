import PersonalProfile from './models/personalProfile';
import OtherPersonProfile from './models/otherPersonProfile';
import Location from './models/location';
import SkillsAndEducation from './models/skillsAndEducation';
import HealthAndDrivingLicense from './models/healthAndDrivingLicense';
import Availability from './models/availability';

export const setupAssociations = () => {
    // PersonalProfile has many related profiles
    PersonalProfile.hasMany(OtherPersonProfile, {
        foreignKey: 'userId',
        as: 'otherPersons'
    });
    
    PersonalProfile.hasOne(Location, {
        foreignKey: 'userId',
        as: 'location'
    });
    
    PersonalProfile.hasOne(SkillsAndEducation, {
        foreignKey: 'userId',
        as: 'skillsAndEducation'
    });
    
    PersonalProfile.hasOne(HealthAndDrivingLicense, {
        foreignKey: 'userId',
        as: 'healthAndDriving'
    });
    
    PersonalProfile.hasMany(Availability, {
        foreignKey: 'userId',
        as: 'availability'
    });
    
    // Reverse associations
    OtherPersonProfile.belongsTo(PersonalProfile, {
        foreignKey: 'userId',
        as: 'user'
    });
    
    Location.belongsTo(PersonalProfile, {
        foreignKey: 'userId',
        as: 'user'
    });
    
    SkillsAndEducation.belongsTo(PersonalProfile, {
        foreignKey: 'userId',
        as: 'user'
    });
    
    HealthAndDrivingLicense.belongsTo(PersonalProfile, {
        foreignKey: 'userId',
        as: 'user'
    });
    
    Availability.belongsTo(PersonalProfile, {
        foreignKey: 'userId',
        as: 'user'
    });
};

export default setupAssociations;