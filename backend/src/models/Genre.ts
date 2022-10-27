import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Album } from "./Album";

@Entity("genres")
export class Genre extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ type: "text" })
  description: string;

  @ManyToMany(() => Album, (album) => album.genres)
  albums: Album[];
}
