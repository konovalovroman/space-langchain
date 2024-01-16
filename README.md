# Space API with LangChain

## Introduction
<p>This is a test assignment for implementing simulation of LangChain. Application was build with NestJS frameweork and use class-validator for validate users input.</p>


## Installation and running
Clone the repository and install dependencies

```
git clone https://github.com/konovalovroman/space-langchain.git
cd space-langchain
npm install
```

After installation is done, just run application

```
npm start
```
Now you can access to API with url:
[http://http://localhost:3000](http://localhost:3000)

## Using application
### An API has one endpoint:
POST [http://http://localhost:3000/process-text](http://localhost:3000/process-text)
<br>
Body: {"text": "Your text"}

### Responses formats:

200 OK
<br> 
{"result": "Processed text here"}


400 Bad Request 
<br> 
{
    "message": [
        Validation text error
    ],
    "error": "Bad Request",
    "statusCode": 400
}


## LangСhain usage
This application has **LangChainModule** and **LangChainService** components. It is designed to really integrate with LangChain technology. But this application only implements a simulation of LangChain behaviour:

```typescript
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
```
