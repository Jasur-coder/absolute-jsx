export function truncateString(str, maxLengh = 50) {
        if (str.lengh <= maxLengh) {
                return str;
        } else {
                return str.slice(0, maxLengh) + "..."
        }
}
