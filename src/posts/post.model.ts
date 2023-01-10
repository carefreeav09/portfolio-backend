import { Model, Column, Table, Default, DataType } from "sequelize-typescript";

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

  @Column({ type: DataType.TEXT })
  description: string;

  @Column({ type: DataType.ARRAY(DataType.STRING) })
  technologiesUsed: string[];

  @Column(
    DataType.ENUM(
      "in-progress",
      "completed",
      "on-hold",
      "cancelled"
    )
  )
  projectStatus: PROJECT_STATUS;

  @Default("Lead Developer")
  @Column
  role: string;

  @Default(false)
  @Column
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