console.log("Something works")
// // Get keys of type T whose values are assignable to type U
// type FilteredKeys<T, U> = {
//     [P in keyof T]: T[P] extends U ? P : never
//   }[keyof T] &
//     keyof T
   
//   /**
//    * get a subset of Document, consisting only of methods
//    * returning an Element (e.g., querySelector) or an
//    * Element[] (e.g., querySelectorAll)
//    */
//   type ValueFilteredDoc = Pick<
//     Document,
//     FilteredKeys<
//       Document,
//       (...args: any[]) => Element | Element[]
//     >
//   >
