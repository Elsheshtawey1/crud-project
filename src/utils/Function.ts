
/**
 * 
 * @param txt 
 * @param max 
 * @returns 
 */
export function slicerText(txt: string, max: number = 60) {
  if (txt.length > max) {
    return `${txt.slice(0, max)}...`;

  }else{
    return txt
  }
}