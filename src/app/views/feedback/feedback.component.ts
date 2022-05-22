import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {GlobalConstants} from '@app/helpers';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {

  public githubUrl = GlobalConstants.githubUrl;

  constructor(
    private _router: Router
  ) {
  }

  public async navigate(): Promise<void> {
    await this._router.navigate(['/']);
  }

}
