import { BeforeInsert, Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Profile } from "./profile.entity";
import { Post } from "../../posts/entities/post.entity";
import * as bcrypt from 'bcrypt';
import { Exclude } from "class-transformer";

@Entity({ name: 'users' })
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255, unique: true })
    email: string;

    @Exclude()
    @Column({ type: 'varchar', length: 255 })
    password: string;

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP', name: 'create_at' })
    createAt: Date;

    @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP', name: 'update_at' })
    updateAt: Date;

    @OneToOne(() => Profile, {nullable: true, cascade: true}) // relacion de uno a uno
    @JoinColumn({ name: 'profile_id' })
    profile: Profile;

    @OneToMany(() => Post, (post) => post.user)
    posts: Post[];

    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10);
    }
}
