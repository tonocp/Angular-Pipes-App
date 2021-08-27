import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {

    transform( value: string, args?: boolean ):string {
        return ( args ) ? value.toUpperCase() : value.toLowerCase();
    }

}