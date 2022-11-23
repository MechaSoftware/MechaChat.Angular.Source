export class IUser {
    Id!: Number;
    UserId!: Number;
    UserName!: String;
    Discriminator!: Number;
    IsBanned!: Boolean;
    IsBot!: Boolean;
    Email!: String;
    Password!: String;
}