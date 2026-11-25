import { Request, Response, NextFunction } from "express";

export default function logger(request: Request, response: Response, next: NextFunction) {
    const startedAt = Date.now();

    response.on("finish", () => {
        if (request.path === "/api/health") {
            return;
        }

        const durationMilliseconds = Date.now() - startedAt;
        console.log(
            `${new Date().toISOString()} ${request.method} ${request.originalUrl} ${response.statusCode} ${durationMilliseconds}ms`
        );
    });

    next();
}
