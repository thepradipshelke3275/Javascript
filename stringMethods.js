// 1. String Length, Indexing, charAt & at
const msg = "Hello Javascript";
console.log("Length:", msg.length);
console.log("Index 2 & charAt 6:", msg[2], msg.charAt(6));
console.log("at(-2):", msg.at(-2));

// 2. Concat & Repeat
console.log("Concat:", msg.concat("@"));
console.log("Repeat:", "Hello".repeat(3));

// 3. Searching in Strings
const searchMsg = "Hello this is Javascript";
console.log("First 'is' index:", searchMsg.indexOf("is"));
console.log("Last 'p' index:", searchMsg.lastIndexOf("p"));

console.log("Includes 'is':", searchMsg.includes("is"));
console.log("Starts with 'H':", searchMsg.startsWith("H"));
console.log("Ends with 'pt':", searchMsg.endsWith("pt"));

// 4. Trimming, Case Conversion & Slicing
const data = "   Hello World   ";
console.log("Trimmed:", data.trim());
console.log("Trimmed + UpperCase:", data.trim().toUpperCase());
console.log("LowerCase:", data.toLowerCase());
console.log("Slice (0, 5):", data.trim().slice(0, 5));

// 5. Split & Join (String <-> Array)
const fruits = "apple,banana,mango";
const arr = fruits.split(",");
console.log("Split into array:", arr);
console.log("Joined with ' | ':", arr.join(" | "));

// 6. Replace & ReplaceAll
console.log("replace first '-':", "a-b-c".replace("-", "+"));
console.log("replaceAll '-':", "a-b-c".replaceAll("-", "+"));

// 7. Padding
console.log("padStart:", "5".padStart(4, "*"));
console.log("padEnd:", "5".padEnd(4, "0"));