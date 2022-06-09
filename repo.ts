import {Project} from './project';

export class Repo{
  id: string;
  name:string;
  defaultBranch: string;
  remoteUrl: string;
  size:number;
  sshUrl:string;
  webUrl:string;
  project: Project[];
  content:string;
  constructor(){}
}
