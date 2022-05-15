import {Component} from '@angular/core';
import {GlobalConstants} from '@app/helpers';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  public freePikUrl = GlobalConstants.freepikUrl;
  public githubUrl = GlobalConstants.githubUrl;

}
