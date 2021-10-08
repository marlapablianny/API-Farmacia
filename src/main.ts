import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

console.log(process.env.DBHOST)
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
