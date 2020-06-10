export const extractFieldErrors = (errorMessages: string[], key: string) =>
  errorMessages.filter((message) => message.startsWith(key));

export const extractNonFieldErrors = (errorMessages: string[], keys: string[]) =>
  errorMessages.filter((message) => !keys.find((key) => message.startsWith(key)));
