import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
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

  @OneToMany(() => Album, (album) => album.genre)
  albums: Album[];
}
