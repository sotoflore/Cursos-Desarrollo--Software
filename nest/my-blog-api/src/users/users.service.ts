import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { Profile } from './entities/profile.entity';
import e from 'express';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        //@InjectRepository(Profile)
        //private readonly profileRepository: Repository<Profile>,
    ){}

    async findAll() {
        const user = await this.userRepository.find({
            relations: ['profile']
        }); 
        return user;
    }
    
    async getUserById(id: number) {
        const user = await this.findOne(id);
        return user;
    }

    async getProfileById(id: number) {
        const user = await this.findOne(id);
        return user.profile;
    }

    async getPostsByUserId(id: number) {
        const user = await this.userRepository.findOne({
            where: { id },
            relations: ['posts']
        });

        if (!user) {
            throw new NotFoundException(`User with id ${id} not found`);
        }

        return user.posts;
    }

    async create(createUserDto: CreateUserDto) {
        try {
            const newUser = await this.userRepository.create(createUserDto);
            const savedUser = await this.userRepository.save(newUser);
            return savedUser;
        } catch (error) {
            throw new BadRequestException('Error creating user');
            //throw new BadRequestException(error.message);
        }
    }
    
    async update(id: number, updateUserDto: UpdateUserDto) {
        
        try {
            const user = await this.findOne(id);
            const updatedUser = this.userRepository.merge(user, updateUserDto);
            const savedUser = await this.userRepository.save(updatedUser);
            return savedUser;
        } catch (error) {
            //throw new BadRequestException('Error updating user');
            throw new BadRequestException(error.message);
        }
    }
    
    async delete(id: number) {
        
        //const userDeleted = await this.userRepository.findOneBy({ id: id })
        try {
            await this.userRepository.delete(id);
            return {
                message: 'User deleted successfully',
            } 
        } catch (error) {
            throw new BadRequestException('Error deleting user');
            //throw new BadRequestException(error.message);
        }
    }

    private async findOne(id: number) {

        const user = await this.userRepository.findOne({
            where: { id },
            relations: ['profile']
        })

        if (!user) {
            throw new NotFoundException(`User with id ${id} not found`);
        }

        return user;
    }

    async getUserByEmail(email: string) {

        const user = await this.userRepository.findOne({
            where: { email },
            //relations: ['profile']
        });

        return user;
    }
}
