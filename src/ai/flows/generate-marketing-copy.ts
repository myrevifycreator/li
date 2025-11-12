'use server';

/**
 * @fileOverview AI-powered marketing copy generator.
 *
 * - generateMarketingCopy - A function that generates marketing copy variations.
 * - GenerateMarketingCopyInput - The input type for the generateMarketingCopy function.
 * - GenerateMarketingCopyOutput - The return type for the generateMarketingCopy function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateMarketingCopyInputSchema = z.object({
  productName: z.string().describe('The name of the product or service.'),
  targetAudience: z.string().describe('The target audience for the marketing copy.'),
  keyFeatures: z.string().describe('The key features or benefits to highlight.'),
  tone: z.string().describe('The desired tone of the marketing copy (e.g., professional, playful, urgent).'),
  numberOfCopies: z.number().describe('The number of marketing copy variations to generate.').default(3),
});
export type GenerateMarketingCopyInput = z.infer<typeof GenerateMarketingCopyInputSchema>;

const GenerateMarketingCopyOutputSchema = z.object({
  copies: z.array(z.string()).describe('An array of generated marketing copy variations.'),
});
export type GenerateMarketingCopyOutput = z.infer<typeof GenerateMarketingCopyOutputSchema>;

export async function generateMarketingCopy(input: GenerateMarketingCopyInput): Promise<GenerateMarketingCopyOutput> {
  return generateMarketingCopyFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateMarketingCopyPrompt',
  input: {schema: GenerateMarketingCopyInputSchema},
  output: {schema: GenerateMarketingCopyOutputSchema},
  prompt: `You are an expert marketing copywriter. Generate multiple variations of ad copy based on the provided information.  Make sure the variations are distinct and highlight different aspects of the product.

Product Name: {{{productName}}}
Target Audience: {{{targetAudience}}}
Key Features: {{{keyFeatures}}}
Tone: {{{tone}}}
Number of Copies: {{{numberOfCopies}}}

Output the marketing copies in JSON format.`, 
});

const generateMarketingCopyFlow = ai.defineFlow(
  {
    name: 'generateMarketingCopyFlow',
    inputSchema: GenerateMarketingCopyInputSchema,
    outputSchema: GenerateMarketingCopyOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
