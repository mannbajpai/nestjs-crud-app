import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WalletAddressService } from './wallet-address.service';
import { WalletAddressController } from './wallet-address.controller';
import { WalletAddress } from './wallet-address.entity';
import { User } from '../users/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([WalletAddress, User])],
  providers: [WalletAddressService],
  controllers: [WalletAddressController],
})
export class WalletAddressModule {}
