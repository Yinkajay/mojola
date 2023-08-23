import { DateTime } from 'luxon';

export function formatDate(date) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    const luxonDate = DateTime.fromJSDate(date).setZone('Africa/Lagos');
    const dayOfWeek = daysOfWeek[luxonDate.weekday];
    const day = luxonDate.day;
    const month = months[luxonDate.month - 1];
    const year = luxonDate.year;
    const time = luxonDate.toFormat('hh:mm a');
    
    const ordinalSuffix = getOrdinalSuffix(day);
    
    return `${dayOfWeek}, ${day}${ordinalSuffix} ${month}, ${year} ${time}`;
}

function getOrdinalSuffix(day) {
    if (day >= 11 && day <= 13) {
        return 'th';
    }
    switch (day % 10) {
        case 1:
            return 'st';
        case 2:
            return 'nd';
        case 3:
            return 'rd';
        default:
            return 'th';
    }
}

const now = new Date();
console.log(formatDate(now)); // Output: Monday, 25th April, 2023 10:30 AM
