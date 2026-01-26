import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AreasModule } from './areas/areas.module';
import { AddressesModule } from './addresses/addresses.module';
import { ProfilesModule } from './profiles/profiles.module';
import { RulesModule } from './rules/rules.module';
import { StatusesModule } from './statuses/statuses.module';
import { StagesModule } from './stages/stages.module';
import { OutcomesModule } from './outcomes/outcomes.module';
import { CourtsModule } from './courts/courts.module';
import { CourtDivisionsModule } from './court_divisions/court_divisions.module';
import { UsersModule } from './users/users.module';
import { UserSessionsModule } from './user_sessions/user_sessions.module';
import { UserAddressesModule } from './user_addresses/user_addresses.module';
import { CausesModule } from './causes/causes.module';
import { CauseUsersModule } from './cause_users/cause_users.module';
import { CauseStatusHistoryModule } from './cause_status_history/cause_status_history.module';
import { CauseStageHistoryModule } from './cause_stage_history/cause_stage_history.module';
import { CauseOutcomeHistoryModule } from './cause_outcome_history/cause_outcome_history.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        dialect: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        autoLoadModels: true,
        synchronize: true, // TODO: Disable in production and use migrations
        define: {
          underscored: true,
          timestamps: true,
          paranoid: true, // using deleted_at
          createdAt: 'created_at',
          updatedAt: 'updated_at',
          deletedAt: 'deleted_at',
        },
      }),
      inject: [ConfigService],
    }),
    AreasModule,
    AddressesModule,
    ProfilesModule,
    RulesModule,
    StatusesModule,
    StagesModule,
    OutcomesModule,
    CourtsModule,
    CourtDivisionsModule,
    UsersModule,
    UserSessionsModule,
    UserAddressesModule,
    CausesModule,
    CauseUsersModule,
    CauseStatusHistoryModule,
    CauseStageHistoryModule,
    CauseOutcomeHistoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }    
