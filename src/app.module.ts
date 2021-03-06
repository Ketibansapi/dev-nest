import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DevicesModule } from './modules/devices/devices.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './modules/users/users.module';
require('dotenv').config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }),
    DevicesModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
