import { Controller, Get, Param } from '@nestjs/common';

interface User{
    id: string;
    name: string;
    email: string;
}

@Controller('users')
export class UsersController {

    private users: User[] = [
        {
            id: '1',
            name: 'John Doe',
            email: 'john@example.com'
        },
        {
            id: '2',
            name: 'Jane Doe',
            email: 'jane@example.com'
        }
    ];

    @Get()
    findAll(): User[] {
        return this.users;
    };

    @Get('/:id')
    findUser(@Param('id') id: string) {
        const user = this.users.find(user => user.id === id);
        
        if (!user) {
            throw new Error('User not found');
        }

        return user;
    }
}
