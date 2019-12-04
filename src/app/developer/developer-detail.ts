import { Project } from '../project/project';

import { Developer } from './developer'

export class DeveloperDetail extends Developer{
  /**
    * The developer's projects
    */
   projects : Project[];

  /**
    * The developer's leading projects
    */
   leadingProjects : Project[];

}
