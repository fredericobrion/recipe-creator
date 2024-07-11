export type ServiceResponse<T> = {
  status: 'SUCCESSFUL' | 'FAILED' | 'BAD REQUEST';
  data: { message: string } | T;
}