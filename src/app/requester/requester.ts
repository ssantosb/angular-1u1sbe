import { Unit } from '../unit/unit';

export class Requester {
  
  /**
   * The requester's id
   */
  id:number;

  /**
   * The requester's name
   */
  name: string;

  /**
   * The requester's login
   */
  login: string;

  /**
   * The requester's email
   */
  email: string;

  /**
   * The requester's phone
   */
  phone: string;

  /**
   * The requester's image
   */
  image: string;

  /**
   * The requester's unit
   */
  unit: Unit;

}