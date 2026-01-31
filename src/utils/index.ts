export function formatDateRange(startDate: string, endDate: string): string {
  const start = new Date(startDate);
  const startStr = start.toLocaleDateString("en-US", { month: "short", year: "numeric" });

  if (endDate === "present") {
    return `${startStr} — Present`;
  }

  const end = new Date(endDate);
  const endStr = end.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  return `${startStr} — ${endStr}`;
}
