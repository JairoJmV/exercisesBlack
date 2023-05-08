function reverseString(str) {
    if (typeof str !== "string") {
      return str;
    }
  
    // you must add this line. rest of the code is fine
    if (!str.length) return str; // this terminates the recursion when it reaches the end
  
    return reverseString(str.substring(1)) + str.charAt(0);
  }
  
  console.log(reverseString("locu"));
  