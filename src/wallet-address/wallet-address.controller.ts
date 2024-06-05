import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { WalletAddressService } from './wallet-address.service';
import { WalletAddress } from './wallet-address.entity';
import { CreateWalletAddressDto, UpdateWalletAddressDto } from './wallet-address.dto';

@ApiTags('wallet-address')
@Controller('wallet-address')
export class WalletAddressController {
  constructor(private readonly walletAddressService: WalletAddressService) {}

  @Get()
  @ApiOperation({ summary: 'Get all wallet addresses' })
  @ApiResponse({ status: 200, description: 'Return all wallet addresses', type: [WalletAddress] })
  findAll(): Promise<WalletAddress[]> {
    return this.walletAddressService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a wallet address by ID' })
  @ApiParam({ name: 'id', example: 1 })
  @ApiResponse({ status: 200, description: 'Return the wallet address', type: WalletAddress })
  @ApiResponse({ status: 404, description: 'Wallet address not found' })
  findOne(@Param('id') id: string): Promise<WalletAddress> {
    return this.walletAddressService.findOne(+id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new wallet address' })
  @ApiBody({ type: CreateWalletAddressDto })
  @ApiResponse({ status: 201, description: 'The wallet address has been successfully created.', type: WalletAddress })
  create(@Body() createWalletAddressDto: CreateWalletAddressDto): Promise<WalletAddress> {
    const walletAddress = new WalletAddress();
    walletAddress.address = createWalletAddressDto.address;
    walletAddress.user = { id: createWalletAddressDto.userId } as any;  // You may want to use an appropriate DTO or fetch the user entity.
    return this.walletAddressService.create(walletAddress);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an existing wallet address' })
  @ApiParam({ name: 'id', example: 1 })
  @ApiBody({ type: UpdateWalletAddressDto })
  @ApiResponse({ status: 200, description: 'The wallet address has been successfully updated.', type: WalletAddress })
  @ApiResponse({ status: 404, description: 'Wallet address not found' })
  update(@Param('id') id: string, @Body() updateWalletAddressDto: UpdateWalletAddressDto): Promise<WalletAddress> {
    const walletAddress = new WalletAddress();
    walletAddress.address = updateWalletAddressDto.address;
    walletAddress.user = { id: updateWalletAddressDto.userId } as any;
    return this.walletAddressService.update(+id, walletAddress);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a wallet address' })
  @ApiParam({ name: 'id', example: 1 })
  @ApiResponse({ status: 204, description: 'The wallet address has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Wallet address not found' })
  remove(@Param('id') id: string): Promise<void> {
    return this.walletAddressService.remove(+id);
  }
}
