export const formatNum = (x: number) => {
    if(!x) return 0;
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}