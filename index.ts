type DatePropertyNames = keyof Date;

/**
 * Type Queries
 */
console.log("Type Queries");
class Fruit {
  constructor(
    public readonly name: string,
    public readonly mass: number,
    public readonly color: string
  ) {}
  static createBanana() {
    return new Fruit("banana", 108, "yellow");
  }
}

const MyFruit = Fruit;
console.log(MyFruit);

const banana = Fruit.createBanana();
console.log(banana);

/**
 * Conditional Types
 */
console.log("Conditional Types");
class Grill {
  startGas() {}
  stopGas() {}
}
class Oven {
  setTemperature(degrees: number) {}
}

type CookingDevice<T> = T extends "grill" ? Grill : Oven;

let device1: CookingDevice<"grill">;
let device2: CookingDevice<"oven">;

/**
 * Extract and Exclude
 */
console.log("Extract and Exclude");
type FavoriteColors =
  | "dark sienna"
  | "van dyke brown"
  | "yellow ochre"
  | "sap green"
  | "titanium white"
  | "phthalo green"
  | "prussian blue"
  | "cadium yellow"
  | [number, number, number]
  | { red: number; green: number; blue: number };

type StringColors = Extract<FavoriteColors, string>;
type ObjectColors = Extract<FavoriteColors, { red: number }>;
type TupleColors = Extract<FavoriteColors, [number, number, number]>;
type NonStringColors = Exclude<FavoriteColors, string>;

/**
 * Sort of Advanced Mapping
 */


