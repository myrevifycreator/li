'use server';

/**
 * @fileOverview Generates SEO-optimized blog posts based on a given topic.
 *
 * - automateContentCreation - A function that handles the blog post generation process.
 * - AutomateContentCreationInput - The input type for the automateContentCreation function.
 * - AutomateContentCreationOutput - The return type for the automateContentCreation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AutomateContentCreationInputSchema = z.object({
  topic: z.string().describe('The topic of the blog post.'),
});
export type AutomateContentCreationInput = z.infer<typeof AutomateContentCreationInputSchema>;

const AutomateContentCreationOutputSchema = z.object({
  title: z.string().describe('The title of the blog post.'),
  content: z.string().describe('The SEO-optimized content of the blog post.'),
});
export type AutomateContentCreationOutput = z.infer<typeof AutomateContentCreationOutputSchema>;

export async function automateContentCreation(input: AutomateContentCreationInput): Promise<AutomateContentCreationOutput> {
  return automateContentCreationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'automateContentCreationPrompt',
  input: {schema: AutomateContentCreationInputSchema},
  output: {schema: AutomateContentCreationOutputSchema},
  prompt: `You are an expert SEO content writer. Generate an SEO-optimized blog post about the following topic:\n\nTopic: {{{topic}}}`,
});

const automateContentCreationFlow = ai.defineFlow(
  {
    name: 'automateContentCreationFlow',
    inputSchema: AutomateContentCreationInputSchema,
    outputSchema: AutomateContentCreationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
