import { DEFAULT_PROFILE_IMAGE, UserAccountStatus } from "src/constants/index.constant";
import { AfterInsert, AfterRemove, AfterUpdate, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";

@Entity()
@Unique(["email"])
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 100 })
  firstname: string;

  @Column({ length: 100 })
  lastname: string;

  @Column({ length: 100 , unique: true })
  username: string;

  @Column({ length: 200 , unique:true })
  email: string;

  @Column({ length: 20 , unique:true })
  phone: string;

  @Column({ length: 200 })
  password: string;

  @Column({ length: 20 })
  dob: string;

  @Column({ type:'text' })
  address: string;

  @Column({ default: DEFAULT_PROFILE_IMAGE })
  picture: string;

  @Column({ default: false })
  emailVerifiedStatus: boolean;

  @Column({ default: UserAccountStatus.UNDER_REVIEW })
  accountStatus: string;

  @CreateDateColumn({
    type: "timestamp"
  })
  lastLoggedIn: Date

  @CreateDateColumn({
    type: "timestamp"
  })
  createdDate: Date

  @UpdateDateColumn({
    type: "timestamp"
  })
  updatedDate: Date

  @AfterInsert()
  logInsert() {
    console.log('Inserted User with id', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Updated User with id', this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('Removed User with id', this.id);
  }
}

export default User;