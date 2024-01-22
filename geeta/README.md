**Bhagavad Gita API Documentation**

### Overview

Welcome to the Bhagavad Gita API, provided by Sanatan Bharat. This API allows you to access specific verses from the Bhagavad Gita, a revered scripture of Hinduism. This documentation provides information on the API's usage, endpoints, and sample responses.

### API Endpoint

The Bhagavad Gita API has a single endpoint for fetching verses:

- **Endpoint:** `https://sanatan-bharat.vercel.app/geeta/chapter_number/verse_number`

Replace `chapter_number` and `verse_number` with the desired chapter and verse numbers to retrieve the corresponding Bhagavad Gita verse.

### Reason for API

The primary aim of the Bhagavad Gita API is to provide a digital platform for individuals to access and explore the wisdom contained in the Bhagavad Gita. This sacred scripture contains teachings and guidance from Lord Krishna to Arjuna, addressing various aspects of life, duty, and spirituality.

### Usage

1. **Accessing a Specific Verse:**
   - Use the provided API endpoint with the desired chapter and verse numbers.
   - Example: `GET https://sanatan-bharat.vercel.app/geeta/2/15` to get Chapter 2, Verse 15.

2. **Understanding the Response:**
   - The API response includes information such as chapter number, verse number, the original Sanskrit verse, its English translation, and an image related to the verse.

3. **Sample Response:**
   ```json
   {
     "chapterno": "2",
     "verse": "15",
     "orgverse": "श्रेयो हि ज्ञानमभ्यासाज्ज्ञानाद्ध्यानं विशिष्यते | ध्यानात्कर्मफलत्यागस्त्यागाच्छान्तिरनन्तरम् || 2.15 ||",
     "translation": "Better than knowledge is meditation, and better than meditation is renunciation of the fruits of action, for by such renunciation one can attain peace of mind.",
     "image": "https://example.com/verse-image.png"
   }
   ```

### Note

This API is intended for educational and spiritual purposes. Sanatan Bharat encourages users to explore the teachings of the Bhagavad Gita and apply its wisdom in their lives.

For any inquiries or support, please contact [your contact details].

© 2024 Sanatan Bharat.
