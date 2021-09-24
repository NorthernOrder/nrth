import { join } from 'path';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApplicationModule } from './application/application.module';
import { UserModule } from './user/user.module';
import { GroupModule } from './group/group.module';
import { ConnectionModule } from './connection/connection.module';
import { AuthModule } from './auth/auth.module';
import configuration from './configuration';
import { Application } from './application/entities/application.entity';
import { Connection } from './connection/entities/connection.entity';
import { Group } from './group/entities/group.entity';
import { User } from './user/entities/user.entity';
import { GraphQLModule } from '@nestjs/graphql';
import { environment } from '../environments/environment';
import { NodeModule } from './node/node.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get('database.url'),
        entities: [Application, Connection, Group, User],
      }),
      inject: [ConfigService],
    }),
    GraphQLModule.forRoot({
      /* external */
      autoSchemaFile: join(__dirname, '..', 'assets', 'external.gql'),
      playground: true,
      introspection: true,
      sortSchema: true,
      useGlobalPrefix: true,
      include: [UserModule, GroupModule, NodeModule],
    }),
    GraphQLModule.forRoot({
      /* internal */
      autoSchemaFile: join(__dirname, '..', 'assets', 'internal.gql'),
      playground: !environment.production,
      introspection: !environment.production,
      sortSchema: true,
      path: 'internal/graphql',
      useGlobalPrefix: true,
    }),
    NodeModule,
    ApplicationModule,
    UserModule,
    GroupModule,
    ConnectionModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
