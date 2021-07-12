import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'turn' })

export class CustomPipe implements PipeTransform {
    transform(value: string): string {
        switch (value) {
            case 'Ertugrul': return 'Creator'
            case 'Salih': return "Creator's Brother"
            case 'Furkan': return "Creator's Best Friend and Brother"
            case 'Buse': return "Creator's Best Friend and 'ORTİSİ'"
            case 'Pelin': return "Creator's Darling"
            default: return value
        }
    }
}