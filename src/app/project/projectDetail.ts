import { Project } from "./project";
import { Iteration } from "./iteration";
import { Developer } from "../developer/developer";
//import {InternalSystems} from '../internalsystems/internalsystems';
export class ProjectDetail extends Project {
  
  /**
   * List of iterations from the project
   */
  iterations: Iteration[];

  /**
   * List of developers assigned to the project
   */
  developers: Developer[];

  /**
   * List of internal systems given to the project
   */
  //internalSystems: InternalSystems[];

  /**
   * Requests made for the project
   */
  requests: Request[];
  
}