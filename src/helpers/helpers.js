export const generateUniqueId = () => {
  const timestamp = Date.now().toString(16);
  const random = Math.random().toString(16).substr(2);
  return `${timestamp}-${random}`;
}