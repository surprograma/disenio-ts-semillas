import { all, filter, head, sortBy } from "ramda";
import { Planta } from "./planta";

export class Parcela {
  plantas: Planta[] = [];
  cantidadPlantas = 0;

  constructor(
    public ancho: number,
    public largo: number,
    public horasSolPorDia: number
  ) {}

  superficie(): number {
    return this.ancho * this.largo;
  }

  cantidadMaximaPlantas(): number {
    return this.ancho > this.largo
      ? (this.ancho * this.largo) / 5
      : (this.ancho * this.largo) / 3 + this.largo;
  }

  plantar(planta: Planta): void {
    if (this.cantidadPlantas == this.cantidadMaximaPlantas()) {
      console.log("Ya no hay lugar en esta parcela");
    } else if (this.horasSolPorDia > planta.horasDeSolQueTolera() + 2) {
      console.log("No se puede plantar esto acá, se va a quemar");
    } else {
      this.plantas.push(planta);
      this.cantidadPlantas += 1;
    }
  }
}

export class Agricultora {
  ahorrosEnPesos = 20000;

  constructor(public parcelas: Parcela[]) {}

  // Suponemos que una parcela vale 5000 pesos
  comprarParcela(parcela: Parcela): void {
    if (this.ahorrosEnPesos >= 5000) {
      this.parcelas.push(parcela);
      this.ahorrosEnPesos -= 5000;
    }
  }

  parcelasSemilleras(): Parcela[] {
    return filter(
      (parcela) => all((planta) => planta.daSemillas(), parcela.plantas),
      this.parcelas
    );
  }

  plantarEstrategicamente(planta: Planta): void {
    const laElegida = head(
      sortBy(
        (parcela) => parcela.cantidadMaximaPlantas() - parcela.cantidadPlantas,
        this.parcelas
      )
    );

    laElegida!.plantas.push(planta);
  }
}
