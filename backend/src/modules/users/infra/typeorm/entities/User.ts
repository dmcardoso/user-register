import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm';

import { Exclude } from 'class-transformer';
import Country from '@modules/countries/infra/typeorm/entities/Country';

enum Gender {
    male,
    female,
    other,
}

@Entity('users')
class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    email: string;

    @Column()
    name: string;

    @Column()
    @Exclude()
    password: string;

    @Column({
        type: 'enum',
        enum: Gender,
    })
    gender: Gender;

    @Column()
    phone: string;

    @Column()
    country_id: number;

    @ManyToOne(() => Country)
    @JoinColumn({ name: 'country_id' })
    country: Country;

    @Column()
    cpf: string;

    @Column()
    newsletter: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default User;
