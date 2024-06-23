export default function dateParser(dateString: string) {
    if (!dateString) return;
    const arr = dateString.split("-");
    const monthArr = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
    ];

    const monthIndex = parseInt(arr[1]) - 1;
    const month = monthArr[monthIndex];
    const year = arr[0];
    const res = month + ', ' + year;

    return res;
}