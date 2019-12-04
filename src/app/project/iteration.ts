import {Project} from './project';

export class Iteration {
  
  /**
   * el id de la iteración
   */
  id: number;

  /**
   * objetivo de la iteración
   */
  objetive: string;

  /**
   * fecha de validación de la iteración
   */
  validationDate:any;

  /**
   * cambios que se dieron en la iteración
   */
  changes:string;

  /**
   * fecha de inicio de la iteración
   */
  beginDate: any;

  /**
   * fecha de finalización de la iteración
   */
  endDate: any;

  /**
   * proyecto al cual pertence la iteración
   */
  projecto: Project;

}