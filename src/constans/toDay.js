export const getToday = () => {
    var Today = new Date();
    var [year, month, date] = [Today.getFullYear(), Today.getMonth(), Today.getDate()];
    return `${year}-${month + 1}-${date}`;
}