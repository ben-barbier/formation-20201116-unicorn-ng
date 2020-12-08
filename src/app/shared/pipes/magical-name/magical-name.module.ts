import { NgModule } from '@angular/core';
import { MagicalNamePipe } from './magical-name.pipe';

@NgModule({
    declarations: [MagicalNamePipe],
    exports: [MagicalNamePipe],
})
export class MagicalNameModule {}
