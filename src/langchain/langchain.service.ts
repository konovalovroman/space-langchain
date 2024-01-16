import { Injectable } from '@nestjs/common';

@Injectable()
export class LangChainService {
  processText(text: string): string {
    const keywords = {
      greet: ['hello', 'hi', 'hey'],
      bye: ['bye', 'goodbye', 'see you'],
      state: ['how', 'are you', `it's going`],
      thank: ['thank', 'thanks'],
    }

    if (keywords.greet.some((keyword) => text.toLowerCase().includes(keyword))) {
      return 'Hello, Earth is on the line, how can we help?';
    }
    if (keywords.bye.some((keyword) => text.toLowerCase().includes(keyword))) {
      return 'Bye! We’ll be in touch.';
    }
    if (keywords.state.some((keyword) => text.toLowerCase().includes(keyword))) {
      return 'Everything is calm here, how are you?';
    }
    if (keywords.thank.some((keyword) => text.toLowerCase().includes(keyword))) {
      return `You're welcome.`;
    }

    return 'Houston, we have a problem.';
  }
}
