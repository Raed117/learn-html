function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let value = arr[i];
        let j = i - 1;

       while (j >= 0 && arr[j] > value ) {
        arr [j + 1] = arr[j];

       }
       arr[j + 1 ] = value;
    }
    return arr ;
    
}