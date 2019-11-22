import { NgModule } from "@angular/core";
import { IonicModule } from '@ionic/angular';
import { TdsRoomComponent } from './tds-room/tds-room.component';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [IonicModule, CommonModule],
    declarations: [TdsRoomComponent],
    exports: [TdsRoomComponent]
})
export class ComponentsModule {}