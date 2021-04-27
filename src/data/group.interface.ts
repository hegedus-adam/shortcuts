import { ILink } from './link.interface';

export interface IGroup {
  groupId: number
  groupLabel: string
  links: ILink[]
}
