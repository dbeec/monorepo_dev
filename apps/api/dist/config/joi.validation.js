"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JoiValidationSchema = void 0;
const Joi = require("joi");
exports.JoiValidationSchema = Joi.object({
    PORT: Joi.number().default(3005),
    DB_HOST: Joi.required(),
    DB_PORT: Joi.required(),
    DB_USER: Joi.required(),
    DB_PASSWORD: Joi.required(),
    DB_NAME: Joi.required(),
});
//# sourceMappingURL=joi.validation.js.map