class PhoneDirectory {
      constructor(n) {
           this.phoneNumbers= [] 
           for(let i=0; i<n ;i++) {
               this.phoneNumbers.push(i)
           }
      }

      get() {
          if (this.phoneNumbers.length === 0)  return -1 
          return this.phoneNumbers.shift()
      }

      check(num) {
           return this.phoneNumbers.includes(num)
      }

      release(num) {
          if (!this.phoneNumbers.includes(num)) {
               this.phoneNumbers.push(num)
          }
      }
}

 let  directory = new PhoneDirectory(3);

// It can return any available phone number. Here we assume it returns 0.
console.log(directory.get())

// Assume it returns 1.
console.log(directory.get())

// The number 2 is available, so return true.
console.log(directory.check(2))

// // It returns 2, the only number that is left.
console.log(directory.get())

// The number 2 is no longer available, so return false.
console.log(directory.check(2))

 directory.release(2);
console.log(directory.check(2))
