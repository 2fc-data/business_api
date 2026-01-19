export class CreateUserSessionDto {
  user_id: number;
  device_info?: string;
  ip_address?: string;
  user_agent?: string;
}
