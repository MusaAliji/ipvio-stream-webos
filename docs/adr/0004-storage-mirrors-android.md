# Storage mirrors Android's SharedPreferences, and item ids use Java's String.hashCode

Each Android SharedPreferences file becomes a localStorage namespace with the same file names, keys and value types (profile N with the suffix `_p<N>`), and item ids are computed with an exact port of Java's `String.hashCode()` of the stream URL. This looks odd in a web app but makes backups and Google Drive live sync work between Android and webOS without any mapping layer. Large data (playlist cache, TV guide, metadata) goes to IndexedDB and is never part of backups.
