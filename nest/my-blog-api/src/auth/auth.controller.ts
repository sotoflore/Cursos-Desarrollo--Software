import { Controller, Post, Req, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Request } from "express";
import { User } from "src/users/entities/user.entity";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }

    @UseGuards(AuthGuard('local'))
    @Post('login')
    login(@Req() req: Request) {
        const user = req.user as User;
        return {
            user,
            access_token: this.authService.generateToken(user)
        }
    }
}