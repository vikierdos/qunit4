function egyenlet(a, b, c) {
  if (a == 0 && b == 0 && c == 0) {
    return "Végtelen";
  }
  else if ((b ** 2 - 4 * a * c) < 0 || (a === 0 && b === 0 && c != 0)) {
    return "Nincs";
  }
  else if((b ** 2 - 4 * a * c) == 0 && a != 0){
    if((-b+Math.sqrt(b**2-4*a*c))/2*a){
        return "x="+ ((-b+Math.sqrt(b**2-4*a*c))/2*a);
    }
    else if((-b-Math.sqrt(b**2-4*a*c))/2*a){
        return "x="+ ((-b-Math.sqrt(b**2-4*a*c))/2*a);
    }
  }
  else{

      return "x1=" + ((-b+Math.sqrt(b**2-4*a*c))/2*a) + "\nx2="+ ((-b-Math.sqrt(b**2-4*a*c))/2*a);
  }
}
