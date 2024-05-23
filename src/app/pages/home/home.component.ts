import { Component } from '@angular/core';
import { MenuTitleComponent } from "../../components/menu-title/menu-title.component";
import { BigCardComponent } from "../../components/big-card/big-card.component";
import { SmallCardComponent } from "../../components/small-card/small-card.component";
import { FooterComponent } from '../../components/footer/footer.component';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css','./home.responsive.component.css'],
    imports: [MenuBarComponent, MenuTitleComponent, BigCardComponent, SmallCardComponent, FooterComponent]
})
export class HomeComponent {

}
