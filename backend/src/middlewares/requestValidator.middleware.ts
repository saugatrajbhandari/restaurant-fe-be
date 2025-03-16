import { plainToClass } from "class-transformer";
import { ValidationError, validate } from "class-validator";
import { NextFunction, Request, Response } from "express";

export class RequestValidator {
  static validate = (classInstance: any) => {
    return async (req: Request, res: Response, next: NextFunction) => {
      const convertedObject = plainToClass(classInstance, req.body);

      await validate(convertedObject).then((errors: ValidationError[]) => {
        if (errors.length > 0) {
          const rawErrors: string[] = [];

          for (const errorItem of errors) {
            // for nested

            if (errorItem.children) {
              for (const i of errorItem.children) {
                rawErrors.push(...Object.values(i.constraints ?? ""));
              }
            }

            // for not nested
            rawErrors.push(...Object.values(errorItem.constraints ?? ""));
          }
          next(res.status(400).json({ errors: rawErrors[0] }));
        }
      });
      next();
    };
  };
}
