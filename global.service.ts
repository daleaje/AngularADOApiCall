import {injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GlobalService{

  public project = "SampleAPIProjectName";
  public defaultRepoUrl = 'http://dev.azure.com/***' + this.project + '/_apis/git/repositories?api-version=5.1';

  constructor(){}
}
