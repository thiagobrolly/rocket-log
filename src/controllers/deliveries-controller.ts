import { authConfig } from '@/configs/auth';
import { prisma } from '@/database/prisma';
import { AppError } from '@/utils/AppError';
import { compare, hash } from 'bcrypt';
import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import { z } from 'zod';

class DeliveriesController {
  async create(request: Request, response: Response) {
    return response.json({ msg: 'ok' });
  }
}

export { DeliveriesController };
