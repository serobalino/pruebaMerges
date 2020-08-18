export class util {
  static validacionDNI (valor, dto){
    switch (dto.ndt1) {
      case 1:
        return valor.length === 10;
        break;
      default:
        return false;
    }
  }
}
