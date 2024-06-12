
export type TMeta = {
  total: number,
  page: number,
  limit: number
}

export type globalResponse<T> = {
  statusCode: number;
  message: string;
  data: T;
  meta?: TMeta
};



export type globalErrorResponse = {
  statusCode: number,
  success: boolean,
  message: string,
  errorDetails: any
}

export type AxiosResponseType<T> =
  | { data: globalResponse<T>; err?: null }
  | { data?: null; err: globalErrorResponse };
