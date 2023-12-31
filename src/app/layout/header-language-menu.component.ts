import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  Injector,
} from "@angular/core";
import { AppComponentBase } from "@shared/app-component-base";
import {
  UserServiceProxy,
  ChangeUserLanguageDto,
} from "@shared/service-proxies/service-proxies";
import { filter as _filter } from "lodash-es";

@Component({
  selector: "header-language-menu",
  templateUrl: "./header-language-menu.component.html",
  styleUrls: ["./header-language-menu.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderLanguageMenuComponent
  extends AppComponentBase
  implements OnInit
{
  languages: abp.localization.ILanguageInfo[];
  currentLanguage: abp.localization.ILanguageInfo;
  ListUser: any;

  constructor(injector: Injector, private _userService: UserServiceProxy) {
    super(injector);
  }

  shownLoginName = "";
  ngOnInit() {
    this.languages = _filter(this.localization.languages, (l) => !l.isDisabled);
    this.currentLanguage = this.localization.currentLanguage;
    this.shownLoginName = this.appSession.getShownLoginName();
  }

  changeLanguage(languageName: string): void {
    const input = new ChangeUserLanguageDto();
    input.languageName = languageName;

    this._userService.changeLanguage(input).subscribe(() => {
      abp.utils.setCookieValue(
        "Abp.Localization.CultureName",
        languageName,
        new Date(new Date().getTime() + 5 * 365 * 86400000), // 5 year
        abp.appPath
      );

      this._userService
        .getAll(undefined, undefined, undefined, undefined)
        .subscribe((res) => {
          this.ListUser = res;
          console.log("a", this.ListUser);
        });

      window.location.reload();
    });
  }
}
