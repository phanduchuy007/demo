export const dayCaculator = (startDay, endDay) => {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    // Discard the time and time-zone information.
    const utc1 = Date.UTC(startDay.getFullYear(), startDay.getMonth(), startDay.getDate());
    const utc2 = Date.UTC(endDay.getFullYear(), endDay.getMonth(), endDay.getDate());
    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}