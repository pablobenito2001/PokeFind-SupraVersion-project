export default function SelectColor(stat: number){
    if(stat <= 40) return '#c93b38'
    else if(stat <= 80) return '#c96638'
    else if(stat <= 130) return '#38c957'
    else if(stat <= 250) return '#38c9c2';
}