import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) { }

  async validateUser(username: string, pass: string): Promise<any> {
    try {
      console.log(`Attempting login for user: ${username}`);
      const user = await this.usersService.findOneByUsername(username);
      console.log('User found:', user ? 'Yes' : 'No');

      if (user) {
        console.log('Has password hash:', !!user.password_hash);
        const isMatch = await bcrypt.compare(pass, user.password_hash);
        console.log('Password match:', isMatch);

        if (isMatch) {
          const { password_hash, ...result } = user.get({ plain: true });
          return result;
        }
      }
      return null;
    } catch (error) {
      console.error('Error in validateUser:', error);
      throw error;
    }
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        username: user.username,
      }
    };
  }
}
