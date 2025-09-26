import { Column, CreateDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Post } from "./post.entity";

@Entity({
    name: 'categories',
})
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255, unique: true })
    name: string;

    // propiedad agregadad cuando se implemento la migracion
    @Column({ type: 'varchar', length: 800, nullable: true})
    description: string;

    // propiedad agregada cuando se implemento la migracion
    @Column({ type: 'varchar', length: 800, name: 'cover_image', nullable: true })
    coverImage: string;

    @CreateDateColumn({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
        name: 'create_at',
    })
    createAt: Date;

    @UpdateDateColumn({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
        name: 'update_at',
    })
    updateAt: Date;

    @ManyToMany(() => Post, (post) => post.categories)
    posts: Post[];
}

