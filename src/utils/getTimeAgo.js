export function getTimeAgo(dateString) {
    const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

    const now = new Date();
    const date = new Date(dateString);
    const diff = (date - now) / 1000;

    const minutes = diff / 60;
    const hours = minutes / 60;
    const days = hours / 24;

    if (Math.abs(minutes) < 60)
        return rtf.format(Math.round(minutes), "minute");

    if (Math.abs(hours) < 24)
        return rtf.format(Math.round(hours), "hour");

    return rtf.format(Math.round(days), "day");
}