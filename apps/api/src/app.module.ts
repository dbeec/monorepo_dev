import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { UsersModule } from './users/users.module';
import { TestControllerController } from './test-controller/test-controller.controller';
import { TestServiceService } from './test-service/test-service.service';
import { TestModuleModule } from './test-module/test-module.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../', 'client/dist'),
    }),
    UsersModule,
    TestModuleModule,
  ],
  controllers: [AppController, TestControllerController],
  providers: [AppService, TestServiceService],
})
export class AppModule {}
