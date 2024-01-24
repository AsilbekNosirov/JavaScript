// Map method

const dates = ["2023-12-23", "2022-12-13", "2024-12-25"];
const formattedDates = dates.map(formatDates);

console.log(formattedDates);

function formatDates(element) {
    const parts = element.split("-");
    return `${parts[1]}.${parts[2]}.${parts[1]}`;
}
