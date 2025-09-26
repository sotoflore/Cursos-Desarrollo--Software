import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import { AiModule } from './ai/ai.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'admin',
            password: 'admin',
            database: 'BlogBD',
            autoLoadEntities: true,
            synchronize: false, // no es recomendable en produccion usarlo en true
        }),
        UsersModule,
        PostsModule,
        AuthModule,
        AiModule,
    ],
})
export class AppModule {}
