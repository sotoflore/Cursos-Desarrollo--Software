import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';

@Injectable()
export class OpenaiService {

    private openai: OpenAI;

    constructor() {
        this.openai = new OpenAI({
            apiKey: 'mi_api_key' //process.env.OPENAI_API_KEY,
        });
    }

    async generateSummary(content: string): Promise<string> {

        const response = await this.openai.responses.create({
            model: 'gtp-4o-mini',
            instructions: 'You are a helpful assistant that summaries for blog posts.',
            input: content
            //messages: [{ role: 'user', content: prompt }],
            //max_tokens: 100,
            //temperature: 0.7,
            //top_p: 1,
            //frequency_penalty: 0,
            //presence_penalty: 0
        })
        return response.output_text
    }

    async generateImage(text: string): Promise<string> {

        const prompt = `Generate an image for a blogs post about ${text}`;

        const response = await this.openai.images.generate({
            model: 'dall-e-3',
            prompt: prompt,
            response_format: 'url',
            //n: 1,
            //size: '1024x1024'
        });

        if (!response.data?.[0].url) {
            throw new Error('Error generating image');
        }

        return response.data[0].url;
    }

}
