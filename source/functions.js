export function takeInput(previousValue,input){
    if(previousValue.length == 12)
        return previousValue;
    return previousValue+input;
}
export function removeInput(previousValue){
    if(previousValue.length == 0)
        return '';
    return previousValue.slice(0,-1);
}