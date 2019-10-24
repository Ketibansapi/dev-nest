import { Module } from '@nestjs/common';
import { DevicesService } from './devices.service';
import { DevicesController } from './devices.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DevicesSchema } from '../../schemas/devices.schema';

@Module({
  imports: [MongooseModule.forFeature([{
    name: 'Devices',
    schema: DevicesSchema
  }])],
  providers: [DevicesService],
  controllers: [DevicesController]
})
export class DevicesModule {}
