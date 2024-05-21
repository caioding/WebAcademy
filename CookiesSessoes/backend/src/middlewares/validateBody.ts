import { Schema } from "joi";
import { NextFunction } from "express";
import { Response } from "express";
import { Request } from "express";

export const validateBody = (schema: Schema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, {
      abortEarly: false,
    });
    if (error) return res.status(400).json(error.details);
  };
};

export default validateBody;
