export const Sum = (value: number): number => {
return (value + value)
}

export const Mult = (value:number,mult:number):number | string => {
    if(mult === 2 || mult === 3){
        return value * mult
    }else{
        return 'Unaccpeted multiplier'
    } 
}