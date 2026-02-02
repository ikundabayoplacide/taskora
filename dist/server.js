"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("./config/db");
const database_1 = require("./database");
const app_1 = __importDefault(require("./app"));
const PORT = process.env.PORT || 5000;
const startServer = async () => {
    const isConnected = await (0, db_1.connectDB)();
    if (!isConnected) {
        console.error('❌ Server startup failed: Database connection required');
        process.exit(1);
    }
    await (0, database_1.initializeDatabase)();
    app_1.default.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT}`);
    });
};
startServer();
