import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { Users, UserSchema } from "../database/users";
import { JwtModule } from "@nestjs/jwt";
import { MongooseModule } from "@nestjs/mongoose";
import { GoogleStrategy } from "./auth.googleservice";
import { CommunicationModule } from "../communication/communication.module";
import { errorHandler } from "../shared/errorhandler";
import { Otp, OtpSchema } from "../database/otp";
import { UserModule } from "../user/user.module";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Users.name, schema: UserSchema },
      { name: Otp.name, schema: OtpSchema },
    ]),
    JwtModule,
    CommunicationModule,
    UserModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, GoogleStrategy, errorHandler],
})
export class AuthModule {}
