# Ramayana Verse JSON

This repository contains JSON files representing verses from the Valmiki Ramayana.

## Usage

The JSON files are structured as follows:

- Each JSON file represents a single verse from the Ramayana.
- The files are organized in folders corresponding to the chapter numbers.
- Inside each chapter folder, the JSON files are named with the verse number.
- The JSON format for each verse includes the following fields:
  - `chapterno`: The number of the chapter.
  - `verse`: The number of the verse within the chapter.
  - `orgverse`: The original verse in Sanskrit.
  - `translation`: The English translation of the verse.

Example:
```json
{
  "chapterno": "1",
  "verse": "1",
  "orgverse": "तपः स्वाध्यायनिरताम् तपस्वी वाग्विदाम् वरम्।\nनारदं परिपप्रच्छ वाल्मीकिर्मुनिपुङ्गवम्॥",
  "translation": "Valmiki, the best of sages, who was fully devoted to austerity and study, enquired of Narada, the foremost of speakers, after having received him respectfully."
}
```

To access a specific verse, navigate to the corresponding chapter folder and open the JSON file with the desired verse number.

