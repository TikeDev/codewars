function toFreud(string) {
  if (!string) return "";
  return "sex ".repeat(string.split(" ").length).trim();
}