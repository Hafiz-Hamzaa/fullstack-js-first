// 🟢 PART 1: Simple Objects (Creation + Access)

// Ek object banao jisme name, age, city ho.

// Dot notation se name print karo

// Square notation se city print karo

// Ek object diya hai —
// dynamically ek new property add karo.

// Ek object se property delete karo aur updated object print karo.

// Check karo ke kisi object me specific key exist karti hai ya nahi
// (without using in operator).

// 🟢 PART 2: Dot vs Square Notation (Access Logic)

// Ek object diya hai jisme key ka naam variable me stored hai.
// Us key ka value access karo.

// Ek object me space wali key ho ("full name").
// Usko access karo.

// Object ke andar nested object se value nikaalo.

// Ek function banao jo object aur key name le aur value return kare.

// 🟡 PART 3: Computed Properties

// Variables use karke object banao jisme keys dynamic hon.

// User se input le kar object ki key banao aur usme value assign karo.

// Ek object banao jisme keys loop ke andar generate ho rahi hon.

// 🟡 PART 4: Optional Chaining (?.)

// Ek deeply nested object diya hai —
// bina error ke value access karo.

// Check karo ke nested property exist karti hai ya nahi using optional chaining.

// Ek function banao jo object le aur optional chaining se safe output de.

// API-style response object diya hai —
// kisi missing field ko safely access karo.

// 🟡 PART 5: for...in Loop (Object Iteration)

// for...in loop se:

// Sab keys print karo

// Sab values print karo

// Ek object ke sab numeric values ka sum nikalo.

// Object ke andar se sirf string values print karo.

// Object me kitni properties hain count karo.

// Object ko array of strings me convert karo ("key : value" format).

// 🟠 PART 6: Object Destructuring

// Simple object se name aur age destructure karo.

// Destructuring ke sath variable ka naam change karo.

// Nested object se value destructure karo.

// Function parameter me object destructure karo.

// Default value ke sath destructuring karo.

// 🟠 PART 7: Object.keys(), Object.values(), Object.entries()

// Object ki sab keys ka array banao.

// Object ki sab values ka array banao.

// Object ke entries ko loop karke:

// Key aur value print karo

// Object ke sirf numeric values ka sum nikalo
// (using Object.values).

// Object.entries se new object banao jisme:

// sirf values string type ki hon

// 🔵 PART 8: Mixed / Real-World Object Problems

// Ek user object diya hai {name, email, isVerified}

// Check karo user verified hai ya nahi

// Ek product object diya hai {title, price, stock}

// Agar stock > 0 ho to "Available" warna "Out of Stock"

// Ek object of students diya hai
// { Ali: 80, Ahmed: 45, Sara: 90 }

// Sirf pass students ka new object banao

// Ek cart object diya hai {item1: 500, item2: 300}

// Total bill calculate karo

// Nested settings object diya hai —
// safely theme color access karo.

// 🔥 FINAL CHALLENGE (Objects + Logic)

// Ek object of users diya hai:

// {
//   user1: { name: "Ali", age: 20, active: true },
//   user2: { name: "Sara", age: 17, active: false },
//   user3: { name: "Ahmed", age: 25, active: true }
// }


// Tasks:

// Sirf active users ka new object banao

// Sirf 18+ users ka new object banao

// Users ke names ka array banao

// (Use: for...in, Object.entries, destructuring)