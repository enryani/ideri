import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Genre } from "./Genre";

@Entity("albums")
export class Album extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column()
  artisteName: string;

  @Column()
  cover: string;

  @JoinTable()
  @ManyToMany(() => Genre, (genre) => genre.albums, { eager: true })
  genres?: Genre[];
}
