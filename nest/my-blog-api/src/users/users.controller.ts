import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }


    @Get()
    getUsers() {
        return this.usersService.findAll();
    }

    @Get(':id')
    findUser(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.getUserById(id);
    }

    @Get(':id/profile')
    findProfile(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.getProfileById(id);
    }

    @Get(':id/posts')
    findPosts(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.getPostsByUserId(id);
    }


    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto);
    }

    @Patch(':id')
    updateUser(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto) {
        return this.usersService.update(id, updateUserDto);
    }

    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.delete(id);
    }
}
