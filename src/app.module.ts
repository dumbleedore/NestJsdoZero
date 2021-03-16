import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import {password} from './password';
@Module({
  imports: [
    CatsModule,
    UserModule,
    MongooseModule.forRoot(
      'mongodb+srv://lucas:' + password + '@reactnative.i80qw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
