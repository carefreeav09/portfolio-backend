import { Model, Column, Table, Default } from "sequelize-typescript";


type PROJECT_STATUS = 'in-progress' | 'completed' | 'on-hold' | 'cancelled';

export interface IPost {
  [x: string]: any;
  name: string;
  description: string;
  technologiesUsed: string[];
  projectStatus: PROJECT_STATUS;
  role: string;
  isApp: boolean;
  appleLink?: string;
  androidLink?: string;
  link?: string;
  startDate?: Date;
  endDate?: Date;
  image?: string;
}

@Table({ timestamps: true })
class Posts extends Model {
  @Column
  name: string;

  @Column
  description: string;

  @Column
  technologiesUsed: string[];

  @Column
  projectStatus: PROJECT_STATUS;

  @Column
  @Default("Lead Developer")
  role: string;

  @Column
  @Default(false)
  isApp: boolean;

  @Column
  appleLink?: string;

  @Column
  androidLink?: string;

  @Column
  link?: string;

  @Column
  startDate?: Date;

  @Column
  endDate?: Date;

  @Column
  image?: string;
}

export default Posts;