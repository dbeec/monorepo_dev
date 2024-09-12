import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { City } from "./entities/city.entity";
import { citiesController } from "./controllers/cities.controller";
import { CitiesService } from "./services/cities.service";
import { AdditionalServices } from "./services/additional.service";


@Module({
  imports: [TypeOrmModule.forFeature([City])],
  controllers: [citiesController],
  providers: [CitiesService, AdditionalServices],
  exports: [TypeOrmModule],
})

export class CitiesModule {}