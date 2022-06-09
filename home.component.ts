import {Component, ViewChild} from '@angular/core';
import {GlobalService} from '../shared/services/global.service';
import {RepoService} from '../shared/services/repo.service';
import {CalAngularService} from '@***/cal-angular'; //this is internal library sample

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [TreeViewService]
})

export class HomeComponent{
// initialize all the vars here


@ViewChild('navTab') navTab;
loadingIndicator = false;

//CTOR Dependency Injection for treeviewservice
constructor(
  private globalService: GlobalService,
  private repoService: RepoService,
  private authService: CalAngularService,
){

}

ngOnInit(){
  this.initialCall();
}

//initial class
initialCall(){
  // Bearer token 
  let scopes = this.globalService.scope;
  this.loadingIndicator = true;
  
  this.authService.getAADToken(scopes)
    .then((token) => {
      let tokenValue: any = token;
      this.token = tokenValue.accessToken;
      this.callGetRepositories();
      this.loadingIndicator=false;
    })
    .catch(error => {
      console.log(`an error is happening ${error}`)
    })
}

// method to get all the repository list from specified project
private callGetRepositories(){
  this.loadingIndicator=true;
  this.repoService.getRepositories(this.globalService.defaultRepoUrl, this.token)
    .pipe(first())
    .subscribe(
      response => {
        this.loadingIndicator=false;
        if (response === null || response === undefined){
          this.arRepos = [];
        }
        this.arRepos = response.value;
        
        // to sort repo otions a-z
        this.arRepos.sort(function(a,b){
          if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
          else if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
          return 0;
        })
        
        console.log(this.arRepos)
        
      },
      error => {
        this.loadingIndicator=false;
        console.log(error);
      }
    );
}





}
