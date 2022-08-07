import { IsEmail, isPhoneNumber, Max, Min } from "class-validator";

export class CreateCustomerDto {
  name: string;
  @IsEmail()
  email: string;
  @Min(5000000000)
  @Max(9999999999)
  phoneNumber: number;
  password: string;
}
