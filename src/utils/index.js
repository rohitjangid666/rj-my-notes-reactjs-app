export const generateRandomId = (length = 20) => Array.from(Array(length), () => Math.floor(Math.random() * 36).toString(36)).join('');
