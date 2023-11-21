// Mock the entire 'openai' module
// jest.mock('openai', () => {
//   return {
//     OpenAI: jest.fn().mockImplementation(() => {
//       return {
//         audio: {
//           speech: {
//             create: jest.fn().mockResolvedValue({
//               arrayBuffer: () => Promise.resolve(new ArrayBuffer(0))
//             }),
//           },
//         },
//       };
//     }),
//   };
// });
// jest.mock('react', () => ({
//   ...jest.requireActual('react'), // use actual for all non-hook parts
//   useEffect: () => {}, // mock useEffect
//   useRef: () => {}, // mock useRef
//   useState: () => [null, {}], // mock useState
// }));

import textToSpeech from './text-to-speech';
import { OpenAI } from 'openai';

describe('ChatMessage', () => {
  it('should use the OpenAI API to generate an audio file', async () => {
    const content = "Hello, world!";
    const createMock = (OpenAI as jest.MockedClass<typeof OpenAI>).mock.instances[0].audio.speech.create;

    // Act
    await textToSpeech(content, "male");

    // Assert
    expect(createMock).toHaveBeenCalledWith({
      model: "tts-1",
      voice: "alloy",
      input: content,
    });
  });
});