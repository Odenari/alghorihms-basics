const arr = [1, 100, 1000, 23, 4, 5, 65, 66];
export default function bubble_sort(arr: number[]): void {
    for (let i = 0; i < arr.length - 1; ++i) {
        for (let j = 0; j < arr.length - i; ++j) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
