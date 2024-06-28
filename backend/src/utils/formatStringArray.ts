export default function formatStringArray(arr: string[]): string {
  const formattedItems = arr.slice(0, arr.length - 1).join(', ');
    return `${formattedItems} e ${arr[arr.length - 1]}.`;
}