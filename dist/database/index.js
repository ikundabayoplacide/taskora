"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeDatabase = exports.Availability = exports.sequelize = void 0;
const db_1 = require("../config/db");
Object.defineProperty(exports, "sequelize", { enumerable: true, get: function () { return db_1.sequelize; } });
const availability_1 = __importDefault(require("./models/availability"));
exports.Availability = availability_1.default;
const initializeDatabase = async () => {
    try {
        await db_1.sequelize.sync({ force: false });
        console.log('✅ Database tables synchronized');
    }
    catch (error) {
        console.error('❌ Database sync failed:', error);
    }
};
exports.initializeDatabase = initializeDatabase;
