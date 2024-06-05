import { IsNotEmpty, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateWalletAddressDto {
  @ApiProperty({ example: '0x1234567890abcdef1234567890abcdef12345678' })
  @IsNotEmpty()
  @Length(10, 42)
  address: string;

  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  userId: number;
}

export class UpdateWalletAddressDto extends CreateWalletAddressDto {}
