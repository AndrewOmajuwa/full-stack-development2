// src/advertisements/entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'

@Entity()
export default class Advertisements extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('text', {nullable:false})
  title: string

  @Column('text', {nullable:false})
  description: string
  
  @Column('text', {nullable:false})
  picture: string

  @Column('text', {nullable:false})
  price: number

  @Column('text', {nullable:false})
  emailAddress: string

  @Column('text', {nullable:false})
  phoneNumber: number
}