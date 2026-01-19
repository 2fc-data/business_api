export class CreateAddressDto {
  postcode: string;
  city: string;
  state: string;
  district?: string;
  street?: string;
  number?: string;
  complement?: string;
}
