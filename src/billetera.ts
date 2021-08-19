import { contains, descend, equals, identity, sort, sum } from "ramda";

const materialesReciclables = ["cartón", "papel"];

export class Billetera {
  constructor(public material: string, public billetes: number[]) {}

  saldoTotal(): number {
    return sum(this.billetes);
  }

  estaOrdenada(): boolean {
    return equals(this.billetes, sort(descend(identity), this.billetes));
  }

  esReciclable(): boolean {
    return contains(this.material, materialesReciclables);
  }
}
