function solution(myString, pat) {
   // Convert both strings to lowercase to ignore case
   myString = myString.toLowerCase();
   pat = pat.toLowerCase();
   
   // Check if the pattern exists in the string
   return myString.includes(pat) ? 1 : 0;
}