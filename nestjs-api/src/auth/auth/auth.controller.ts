import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { Role } from '../role.decorator';
import { RoleGuard } from '../role.guard';
import { AuthService } from './auth.service';
import { JwtGuard } from './jwt.guard';
import { ApiCreatedResponse, ApiOkResponse, ApiUnauthorizedResponse } from '@nestjs/swagger';


@Controller()
export class AuthController {

    constructor(private authService: AuthService) {

    }

    @Post('login')
    @ApiCreatedResponse({description: 'Returns the token'})
    login(@Body() body): { token: string; } {
        return {token: this.authService.login(body.username, body.password)}
    }
    @Role('admin')
    @ApiOkResponse({description: 'User Logged In'})
    @ApiUnauthorizedResponse({description: 'Invalid credentials'})
    @UseGuards(JwtGuard, RoleGuard)
    @Get('test-auth')
    test(@Req() req) {
        console.log(req.user);
        return {
            name: 'Gabriel Carneiro Jr',
        }
    }

}
