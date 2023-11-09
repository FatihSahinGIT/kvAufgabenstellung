import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUsers'
})
export class FilternamePipe implements PipeTransform {
  transform(users: any[], filterText: string): any[] {
    if (!filterText) {
      return users; // Wenn kein Filtertext vorhanden ist, gib alle Benutzer zurück
    }

    filterText = filterText.toLowerCase();

    return users.filter(user => user.name.toLowerCase().includes(filterText));
  }
}
