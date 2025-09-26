import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsNotEmpty, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { UpdateProfileDto } from './update-profile.dto';

export class CreateUserWithoutProfileDto extends OmitType(CreateUserDto, ['profile']) {}

export class UpdateUserDto extends PartialType(CreateUserWithoutProfileDto) {
    
    @ValidateNested()
    @Type(() => UpdateProfileDto)
    @IsOptional()
    profile: UpdateProfileDto;

}
