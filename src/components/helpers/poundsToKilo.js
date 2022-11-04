function poundsToKilo(weightInPounds){
    return Math.round(weightInPounds.replaceAll(" lb", "")* 0.453592);
}
export default poundsToKilo;
