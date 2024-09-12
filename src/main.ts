import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { Transport } from '@nestjs/microservices';
import { ValidationPipe } from '@nestjs/common';
import { GlobalRpcExceptionFilter } from './filter/http.exception.filter';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.REDIS,
    options: {
      host: "localhost",
      port: 6379,
      retryAttempts: 5,
      retryDelay: 1000,
    }
  });
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true
  }));
  // app.useGlobalFilters(new GlobalRpcExceptionFilter());
  await app.listen();
}
bootstrap();
