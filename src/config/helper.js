export function timeAgo(timestamp) {
  const now = new Date();
  const past = new Date(timestamp);

  const diffInSeconds = Math.floor((now - past) / 1000);

  if (diffInSeconds < 5) {
    return "Just now";
  }

  const timeUnits = [
    { name: "year", seconds: 60 * 60 * 24 * 365 },
    { name: "month", seconds: 60 * 60 * 24 * 30 },
    { name: "week", seconds: 60 * 60 * 24 * 7 },
    { name: "day", seconds: 60 * 60 * 24 },
    { name: "hour", seconds: 60 * 60 },
    { name: "minute", seconds: 60 },
    { name: "second", seconds: 1 },
  ];

  for (const unit of timeUnits) {
    const value = Math.floor(diffInSeconds / unit.seconds);

    if (value >= 1) {
      return `${value} ${unit.name}${value > 1 ? "s" : ""} ago`;
    }
  }

  return "Just now";
}