import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    // Gunakan string koneksi MongoDB yang sudah Anda buat
    MongooseModule.forRoot('mongodb://localhost:27017/chat-backend-app', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
  ],
  exports: [MongooseModule],
})
export class DatabaseModule {}