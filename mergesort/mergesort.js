function merge(array1, array2) {
    let mergedArray = [];
    let i = 0;
    let j = 0;
    let k = 0;
    let array1Size = array1.length - 1;
    let array2Size = array2.length - 1;
    while (i <= array1Size && j <= array2Size) {
        if (array1[i] < array2[j]) {
            mergedArray[k] = array1[i];
            i++;
            k++;
        } else {
            mergedArray[k] = array2[j];
            j++;
            k++;
        }
    }

    if (i <= array1Size) {
        while (i <= array1Size) {
            mergedArray[k] = array1[i];
            i++;
            k++;
        }
    } else if (j <= array2Size) {
        while (j <= array2Size) {
            mergedArray[k] = array2[j];
            j++;
            k++;
        }
    }
    return mergedArray;
}

function mergeSort(array) {
    if (array.length === 1) {
        return array;
    } else if (array.length > 1) {
        let first = 0;
        let last = array.length - 1;
        let mid = Math.trunc(first + last / 2);

        let firstHalf = array.slice(0, mid + 1);
        let secondHalf = array.slice(mid + 1, last + 1);
        
        firstHalf = mergeSort(firstHalf);
        secondHalf = mergeSort(secondHalf);
        array = merge(firstHalf, secondHalf);
        return array;
    }
}
