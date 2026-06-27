import { Request, Response, NextFunction } from 'express';

const API_KEY = process.env.API_KEY ?? 'graphone-dev-key';

export function apiKeyAuth(req: Request, res: Response, next: NextFunction): void {
  const key = req.headers['x-api-key'];
  if (!key || key !== API_KEY) {
    res.status(401).json({ error: { code: 'UNAUTHORIZED', message: 'Valid X-API-Key header required for write operations.' } });
    return;
  }
  next();
}
