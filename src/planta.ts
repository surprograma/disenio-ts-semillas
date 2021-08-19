import { any } from "ramda";
import { Parcela } from "./parcela";

export abstract class Planta {
  constructor(public anioObtencionSemilla: number, public altura: number) {}

  esFuerte(): boolean {
    return this.horasDeSolQueTolera() > 10;
  }

  parcelaTieneComplicaciones(parcela: Parcela): boolean {
    return any(
      (planta) => planta.horasDeSolQueTolera() < parcela.horasSolPorDia,
      parcela.plantas
    );
  }

  abstract horasDeSolQueTolera(): number;
  abstract daSemillas(): boolean;
}

export class Menta extends Planta {
  constructor(anioObtencionSemilla: number, altura: number) {
    super(anioObtencionSemilla, altura);
  }

  override horasDeSolQueTolera(): number {
    return 6;
  }
  override daSemillas(): boolean {
    return this.esFuerte() || this.altura > 0.4;
  }
}

export class Soja extends Planta {
  constructor(
    anioObtencionSemilla: number,
    altura: number,
    public esTransgenica: boolean
  ) {
    super(anioObtencionSemilla, altura);
  }

  override horasDeSolQueTolera(): number {
    const horasBase = this.altura < 0.5 ? 6 : this.altura < 1 ? 7 : 9;
    return this.esTransgenica ? horasBase * 2 : horasBase;
  }

  override daSemillas(): boolean {
    if (this.esTransgenica) {
      return false;
    }

    return (
      this.esFuerte() || (this.anioObtencionSemilla > 2007 && this.altura > 1)
    );
  }
}
