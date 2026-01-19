export class CreateUserAddressDto {
  user_id: number;
  address_id: number;
  address_type?: string;
  is_primary?: boolean;
}
