import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { LangChainService } from '../langchain/langchain.service';
import { TextDto } from './dto/text.dto';

@Controller()
export class AppController {
  constructor(private readonly langChainService: LangChainService) {}

  @Post('process-text')
  @HttpCode(HttpStatus.OK)
  processText(@Body() body: TextDto) {
    const result = this.langChainService.processText(body.text);
    return { result };
  }
}
