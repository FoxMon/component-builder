/**
 * 정말 단순히 유니크한 UID를 만들기 위한 메소드
 *
 * @returns {string}
 */
export const uidGenerator = (): string => {
  return `component-${(
    Date.now().toString(36) +
    ":" +
    Math.random().toString(36).substring(2) +
    ":" +
    Math.random().toString(36).substring(2)
  ).toUpperCase()}`;
};
