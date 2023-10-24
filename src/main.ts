import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { Logger, ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  try{
    app.use(cookieParser())
    app.useGlobalPipes(new ValidationPipe());
    app.setGlobalPrefix("api")
    const config = new DocumentBuilder()
      .setTitle('Your API')
      .setDescription('API description')
      .setVersion('1.0')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
  catch (error) {
    Logger.error(`Failed to start the application: ${error}`, '', 'Bootstrap');
  }
}
bootstrap();
