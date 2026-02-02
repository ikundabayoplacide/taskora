import { Response } from 'express';

interface PResponse<T> {
  status: number;
  success: boolean;
  message?: string;
  data: T;
  res: Response;
}

export const ResponseService = <T>({
  data,
  status = 200,
  message,
  success,
  res,
}: PResponse<T>): Response<PResponse<T>> => {
  if (status === 500 && !message) {
    message = 'Internal server error';
  }
  return res.status(status).json({
    data,
    message,
    success,
  });
};
