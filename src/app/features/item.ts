export class Item {
  id!: number;
  index!: number;
  value1!: string;
  value2!: string;
  value3!: string;

  constructor(id: number, index: number, value1: string, value2: string, value3: string) {
    this.id = id;
    this.index = index;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }
}
