import { prisma } from '@/database/prisma';
import { AppError } from '@/utils/AppError';
import { hash } from 'bcrypt';
import { Request, Response } from 'express';
import { z } from 'zod';

class SessionsController {
  create(request: Request, response: Response) {
    return response.json({ message: 'ok' });
  }
}

export { SessionsController };
