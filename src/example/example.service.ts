import { Injectable } from '@nestjs/common';

@Injectable()
export class ExampleService {
  getExampleHello(): string {
    return 'Hello Example World!';
  }
}
