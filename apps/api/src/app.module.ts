import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { UsersModule } from './users/users.module';
import { FiletestController } from './filetest/filetest.controller';
import { FiletestController } from './filetest/filetest.controller';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../', 'client/dist'),
    }),
    UsersModule,
  ],
  controllers: [FiletestController],
  providers: [],
})
export class AppModule {}
