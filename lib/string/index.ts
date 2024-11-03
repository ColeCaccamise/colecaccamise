export function formatDate(timestamp: string) {
  if (!timestamp) {
    return "";
  }

  try {
    // Parse the timestamp string to a Date object in UTC
    const date = new Date(timestamp + "T13:00:00Z");

    // Create a formatter for EST timezone
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/New_York",
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    if (isNaN(date.getTime())) {
      throw new Error("Invalid date");
    }

    // Format the date in EST
    return formatter.format(date);
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
