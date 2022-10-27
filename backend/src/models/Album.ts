import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
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

  @JoinColumn()
  @ManyToOne(() => Genre, (genre) => genre.albums, { eager: true })
  genre?: Genre;

  @Column()
  genreId: string;
}
