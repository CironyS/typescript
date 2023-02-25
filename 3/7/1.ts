// class Axios {
//   static site: string = "houdunren.com"
// }
// console.log(Axios.site);

class Axios {
  private static site: string = "houdunren.com1"
  public static getSite() {
    return Axios.site
  }
}
console.log(Axios.getSite());