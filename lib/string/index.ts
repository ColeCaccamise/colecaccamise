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

export function formatTimeAgo(timestamp: string) {
  if (!timestamp) {
    return "";
  }

  try {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 3600) {
      return "just now";
    } else if (diffInSeconds < 86400) {
      return "today";
    } else if (diffInSeconds < 2592000) {
      const days = Math.floor(diffInSeconds / 86400);
      return `${days}d ago`;
    } else if (diffInSeconds < 31536000) {
      const months = Math.floor(diffInSeconds / 2592000);
      return `${months}mo ago`;
    } else {
      const years = Math.floor(diffInSeconds / 31536000);
      return `${years}yr ago`;
    }
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
