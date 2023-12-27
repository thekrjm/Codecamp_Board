export const checkValidationFile = (file?: File): boolean => {
  if (typeof file === "undefined") {
    alert("파일형식이 없습니다.");
    return false;
  }

  if (file.size > 5 * 1024 * 1024) {
    alert("파일 크기가 너무 큽니다.");
    return false;
  }

  if (!file.type.includes("jpeg") && !file.type.includes("png")) {
    alert("파일형식을 확인해주세요.");
    return false;
  }

  return true;
};
