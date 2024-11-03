export function formatDate(timestamp: string) {
  if (!timestamp) {
    return "";
  }

  try {
    const date = new Date(timestamp);

    if (isNaN(date.getTime())) {
      throw new Error("Invalid date");
    }

    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(date);
  } catch (error) {
    console.error("Invalid timestamp format:", timestamp);
    return timestamp;
  }
}

export function capitalize(str: string): string {
  if (str.length === 0) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}
