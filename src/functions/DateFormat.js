export default function convertTimestampToDate(timestamp) {
    const date = new Date(Number(timestamp));
    const day = date.getDate();
    const month = date.getMonth() + 1; // Month starts from 0, so add 1
    const year = date.getFullYear();

    // Format the date components with leading zeros if necessary
    const formattedDay = (day < 10 ? '0' : '') + day;
    const formattedMonth = (month < 10 ? '0' : '') + month;

    // Concatenate the date components with dashes
    const formattedDate = `${formattedDay}-${formattedMonth}-${year}`;

    return formattedDate;
}