import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { LocalStrategy } from './strategies/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
    imports: [
        UsersModule,
        PassportModule,
        JwtModule.register({
            secret:'12344',
            signOptions: { expiresIn: '1h' }
        })
    ],
    providers: [AuthService, LocalStrategy, JwtStrategy],
    controllers:[AuthController]
})
export class AuthModule {}
