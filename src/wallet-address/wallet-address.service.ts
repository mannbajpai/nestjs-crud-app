import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WalletAddress } from './wallet-address.entity';

@Injectable()
export class WalletAddressService {
  constructor(
    @InjectRepository(WalletAddress)
    private walletAddressRepository: Repository<WalletAddress>,
  ) {}

  findAll(): Promise<WalletAddress[]> {
    return this.walletAddressRepository.find({ relations: ['user'] });
  }

  findOne(id: number): Promise<WalletAddress> {
    return this.walletAddressRepository.findOne({ where: { id }, relations: ['user'] });
  }

  create(walletAddress: WalletAddress): Promise<WalletAddress> {
    return this.walletAddressRepository.save(walletAddress);
  }

  async update(id: number, walletAddress: WalletAddress): Promise<WalletAddress> {
    await this.walletAddressRepository.update(id, walletAddress);
    return this.walletAddressRepository.findOne({ where: { id }, relations: ['user'] });
  }

  async remove(id: number): Promise<void> {
    await this.walletAddressRepository.delete(id);
  }
}
