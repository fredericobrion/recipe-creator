export type ServiceResponse<T> = {
  status: 'SUCCESSFUL' | 'FAILED';
  data: { message: string } | T;
}