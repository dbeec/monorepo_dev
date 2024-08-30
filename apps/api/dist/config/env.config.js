"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvConfigurations = void 0;
const EnvConfigurations = () => ({
    enviroment: process.env.NODE_ENV || 'dev',
    dbHost: process.env.DB_PORT || 'localhost',
    dbUser: process.env.DB_USER || 'root',
    dbPassword: process.env.DB_PASSWORD || '',
    dbPort: process.env.DB_PORT || 3306,
    dbName: process.env.DB_NAME || '',
});
exports.EnvConfigurations = EnvConfigurations;
//# sourceMappingURL=env.config.js.map