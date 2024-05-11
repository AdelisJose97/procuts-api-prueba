import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ unique: true })
  userName: string

  @Column()
  password: string

  @Column({ nullable: true })
  name: string

  @Column({ nullable: true })
  lastName: string

  @Column({ nullable: true })
  email: string
}
