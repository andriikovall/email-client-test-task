import sanitizeHtmlUtil from "sanitize-html";

export const sanitizeHTML = (html: string) => {
  // leaving this as is, fine for the test task
  return sanitizeHtmlUtil(html);
};
