import { Schema } from "joi"
import { NextFunction } from "express"
import { Response } from "express" // Add missing import
import { Request } from "express" // Add missing import

const validateBody = (schema: Schema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req.body, {
            abortEarly : false
        })
        if (error) return res.status(400).json(error.details) // Fix the status code
        }
    }