# Taskora API Documentation

## Overview
Taskora is a comprehensive user profile management system built with Node.js, TypeScript, Express.js, and PostgreSQL. The application provides a complete REST API for managing user profiles, locations, skills, education, health records, and availability information.

## 🏗️ Architecture

### Technology Stack
- **Backend**: Node.js with TypeScript
- **Framework**: Express.js
- **Database**: PostgreSQL
- **ORM**: Sequelize
- **Documentation**: Swagger/OpenAPI
- **Validation**: Joi
- **Environment**: dotenv

### Project Structure
```
src/
├── app.ts                 # Express app configuration
├── server.ts             # Server entry point
├── config/
│   ├── db.ts            # Database configuration
│   └── swagger.ts       # Swagger configuration
├── database/
│   ├── index.ts         # Database initialization
│   ├── associations.ts  # Model relationships
│   └── models/          # Sequelize models
├── controllers/         # Request handlers
├── services/           # Business logic
├── routes/             # API routes
├── types/              # TypeScript interfaces
└── utils/              # Utility functions
```

## 📊 Database Models

### 1. Personal Profile
**File**: `src/database/models/personalProfile.ts`
**Purpose**: Main user profile information

**Fields**:
- `id` (UUID, Primary Key)
- `userId` (UUID, Required)
- `fullName` (String, Required)
- `phoneNumber` (String, Required)
- `email` (String, Required)
- `nationality` (String, Required)
- `nationalId` (String, Required)
- `gender` (String, Required)
- `age` (Integer, Required)
- `photo` (String, Required)
- `occupation` (String, Required)
- `nationalIdPhoto` (String, Required)
- `otherPersonUserId` (Integer, Optional)

### 2. Other Person Profile
**File**: `src/database/models/otherPersonProfile.ts`
**Purpose**: Emergency contacts and related persons

**Fields**:
- `userId` (UUID, Required)
- `otherPersonalName` (String, Required)
- `otherPersonalId` (String, Required)
- `otherPersonalPhone` (String, Required)
- `otherPersonalEmail` (String, Required)
- `otherPersonalNationality` (String, Required)
- `otherPersonalRelation` (String, Required)
- `otherPersonalPhoto` (String, Required)
- `otherPersonalAge` (Integer, Required)
- `otherPersonalGender` (String, Required)
- `otherPersonalOccupation` (String, Required)
- `otherPersonalEmergency` (Boolean, Required)
- `otherPersonalNotes` (String, Required)
- `otherPersonalIdPhoto` (String, Required)

### 3. Location
**File**: `src/database/models/location.ts`
**Purpose**: User geographical information

**Fields**:
- `id` (UUID, Primary Key)
- `userId` (UUID, Required)
- `country` (String, Required)
- `province` (String, Required)
- `district` (String, Required)
- `sector` (String, Required)
- `cell` (String, Required)
- `village` (String, Required)
- `latitude` (Float, Required)
- `longitude` (Float, Required)

### 4. Skills and Education
**File**: `src/database/models/skillsAndEducation.ts`
**Purpose**: User skills, education, and certifications

**Fields**:
- `id` (UUID, Primary Key)
- `userId` (UUID, Required)
- `skills` (Array of Strings, Optional)
- `skillsUrl` (Array of Strings, Optional)
- `skillsLevel` (Array of Strings, Optional)
- `skillsExperience` (Array of Strings, Optional)
- `educationYear` (Array of Strings, Optional)
- `education` (Array of Strings, Optional)
- `educationLevel` (String, Required)
- `experienceLevel` (String, Required)
- `educationUrl` (Array of Strings, Optional)
- `experienceYears` (Array of Strings, Optional)
- `certifications` (Array of Strings, Optional)
- `certificationsUrl` (Array of Strings, Optional)
- `status` (String, Optional)

### 5. Health and Driving License
**File**: `src/database/models/healthAndDrivingLicense.ts`
**Purpose**: Health status and driving license information

**Fields**:
- `id` (UUID, Primary Key)
- `userId` (UUID, Required)
- `healthStatus` (String, Optional)
- `healthConditions` (Array of Strings, Optional)
- `healthNotes` (String, Optional)
- `drivingLicense` (Boolean, Optional)
- `drivingLicenseType` (Array of Strings, Optional)
- `drivingLicenseUrl` (Array of Strings, Optional)
- `drivingExperienceYears` (String, Optional)
- `drivingNotes` (String, Optional)

### 6. Availability
**File**: `src/database/models/availability.ts`
**Purpose**: User availability and scheduling

**Fields**:
- `id` (UUID, Primary Key)
- `userId` (UUID, Required)
- `availabilityStatus` (String, Required)
- `availabilityDetails` (String, Optional)
- `availabilityNotes` (String, Optional)
- `availabilityDate` (Date, Required)
- `availabilityTime` (String, Required)
- `noticePeriod` (String, Optional)

## 🔗 Database Relationships

### Associations (src/database/associations.ts)
- **PersonalProfile** → **OtherPersonProfile** (One-to-Many)
- **PersonalProfile** → **Location** (One-to-One)
- **PersonalProfile** → **SkillsAndEducation** (One-to-One)
- **PersonalProfile** → **HealthAndDrivingLicense** (One-to-One)
- **PersonalProfile** → **Availability** (One-to-Many)

## 🎯 API Endpoints

### 1. User Profile (`/api/profile`)
- `POST /` - Create user profile
- `GET /` - Get all user profiles
- `GET /:userId` - Get user profile by ID
- `PUT /:userId` - Update user profile
- `DELETE /:userId` - Delete user profile

### 2. Other User Profile (`/api/other-profile`)
- `POST /` - Create other user profile
- `GET /` - Get all other user profiles
- `GET /:userId` - Get other user profile by ID
- `PUT /:userId` - Update other user profile
- `DELETE /:userId` - Delete other user profile

### 3. Location (`/api/location`)
- `POST /` - Create location
- `GET /` - Get all locations
- `GET /:userId` - Get location by user ID
- `PUT /:userId` - Update location
- `DELETE /:userId` - Delete location

### 4. Skills & Education (`/api/skills-education`)
- `POST /` - Create skills and education record
- `GET /` - Get all skills and education records
- `GET /:userId` - Get skills and education by user ID
- `PUT /:userId` - Update skills and education
- `DELETE /:userId` - Delete skills and education record

### 5. Health & Driving License (`/api/health-driving`)
- `POST /` - Create health and driving license record
- `GET /` - Get all health and driving license records
- `GET /:userId` - Get health and driving license by user ID
- `PUT /:userId` - Update health and driving license
- `DELETE /:userId` - Delete health and driving license record

### 6. Availability (`/api/availability`)
- `POST /` - Create availability
- `GET /` - Get all availabilities
- `GET /:userId` - Get availability by user ID
- `PUT /:userId` - Update availability
- `DELETE /:userId` - Delete availability

## 🏛️ Architecture Patterns

### 1. MVC Pattern
- **Models**: Database models using Sequelize ORM
- **Views**: JSON API responses
- **Controllers**: Request handling and response formatting

### 2. Service Layer Pattern
- **Controllers**: Handle HTTP requests/responses
- **Services**: Contain business logic and database operations
- **Models**: Define data structure and relationships

### 3. Repository Pattern
- Services act as repositories for data access
- Abstraction layer between controllers and database
- Consistent CRUD operations across all entities

## 🔧 Key Features

### 1. Type Safety
- Full TypeScript implementation
- Interface definitions for all data structures
- Compile-time error checking

### 2. Database Management
- Sequelize ORM for database operations
- Model associations and relationships
- Migration support
- Environment-based configuration

### 3. API Documentation
- Swagger/OpenAPI integration
- Interactive API documentation
- Request/response schemas
- Example data for testing

### 4. Error Handling
- Consistent error response format
- HTTP status codes
- Detailed error messages
- Try-catch blocks in all controllers

### 5. Environment Configuration
- Development and production environments
- Environment variables for sensitive data
- Database connection management

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- PostgreSQL
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Run database migrations
npm run db:migrate

# Start development server
npm run dev
```

### Environment Variables
```env
# Database Configuration
DB_NAME=taskora_db
DB_USER=your_username
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432

# Server Configuration
PORT=3000
ENV=DEV
```

## 📚 API Documentation
Access the interactive API documentation at:
```
http://localhost:3000/api-docs
```

## 🧪 Testing
The Swagger UI provides a complete testing interface where you can:
- View all available endpoints
- See request/response schemas
- Test APIs with sample data
- Validate responses

## 🔒 Security Features
- Input validation using Joi
- SQL injection prevention via Sequelize
- Environment variable protection
- CORS configuration

## 📈 Scalability Considerations
- Modular architecture for easy extension
- Service layer separation for business logic
- Database indexing on foreign keys
- Environment-based configuration

## 🛠️ Development Workflow
1. Define TypeScript interfaces in `/types`
2. Create Sequelize models in `/database/models`
3. Implement services in `/services`
4. Create controllers in `/controllers`
5. Define routes with Swagger documentation in `/routes`
6. Test using Swagger UI

This architecture provides a solid foundation for a scalable, maintainable, and well-documented API system.