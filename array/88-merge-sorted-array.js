function merge(nums1, m, nums2, n) {
    while (m > 0 && n > 0) {
        if (nums1[m - 1] < nums2[n - 1]) {
            nums1[m - 1 + n] = nums2[n - 1]
            n--
        } else {
            swap(nums1, m - 1, m - 1 + n)
            m--
        }
    }
    if (m === 0 && n > 0) {
        for (let i = 0; i < n; i++) {
            nums1[i] = nums2[i]
        }
    }
}

function swap(array, i, j) {
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp
}
