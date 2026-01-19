export class CreateUserDto {
  name: string;
  username: string;
  document: string;
  email: string;
  password?: string; // Optional because we might create user without password initially or via other means? No, usually required.
  // Actually usually required.
  phone1?: string;
  phone2?: string;
  is_active?: boolean;
}
