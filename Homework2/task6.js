// 6) Task: Write a function that filters out all words from an array that contain special characters (e.g., @, #, $).
// Bonus: Return both the filtered array and the removed words. dont use filter metohds use it with for loop.



function filterWordsWithSpecialChars(arr) {
    const regex = /[!@#$%^&*(),.?":{}|<>]/;
    const withoutSpecial = [];
    const withSpecial =[];
    
    for (let i = 0; i < arr.length; i++) {
        if(!regex.test(arr[i])) {
            withoutSpecial.push(arr[i])
        } else {
            withSpecial.push(arr[i]);
        }
    }
    return [withoutSpecial,withSpecial];
}
